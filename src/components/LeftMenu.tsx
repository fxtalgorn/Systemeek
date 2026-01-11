    // src/components/LeftMenu.tsx
    import React from 'react';

    interface LeftMenuProps {
      onSpeedChange: (speed: number) => void;
      currentSpeed: number;
    }

    const LeftMenu: React.FC<LeftMenuProps> = ({ onSpeedChange, currentSpeed }) => {
      return (
        <div className="left-menu">
          <h2>Contrôles 3D</h2>
          <label htmlFor="rotationSpeed">Vitesse de rotation (tr/min):</label>
          <input
            type="range"
            id="rotationSpeed"
            min="0"
            max="100"
            value={currentSpeed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
          />
          <p>Vitesse actuelle: {currentSpeed} tr/min</p>
        </div>
      );
    };

    export default LeftMenu;