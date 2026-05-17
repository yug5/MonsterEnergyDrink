"use client"
import React, { useState } from "react"

const flavors = [
  {
    id: "original",
    name: "Original",
    subtitle: "The Classic",
    caffeine: "160mg",
    calories: "101 cal",
    color: "#00ff00",
    accent: "#003300",
    description: "The original Monster Energy that started it all. Iconic green, full power.",
  },
  {
    id: "ultra",
    name: "Ultra Zero",
    subtitle: "White & Fierce",
    caffeine: "150mg",
    calories: "10 cal",
    color: "#e0e0e0",
    accent: "#1a1a1a",
    description: "Zero sugar, zero calories. The cleanest hit of energy on the market.",
  },
  {
    id: "mango",
    name: "Mango Loco",
    subtitle: "Tropical Fury",
    caffeine: "160mg",
    calories: "210 cal",
    color: "#ff9500",
    accent: "#2a1500",
    description: "Juicy mango meets Monster madness. The tropics, electrified.",
  },
  {
    id: "pipeline",
    name: "Pipeline Punch",
    subtitle: "Pacific Power",
    caffeine: "160mg",
    calories: "190 cal",
    color: "#ff4455",
    accent: "#1a0005",
    description: "Passion fruit. Orange. Guava. Three waves of Pacific fruit punch.",
  },
  {
    id: "ultraviolet",
    name: "Ultra Violet",
    subtitle: "Purple Rain",
    caffeine: "150mg",
    calories: "10 cal",
    color: "#aa44ff",
    accent: "#0a001a",
    description: "Light citrus with a grape finish. All the power, none of the sugar.",
  },
]

const FlavorSection = () => {
  const [active, setActive] = useState("original")
  const current = flavors.find((f) => f.id === active)!

  return (
    <section
      id="flavors"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 60px",
        position: "relative",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      {/* Content pushed right — can animates to the left at this scroll point */}
      <div style={{ display: "flex", flexDirection: "column", gap: "60px", marginLeft: "auto", maxWidth: "660px", width: "100%" }}>
        {/* Header */}
        <div>
          <p
            className="pill reveal-left"
            style={{ marginBottom: "24px", display: "inline-flex" }}
          >
            Flavor Selection
          </p>
          <h2 className="heading-lg reveal-left">
            Choose Your
            <br />
            <span style={{ color: current.color, transition: "color 0.4s ease" }}>
              Weapon
            </span>
          </h2>
        </div>

        {/* Flavor buttons */}
        <div
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          className="reveal-left"
        >
          {flavors.map((f) => (
            <button
              key={f.id}
              className={`flavor-btn ${active === f.id ? "active" : ""}`}
              onClick={() => setActive(f.id)}
              style={
                active === f.id
                  ? { background: f.color, borderColor: f.color, color: "#000" }
                  : {}
              }
              id={`flavor-btn-${f.id}`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Active flavor details */}
        <div
          className="neon-card reveal-left"
          style={{
            padding: "40px",
            borderColor: current.color,
            background: `linear-gradient(135deg, ${current.accent} 0%, #0a0a0a 60%)`,
            maxWidth: "600px",
            transition: "all 0.4s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "24px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: current.color,
                  marginBottom: "6px",
                }}
              >
                {current.subtitle}
              </p>
              <h3
                className="heading-md"
                style={{ color: "#fff" }}
              >
                {current.name}
              </h3>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: current.color,
                boxShadow: `0 0 20px ${current.color}55`,
              }}
            />
          </div>

          <p style={{ color: "#888", lineHeight: 1.7, marginBottom: "32px", fontSize: "0.95rem" }}>
            {current.description}
          </p>

          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { label: "Caffeine", value: current.caffeine },
              { label: "Calories", value: current.calories },
              { label: "Size", value: "16 fl oz" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.6rem",
                    color: current.color,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#555",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "36px" }}>
            <button
              className="cta-btn"
              id={`add-to-cart-${active}`}
              style={{ background: current.color, boxShadow: `0 0 24px ${current.color}55` }}
            >
              Add to Cart — $3.99
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical label */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#222",
        }}
      >
        Flavors — 04 / 05
      </div>
    </section>
  )
}

export default FlavorSection
