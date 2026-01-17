import React, { useState, useCallback } from 'react';

// Based on public/graph-schema.json
interface Node {
  id: string;
  label: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
}

interface Edge {
  id:string;
  source: string;
  target: string;
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

interface GraphData {
  schemaVersion: string;
  graph: Graph;
}

interface ImporterProps {
  onGraphLoad: (graph: Graph) => void;
}

const Importer: React.FC<ImporterProps> = ({ onGraphLoad }) => {
  const [graphData, setGraphData] = useState<Graph | null>(null);
  const [error, setError] = useState<string | null>(null);

  const importGraph = useCallback(async () => {
    try {
      const response = await fetch('/hardcoded-graph.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: GraphData = await response.json();

      if (data.schemaVersion && data.graph && Array.isArray(data.graph.nodes) && Array.isArray(data.graph.edges)) {
        setGraphData(data.graph);
        onGraphLoad(data.graph);
        setError(null);
      } else {
        throw new Error('Invalid graph data format');
      }
    } catch (e: any) {
      setError(e.message);
      console.error("Failed to import graph:", e);
    }
  }, [onGraphLoad]);

  return (
    <div>
      <button onClick={importGraph}>Import Graph</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {graphData && (
        <div>
          <p>Graph loaded!</p>
          <p>Nodes: {graphData.nodes.length}</p>
          <p>Edges: {graphData.edges.length}</p>
        </div>
      )}
    </div>
  );
};

export default Importer;