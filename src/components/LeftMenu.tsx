import React from 'react';
import Importer from './Importer';
import type { Graph } from './Importer';

interface LeftMenuProps {
  onGraphLoad: (graph: Graph) => void; // Add onGraphLoad prop
}

const LeftMenu: React.FC<LeftMenuProps> = ({ onGraphLoad }) => {
  return (
    <div className="left-menu">
      <h2>Contrôles 3D</h2>
      <Importer onGraphLoad={onGraphLoad} />
    </div>
  );
};

export default LeftMenu;
