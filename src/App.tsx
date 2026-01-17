import { useState } from 'react';
import type { Graph } from './components/Importer';
import LeftMenu from './components/LeftMenu';
import ThreeDCanvas from './components/ThreeDCanvas';
import './index.css';

function App() {
  const [graph, setGraph] = useState<Graph | null>(null);

  const handleGraphLoad = (loadedGraph: Graph) => {
    setGraph(loadedGraph);
  };

  return (
    <div className="app-container">
      <LeftMenu onGraphLoad={handleGraphLoad} />
      <div className="right-canvas-container">
        <ThreeDCanvas graph={graph} />
      </div>
    </div>
  );
}

export default App;
