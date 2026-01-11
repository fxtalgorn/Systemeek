// src/components/ThreeDCanvas.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ThreeDCanvasProps {
  rotationSpeed: number; // Vitesse en tours par minute (0-100)
}

// Fonction utilitaire pour vérifier la disponibilité de WebGL
function checkWebGLAvailability() {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('webgl2')));
    } catch (_e) {
        return false;
    }
}

// Fonction utilitaire pour générer un message d'erreur WebGL
function getSimpleWebGLErrorMessage() {
    const element = document.createElement('p');
    element.id = 'webgl-error-message';
    element.style.setProperty('font-family', 'monospace');
    element.style.setProperty('font-size', '13px');
    element.style.setProperty('font-weight', 'normal');
    element.style.setProperty('text-align', 'center');
    element.style.setProperty('background', '#fff');
    element.style.setProperty('color', '#000');
    element.style.setProperty('padding', '1.5em');
    element.style.setProperty('width', '400px');
    element.style.setProperty('margin', '5em auto 0');
    element.style.setProperty('border-radius', '5px');
    element.innerHTML = 'Votre navigateur ou votre carte graphique ne semble pas supporter WebGL.<br /><br />Veuillez vous assurer que votre navigateur est à jour et que l\'accélération matérielle est activée.';
    return element;
}


