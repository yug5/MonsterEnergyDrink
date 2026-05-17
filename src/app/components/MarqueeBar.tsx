"use client"
import React from "react"

const words = [
  "Unleash The Beast",
  "Zero Compromise",
  "Raw Energy",
  "Full Throttle",
  "Dominate",
  "Monster Energy",
  "Feel The Rush",
  "No Limits",
]

const MarqueeBar = () => {
  const repeated = [...words, ...words]

  return (
    <div
      style={{
        background: "#00ff00",
        overflow: "hidden",
        padding: "12px 0",
        borderTop: "1px solid #33ff33",
        borderBottom: "1px solid #33ff33",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {repeated.map((w, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#000000",
              marginRight: "60px",
            }}
          >
            ✦ {w}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeBar
