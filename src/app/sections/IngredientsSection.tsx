"use client"
import React from "react"

const ingredients = [
  { name: "Caffeine",        amount: "160mg",  pct: 89, color: "#00ff00" },
  { name: "Taurine",         amount: "1000mg", pct: 75, color: "#33ff66" },
  { name: "B3 (Niacin)",     amount: "20mg",   pct: 60, color: "#00cc44" },
  { name: "B12 (Cobalamin)", amount: "6µg",    pct: 45, color: "#009933" },
  { name: "B6 (Pyridoxine)", amount: "2mg",    pct: 50, color: "#00ff88" },
  { name: "Ginseng Extract", amount: "200mg",  pct: 65, color: "#66ff99" },
]

const IngredientsSection = () => {
  return (
    <section
      id="ingredients"
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

      {/* Right-aligned (can is centred/close-up at this point) */}
      <div style={{ marginLeft: "auto", maxWidth: "520px", width: "100%" }}>
        <p
          className="pill reveal-right"
          style={{ marginBottom: "24px", display: "inline-flex" }}
        >
          Ingredients & Science
        </p>

        <h2 className="heading-lg reveal-right" style={{ marginBottom: "16px" }}>
          The Formula
          <br />
          <span className="text-green">Decoded</span>
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
          className="reveal-right"
        >
          Every milligram counts. Here's exactly what's inside each can.
        </p>

        {/* Ingredient bars */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          className="reveal-right"
        >
          {ingredients.map((ing) => (
            <div key={ing.name}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#ccc",
                  }}
                >
                  {ing.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: ing.color,
                  }}
                >
                  {ing.amount}
                </span>
              </div>
              <div className="ingredient-bar">
                <div
                  className="ingredient-bar-fill"
                  data-width={`${ing.pct}%`}
                  style={{
                    width: "0%",
                    background: `linear-gradient(90deg, ${ing.color}, #33ff66)`,
                    boxShadow: `0 0 8px ${ing.color}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            marginTop: "36px",
            color: "#333",
            fontSize: "0.72rem",
            lineHeight: 1.6,
            letterSpacing: "0.04em",
          }}
        >
          * Percent daily values based on a 2,000 calorie diet. Your daily
          values may be higher or lower depending on calorie needs.
        </p>
      </div>

      {/* Decorative vertical label */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#222",
        }}
      >
        Ingredients — 03 / 05
      </div>
    </section>
  )
}

export default IngredientsSection
