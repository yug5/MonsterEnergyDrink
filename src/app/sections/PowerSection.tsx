"use client"
import React from "react"

const PowerSection = () => {
  return (
    <section
      id="power"
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

      {/* Left: text content (can sits on right side at this scroll point) */}
      <div style={{ maxWidth: "480px" }}>
        <p
          className="pill reveal-up"
          style={{ marginBottom: "24px", display: "inline-flex" }}
        >
          Power Section
        </p>

        <h2
          className="heading-lg reveal-up"
          style={{ marginBottom: "32px" }}
        >
          Built for
          <br />
          <span className="text-green">Maximum</span>
          <br />
          Output
        </h2>

        <p
          style={{
            color: "#888",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "48px",
          }}
          className="reveal-up"
        >
          Our proprietary energy blend goes beyond caffeine. A full suite of
          B-vitamins, taurine, ginseng, and L-carnitine work in synergy to
          sharpen focus, delay fatigue, and elevate performance to another level.
        </p>

        {/* Feature list */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          className="reveal-up"
        >
          {[
            { icon: "⚡", title: "160mg Caffeine", desc: "Precision dosing for sustained energy without the crash" },
            { icon: "🧠", title: "B-Vitamin Complex", desc: "B3, B6, B12 for cognitive clarity and alertness" },
            { icon: "💪", title: "Amino Acid Blend", desc: "Taurine & L-carnitine for muscle performance" },
            { icon: "🌿", title: "Panax Ginseng", desc: "Adaptogenic root for stress resilience" },
          ].map((item) => (
            <div
              key={item.title}
              className="neon-card"
              style={{ padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </div>
                <div style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative vertical label */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#222",
        }}
      >
        Power — 02 / 05
      </div>
    </section>
  )
}

export default PowerSection
