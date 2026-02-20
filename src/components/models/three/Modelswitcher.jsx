import { PresentationControls } from '@react-three/drei';
import { useRef, useLayoutEffect } from 'react';
import Macbook16 from '../Macbook16';
import Macbook14 from '../Macbook14';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Modelswitcher = ({ scale, isMobile }) => {
  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();
  
  const OFFSET_DISTANCE = 5;
  const ANIMATION_DURATION = 0.8;
  
  // Logic to determine which model is active
  const showLargeMacbook = scale > (isMobile ? 0.04 : 0.07);

  const fadeAndMove = (group, opacity, xPosition) => {
    if (!group) return;

    // Animate Position
    gsap.to(group.position, { 
      x: xPosition, 
      duration: ANIMATION_DURATION,
      ease: "power2.inOut" 
    });

    // Animate Opacity for all meshes within the group
    group.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        gsap.to(child.material, { 
          opacity, 
          duration: ANIMATION_DURATION,
          ease: "power2.inOut"
        });
      }
    });
  };

  useGSAP(() => {
    if (showLargeMacbook) {
      // Show Large, Hide Small
      fadeAndMove(largeMacbookRef.current, 1, 0);
      fadeAndMove(smallMacbookRef.current, 0, -OFFSET_DISTANCE);
    } else {
      // Show Small, Hide Large
      fadeAndMove(largeMacbookRef.current, 0, OFFSET_DISTANCE);
      fadeAndMove(smallMacbookRef.current, 1, 0);
    }
  }, [showLargeMacbook]); // Only trigger when the toggle actually changes

  return (
    // Wrap BOTH in one control set so they rotate together
    <PresentationControls
      global
      snap
      speed={1}
      zoom={1}
      polar={[-Math.PI / 4, Math.PI / 4]} // Restricted for better UX
      azimuth={[-Math.PI / 2, Math.PI / 2]}
      config={{ mass: 1, tension: 170, friction: 26 }}
    >
      <group>
        <group ref={largeMacbookRef} position={[OFFSET_DISTANCE, 0, 0]}>
          <Macbook16 scale={isMobile ? 0.05 : 0.08} />
        </group>

        <group ref={smallMacbookRef} position={[0, 0, 0]}>
          <Macbook14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </group>
    </PresentationControls>
  );
};

export default Modelswitcher;