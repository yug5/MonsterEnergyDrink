"use client"
import React from "react"

const FinaleSection = () => {
  return (
    <section
      id="finale"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 60px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      <p
        className="pill reveal-up"
        style={{ marginBottom: "32px", display: "inline-flex" }}
      >
        The Display Box
      </p>

      <h2
        className="heading-xl reveal-up"
        style={{ marginBottom: "24px", maxWidth: "800px" }}
      >
        Sealed in
        <br />
        <span className="glow-text">Legend</span>
      </h2>

      <p
        style={{
          color: "#555",
          fontSize: "1rem",
          lineHeight: 1.8,
          maxWidth: "440px",
          marginBottom: "64px",
        }}
        className="reveal-up"
      >
        The Monster can, encased in its iconic display box. A collector's
        trophy. A performance icon. Yours to own.
      </p>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          gap: "80px",
          justifyContent: "center",
          marginBottom: "64px",
        }}
        className="reveal-up"
      >
        {[
          { value: "20+", label: "Years Dominating" },
          { value: "100+", label: "Flavors Worldwide" },
          { value: "8B+", label: "Cans Sold Annually" },
        ].map((s) => (
          <div key={s.label}>
            <div className="stat-number">{s.value}</div>
            <div
              style={{
                marginTop: "8px",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#444",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{ display: "flex", gap: "16px", justifyContent: "center" }}
        className="reveal-up"
      >
        <button className="cta-btn" id="finale-shop-btn">
          Shop All Flavors
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </button>
        <button className="cta-btn-outline" id="finale-story-btn">
          Our Story
        </button>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          padding: "0 60px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#222",
          }}
        >
          Monster Energy © 2024
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#222",
          }}
        >
          Unleash The Beast
        </span>
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
        Finale — 05 / 05
      </div>
    </section>
  )
}

export default FinaleSection
