"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "./halo-vanta";

export default function VantaHalo() {
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth >= 1240) setIsClient(true);
  }, []);

  if (!isClient) return null;
  return <VantaHaloComponent />;
}

function VantaHaloComponent() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          color: 0x3478f6,
          backgroundColor: "#0a0d14",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          xOffset: 0.22,
          amplitudeFactor: 0.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: -1,
      }}
    />
  );
}
