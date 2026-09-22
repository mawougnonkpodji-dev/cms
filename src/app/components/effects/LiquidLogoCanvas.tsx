import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { liquidLogoColors } from "@/app/config/shader-gradient";

function CrossMesh() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.z = Math.sin(t * 0.8) * 0.08;
    group.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.04);
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.22, 1.05, 0.12]} />
        <meshStandardMaterial
          color={liquidLogoColors.vertical}
          metalness={liquidLogoColors.metalness}
          roughness={liquidLogoColors.roughness}
        />
      </mesh>
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[0.72, 0.22, 0.12]} />
        <meshStandardMaterial
          color={liquidLogoColors.horizontal}
          metalness={liquidLogoColors.metalness * 0.75}
          roughness={liquidLogoColors.roughness + 0.05}
        />
      </mesh>
    </group>
  );
}

function LogoScene() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[2, 3, 4]} intensity={1.1} />
      <CrossMesh />
    </>
  );
}

type LiquidLogoCanvasProps = {
  className?: string;
};

/** Scène Three.js isolée — chargée uniquement via LazyLiquidLogo. */
export function LiquidLogoCanvas({ className = "w-9 h-9" }: LiquidLogoCanvasProps) {
  return (
    <div className={`${className} shrink-0`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 2.2], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ width: "100%", height: "100%" }}
      >
        <LogoScene />
      </Canvas>
    </div>
  );
}
