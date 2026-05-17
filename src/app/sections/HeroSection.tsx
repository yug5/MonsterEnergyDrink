"use client"
import React from "react"

const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 60px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >


      {/* Background huge text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(8rem, 22vw, 22rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,255,0,0.06)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          MONSTER
        </span>
      </div>

      {/* Bottom left main heading */}
      <div style={{ maxWidth: "640px" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#00ff00",
            marginBottom: "16px",
          }}
          className="animate-flicker"
        >
          ◈ The Original Energy Drink
        </p>

        <h1
          className="heading-xl animate-slide-up"
          style={{ marginBottom: "24px", lineHeight: "0.88" }}
        >
          Unleash
          <br />
          <span className="glow-text">The Beast</span>
          <br />
          Within
        </h1>

        <p
          style={{
            color: "#888888",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "420px",
            marginBottom: "40px",
          }}
          className="animate-slide-up"
        >
          160mg of caffeine. Zero compromise. Monster Energy is engineered for
          those who refuse to slow down.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <button className="cta-btn" id="hero-cta">
            <span>Explore Flavors</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
          <button className="cta-btn-outline" id="hero-watch">
            Watch Film
          </button>
        </div>
      </div>

      {/* Right-side stats */}
      <div
        style={{
          position: "absolute",
          right: "60px",
          bottom: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          alignItems: "flex-end",
        }}
      >
        {[
          { value: "160", unit: "MG", label: "Caffeine" },
          { value: "0", unit: "G", label: "Sugar" },
          { value: "10", unit: "CAL", label: "Per Serving" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2.8rem",
                lineHeight: 1,
                color: "#00ff00",
              }}
            >
              {stat.value}
              <span style={{ fontSize: "1.2rem", marginLeft: "4px", color: "#555" }}>
                {stat.unit}
              </span>
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#555",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#444",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #00ff00, transparent)",
            animation: "pulse-green 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  )
}

export default HeroSection
