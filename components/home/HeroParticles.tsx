"use client"

import { Component, type ReactNode, useMemo, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

const COUNT = 20

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c9a55a"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  )
}

const useClientWebGLSupported = () => {
  const [supported, setSupported] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl =
        canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: false }) ??
        canvas.getContext("webgl", { failIfMajorPerformanceCaveat: false })
      setSupported(!!gl)
    } catch {
      setSupported(false)
    }
  }, [])

  return supported
}

type BoundaryState = { hasError: boolean }

class ParticlesErrorBoundary extends Component<{ children: ReactNode }, BoundaryState> {
  state: BoundaryState = { hasError: false }

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[HeroParticles] WebGL:", error.message)
    }
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

const HeroParticles = () => {
  const webgl = useClientWebGLSupported()

  if (webgl === false) return null
  if (webgl === null) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] opacity-80">
      <ParticlesErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ alpha: true, antialias: false, powerPreference: "default" }}
          dpr={[1, 2]}
        >
          <ParticleField />
        </Canvas>
      </ParticlesErrorBoundary>
    </div>
  )
}

export default HeroParticles
