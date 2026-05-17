"use client"
import React, { useRef, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import Scene from "./Monsters/Scene"
import HeroSection from "./sections/HeroSection"
import PowerSection from "./sections/PowerSection"
import IngredientsSection from "./sections/IngredientsSection"
import FlavorSection from "./sections/FlavorSection"
import FinaleSection from "./sections/FinaleSection"
import Navbar from "./components/Navbar"
import MarqueeBar from "./components/MarqueeBar"

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
    const scrollProgress = useRef(0)
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        // ── Lenis smooth scroll ──────────────────────────────────────
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
        })
        lenisRef.current = lenis

        // Wire Lenis into GSAP ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0)

        // ── ScrollTrigger: capture scroll progress ───────────────────
        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                scrollProgress.current = self.progress
            },
        })

        // ── Section reveal animations ────────────────────────────────
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        })

        gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, x: -60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        })

        gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, x: 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        })

        // ── Ingredient bars ──────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>(".ingredient-bar-fill").forEach((bar) => {
            const width = bar.getAttribute("data-width") || "0%"
            gsap.fromTo(
                bar,
                { width: "0%" },
                {
                    width,
                    duration: 1.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 90%",
                    },
                }
            )
        })

        return () => {
            lenis.destroy()
            ScrollTrigger.killAll()
            gsap.ticker.remove(() => { })
        }
    }, [])

    return (
        <div style={{ background: "#030303" }}>
            {/* ── Fixed 3D Canvas ─────────────────────────────────────── */}
            <div id="canvas-container">
                <Canvas
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 1.5]}
                    style={{ background: "transparent" }}
                >
                    <Scene scrollProgress={scrollProgress} />
                </Canvas>
            </div>

            {/* ── Scrollable content ──────────────────────────────────── */}
            <div id="scroll-content">
                <Navbar />
                <HeroSection />
                <MarqueeBar />
                <PowerSection />
                <IngredientsSection />
                <FlavorSection />
                <FinaleSection />
            </div>
        </div>
    )
}

export default HomePage