import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Graph } from './Importer';

interface ThreeDCanvasProps {
  graph: Graph | null;
}

const ThreeDCanvas: React.FC<ThreeDCanvasProps> = ({ graph }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  
  const isAnimatingRef = useRef(false);
  const targetPositionRef = useRef<THREE.Vector3 | null>(null);
  const targetLookAtRef = useRef<THREE.Vector3 | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  const nodeMeshesRef = useRef<THREE.Mesh[]>([]);
  const edgeLinesRef = useRef<THREE.Line[]>([]);
  const geometriesToDispose = useRef<THREE.BufferGeometry[]>([]);
  const materialsToDispose = useRef<THREE.Material[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;

    scene.add(new THREE.AmbientLight(0x404040, 0.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };

    const handleDoubleClick = (event: MouseEvent) => {
      if (!cameraRef.current || !sceneRef.current || !mountRef.current) return;

      const mouse = new THREE.Vector2();
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, cameraRef.current);

      const intersects = raycaster.intersectObjects(nodeMeshesRef.current);

      if (intersects.length > 0) {
        const targetObject = intersects[0].object;
        const targetPosition = targetObject.position.clone();
        
        if (controlsRef.current) {
          controlsRef.current.enabled = false;
        }

        isAnimatingRef.current = true;
        targetLookAtRef.current = targetPosition;
        
        const offset = cameraRef.current.position.clone().sub(targetPosition).normalize().multiplyScalar(10);
        targetPositionRef.current = targetPosition.clone().add(offset);
      }
    };

    window.addEventListener('resize', handleResize);
    renderer.domElement.addEventListener('dblclick', handleDoubleClick);

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      if (isAnimatingRef.current && targetPositionRef.current && targetLookAtRef.current && cameraRef.current && controlsRef.current) {
        const animSpeed = 0.08;
        cameraRef.current.position.lerp(targetPositionRef.current, animSpeed);
        controlsRef.current.target.lerp(targetLookAtRef.current, animSpeed);

        const distance = cameraRef.current.position.distanceTo(targetPositionRef.current);
        if (distance < 0.1) {
          isAnimatingRef.current = false;
          targetPositionRef.current = null;
          targetLookAtRef.current = null;
          if (controlsRef.current) {
            controlsRef.current.enabled = true;
          }
        }
      }
      
      controlsRef.current?.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if(animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('dblclick', handleDoubleClick);
      controls.dispose();
      geometriesToDispose.current.forEach(g => g.dispose());
      materialsToDispose.current.forEach(m => m.dispose());
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (graph && sceneRef.current) {
      nodeMeshesRef.current.forEach(mesh => sceneRef.current?.remove(mesh));
      edgeLinesRef.current.forEach(line => sceneRef.current?.remove(line));
      geometriesToDispose.current.forEach(g => g.dispose());
      materialsToDispose.current.forEach(m => m.dispose());
      nodeMeshesRef.current = [];
      edgeLinesRef.current = [];
      geometriesToDispose.current = [];
      materialsToDispose.current = [];

      const nodeMap = new Map<string, THREE.Vector3>();

      graph.nodes.forEach(node => {
        let geometry: THREE.BufferGeometry;
        const material = new THREE.MeshStandardMaterial({ 
            color: node.id.startsWith('sphere') ? 0xff0000 : 0x00ff00, 
            metalness: 0.7, 
            roughness: 0.3 
        });

        if (node.id.startsWith('sphere')) {
          geometry = new THREE.SphereGeometry(1.5, 32, 32);
        } else {
          geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(node.position.x, node.position.y, node.position.z);
        sceneRef.current?.add(mesh);
        nodeMeshesRef.current.push(mesh);
        geometriesToDispose.current.push(geometry);
        materialsToDispose.current.push(material);
        nodeMap.set(node.id, mesh.position);
      });

      graph.edges.forEach(edge => {
        const start = nodeMap.get(edge.source);
        const end = nodeMap.get(edge.target);

        if (start && end) {
          const material = new THREE.LineBasicMaterial({ color: 0xffffff });
          const points = [start, end];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, material);
          sceneRef.current?.add(line);
          edgeLinesRef.current.push(line);
          geometriesToDispose.current.push(geometry);
          materialsToDispose.current.push(material);
        }
      });

      if (cameraRef.current && controlsRef.current) {
        const allY = graph.nodes.map(n => n.position.y);
        const minY = Math.min(...allY);
        const maxY = Math.max(...allY);
        const sceneCenterY = (minY + maxY) / 2;
        cameraRef.current.position.set(0, sceneCenterY, 50);
        controlsRef.current.target.set(0, sceneCenterY, 0);
        controlsRef.current.update();
      }
    }
  }, [graph]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeDCanvas;
