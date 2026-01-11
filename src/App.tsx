    // src/App.tsx
    import { useState } from 'react';
    import LeftMenu from './components/LeftMenu';
    import ThreeDCanvas from './components/ThreeDCanvas';
    import './index.css'; // Importez votre CSS global ici

    function App() {
      const [cubeRotationSpeed, setCubeRotationSpeed] = useState<number>(0);

      const handleSpeedChange = (speed: number) => {
        setCubeRotationSpeed(speed);
      };

      return (
        <div className="app-container">
          <LeftMenu onSpeedChange={handleSpeedChange} currentSpeed={cubeRotationSpeed} />
          <div className="right-canvas-container">
            <ThreeDCanvas rotationSpeed={cubeRotationSpeed} />
          </div>
        </div>
      );
    }

    export default App;
