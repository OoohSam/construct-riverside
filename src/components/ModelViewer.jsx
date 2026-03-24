import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({modelPath}) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <div style={{ 
      width: "100%", 
      height: "600px" ,
      justifyContent: "center", 
      display: "flex", 
      alignItems: "center",
      marginTop: "40px"
      }}>


    <Canvas style={{ height: "600px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <Model modelPath={modelPath} />

      <OrbitControls />
    </Canvas>
    </div>
  );
}