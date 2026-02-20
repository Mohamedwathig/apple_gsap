import useMacbookstore from "../store";
import clsx from "clsx"
import { Canvas } from "@react-three/fiber";
import Macbook14 from "../components/models/Macbook14"
// import { Box, OrbitControls } from "@react-three/drei";
import StudioLIghts from "./models/three/StudioLIghts";
import Modelswitcher from "./models/three/Modelswitcher"
import {useMediaQuery} from "react-responsive"
import Macbook16 from "../components/models/Macbook16"

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookstore();
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  
  // Add safety check for scale calculation
  const adjustedScale = isMobile ? Math.max(scale - 0.03, 0.01) : scale;

  return (
    <section id="product-viewer">
      <h3>Take a closer look.</h3>

      <div className="controls">
        <p className="info">MacBook Pro {scale === 0.06 ? '14' : '16'} in {color}</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div 
              key="color-silver"
              onClick={() => setColor("#adb5bd")} 
              className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')} 
            />
            <div 
              key="color-dark"
              onClick={() => setColor("#2e2c2e")} 
              className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')} 
            />
          </div>

          <div className="size-control">
            <div 
              key="size-14"
              onClick={() => setScale(0.06)}
              className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}  
            >
              <p>14"</p>
            </div>
            <div 
              key="size-16"
              onClick={() => setScale(0.08)}
              className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}  
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-screen h-screen overflow-visible">
        <Canvas 
          camera={{ position: [0, 1.5, 4.5], fov: 50, near: 0.1, far: 100 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Modelswitcher scale={adjustedScale} isMobile={isMobile} /> 

          <StudioLIghts />    
           {/* <Macbook16 scale={scale * 1.2} position={[0, 0, 0]} /> */}
          {/* <Macbook14 scale={scale * 1.5} position={[0, 0, 0]} /> */} 
        </Canvas>
      </div>
    </section>
  );
};

export default ProductViewer;