const ThreeDCanvas: React.FC<ThreeDCanvasProps> = ({ rotationSpeed }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const lastTime = useRef<number>(0);
  const currentRotationSpeedRef = useRef(rotationSpeed);

  // Stocke les références pour le nettoyage
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight | null>(null);
  const axesHelperRef = useRef<THREE.AxesHelper | null>(null);
  const canvasDOMElementRef = useRef<HTMLCanvasElement | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  // NOUVELLES RÉFÉRENCES pour les objets de la scène et leurs ressources
  const sphereMeshRef = useRef<THREE.Mesh | null>(null);
  const cubeMeshesRef = useRef<THREE.Mesh[]>([]);
  const geometriesToDispose = useRef<THREE.BufferGeometry[]>([]);
  const materialsToDispose = useRef<THREE.Material[]>([]);


  useEffect(() => {
    currentRotationSpeedRef.current = rotationSpeed;
  }, [rotationSpeed]);

  useEffect(() => {
    console.log("ThreeDCanvas: useEffect MOUNTING phase started. mountRef.current:", mountRef.current);

    if (!mountRef.current) {
      console.error("ThreeDCanvas: Mount point (mountRef.current) is null on mount.");
      return;
    }

    if (mountRef.current.clientWidth === 0 || mountRef.current.clientHeight === 0) {
      console.warn("ThreeDCanvas: Mount point has zero client dimensions, Three.js initialization might fail.");
      return;
    }

    // --- VÉRIFICATION WEBGL ---
    if (!checkWebGLAvailability()) {
        const warning = getSimpleWebGLErrorMessage();
        if (mountRef.current) {
            mountRef.current.appendChild(warning);
        }
        console.error("ThreeDCanvas: WebGL est indisponible.");
        return;
    }
    console.log("ThreeDCanvas: WebGL est disponible.");
    // --- Fin Vérification WebGL ---

    console.log("ThreeDCanvas: Initializing Three.js...");
    console.log("ThreeDCanvas: Mount point dimensions:", mountRef.current.clientWidth, mountRef.current.clientHeight);

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    sceneRef.current = scene;

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15); // Caméra reculée pour voir toute la structure
    cameraRef.current = camera;
    console.log("ThreeDCanvas: Camera position:", camera.position);


    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    
    canvasDOMElementRef.current = renderer.domElement; 
    mountRef.current.appendChild(canvasDOMElementRef.current);
    
    rendererRef.current = renderer;
    console.log("ThreeDCanvas: Renderer DOM element appended:", canvasDOMElementRef.current);

    const glContext = renderer.getContext();
    if (!glContext) {
      console.error("ThreeDCanvas: Le contexte WebGL du Renderer est null après création ! Impossible de rendre.");
      if (mountRef.current) {
          mountRef.current.appendChild(getSimpleWebGLErrorMessage());
      }
      return;
    }
    console.log("ThreeDCanvas: Contexte WebGL du Renderer obtenu.");


    // --- NOUVEAUX ÉLÉMENTS DE LA SCÈNE (Graphe) ---

    // Paramètres du graphe
    const SPHERE_RADIUS = 1.5;
    const CUBE_SIZE = 1.5;
    const Y_OFFSET_SPHERE = 3; // Position Y de la sphère
    const Y_OFFSET_CUBES = -3; // Position Y des cubes
    const CIRCLE_RADIUS = 4; // Rayon du cercle pour les cubes

    // 1. La Sphère "en haut"
    const sphereGeometry = new THREE.SphereGeometry(SPHERE_RADIUS, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, metalness: 0.7, roughness: 0.3 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.y = Y_OFFSET_SPHERE;
    scene.add(sphere);
    sphereMeshRef.current = sphere;
    geometriesToDispose.current.push(sphereGeometry);
    materialsToDispose.current.push(sphereMaterial);
    console.log("ThreeDCanvas: Sphere added at:", sphere.position);

    // 2. Les trois Cubes "en dessous"
    const cubeGeometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.7, roughness: 0.3 });
    
    const numCubes = 3;
    for (let i = 0; i < numCubes; i++) {
        const angle = (i / numCubes) * Math.PI * 2; // Angles : 0, 2pi/3, 4pi/3
        const x = Math.cos(angle) * CIRCLE_RADIUS;
        const z = Math.sin(angle) * CIRCLE_RADIUS;
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(x, Y_OFFSET_CUBES, z);
        scene.add(cube);
        cubeMeshesRef.current.push(cube);
        console.log(`ThreeDCanvas: Cube ${i} added at:`, cube.position);
    }
    // La géométrie et le matériau des cubes sont réutilisés, donc on les dispose une seule fois
    geometriesToDispose.current.push(cubeGeometry);
    materialsToDispose.current.push(cubeMaterial);
    
    // --- FIN NOUVEAUX ÉLÉMENTS ---


    // AJOUT DES LUMIERES
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);
    directionalLightRef.current = directionalLight;
    console.log("ThreeDCanvas: Lights added.");

    // AJOUT D'UN AXES HELPER POUR LE DEBOGAGE
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    axesHelperRef.current = axesHelper;
    console.log("ThreeDCanvas: AxesHelper added.");
    
    // Initialisation de OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 200; // Augmenter la distance max pour la nouvelle scène
    // Point autour duquel la caméra tourne (centre Y de notre structure)
    controls.target.set(0, (Y_OFFSET_SPHERE + Y_OFFSET_CUBES) / 2, 0); 
    controls.update();
    controlsRef.current = controls;
    console.log("ThreeDCanvas: OrbitControls initialized.");

    // Resizing Handler
    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        console.log("ThreeDCanvas: Resized to:", mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    const animate = (time: number) => {
      if (!lastTime.current) lastTime.current = time;
      const deltaTime = (time - lastTime.current) / 1000;
      lastTime.current = time;

      if (rendererRef.current && sceneRef.current && cameraRef.current && controlsRef.current) {
        const speed = currentRotationSpeedRef.current;
        const rotationSpeedRadPerSec = (speed / 60) * (2 * Math.PI);
        
        // Appliquer la rotation à la sphère
        if (sphereMeshRef.current) {
            sphereMeshRef.current.rotation.z += rotationSpeedRadPerSec * deltaTime;
        }

        controlsRef.current.update();
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
    console.log("ThreeDCanvas: Animation loop started.");

    setTimeout(() => {
        if (rendererRef.current) {
            console.log("ThreeDCanvas: Renderer Info (after ~1 second):", rendererRef.current.info);
        }
    }, 1000);


    // Cleanup function
    return () => {
      console.log("ThreeDCanvas: useEffect CLEANUP phase started. mountRef.current:", mountRef.current, "canvasDOMElementRef.current:", canvasDOMElementRef.current, "rendererRef.current?.domElement:", rendererRef.current?.domElement);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      window.removeEventListener('resize', handleResize);

      if (controlsRef.current) {
        controlsRef.current.dispose();
        controlsRef.current = null;
        console.log("CLEANUP: OrbitControls disposed.");
      }

      // --- NETTOYAGE DU DOM CANVAS ---
      if (mountRef.current && canvasDOMElementRef.current) {
          console.log("CLEANUP: mountRef.current children BEFORE removal:", mountRef.current.children);
          console.log("CLEANUP: Canvas to attempt to remove:", canvasDOMElementRef.current);
          if (mountRef.current.contains(canvasDOMElementRef.current)) {
              mountRef.current.removeChild(canvasDOMElementRef.current);
              console.log("CLEANUP: Canvas successfully removed from mountRef.current.");
          } else {
              console.warn("CLEANUP: Canvas element was not found as a child of mountRef.current. Current children:", mountRef.current.children);
          }
      } else if (mountRef.current === null) {
          console.error("CLEANUP: CRITICAL - mountRef.current is null during cleanup. This means the component's parent DOM element was removed prematurely.");
      } else if (canvasDOMElementRef.current === null) {
          console.warn("CLEANUP: No canvas element could be identified for removal.");
      }
      // --- FIN MODIFICATION ---


      // Nettoyage des objets Three.js (scène, géométries, matériaux)
      if (sceneRef.current) {
          // Retirer la sphère et les cubes de la scène
          if (sphereMeshRef.current) sceneRef.current.remove(sphereMeshRef.current);
          cubeMeshesRef.current.forEach(cube => sceneRef.current?.remove(cube));

          // Disposer de toutes les géométries et matériaux stockés
          geometriesToDispose.current.forEach(geo => geo.dispose());
          materialsToDispose.current.forEach(mat => {
              // Vérification du type pour les matériaux, au cas où il y aurait des tableaux
              if (Array.isArray(mat)) {
                  mat.forEach(m => m.dispose());
              } else {
                  mat.dispose();
              }
          });
          
          // Nettoyer les listes de références
          sphereMeshRef.current = null;
          cubeMeshesRef.current = [];
          geometriesToDispose.current = [];
          materialsToDispose.current = [];
          
          // Nettoyage des lumières et de l'AxesHelper
          if (ambientLightRef.current) sceneRef.current.remove(ambientLightRef.current);
          if (directionalLightRef.current) sceneRef.current.remove(directionalLightRef.current);
          if (axesHelperRef.current) sceneRef.current.remove(axesHelperRef.current);
      }

      if (rendererRef.current) {
          rendererRef.current.dispose();
          rendererRef.current = null;
      }

      // Réinitialiser toutes les références
      cameraRef.current = null;
      ambientLightRef.current = null;
      directionalLightRef.current = null;
      axesHelperRef.current = null;
      canvasDOMElementRef.current = null;

      console.log("ThreeDCanvas: useEffect CLEANUP phase finished.");
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={mountRef}
      className="three-d-canvas"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ThreeDCanvas;
