
import React, { useState } from "react";
import "./MashujaaBadge.css";

// Set true to preview at any time.
const FORCE_SHOW = false;

function isMashujaaSeason() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const month = Number(
    parts.find((p) => p.type === "month")?.value
  );
  const day = Number(
    parts.find((p) => p.type === "day")?.value
  );

  return month === 10 && day >= 18 && day <= 21;
}

function WavingKenyanFlag() {
  return (
    <svg
      className="mashujaa-flag-svg"
      viewBox="0 0 126 105"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Kenyan flag"
    >
      <defs>
        <clipPath id="mashujaaFlagShape">
          <path d="
            M 5 12
            C 27 0, 48 9, 69 14
            S 104 16, 120 13
            L 116 96
            C 91 89, 72 96, 51 91
            S 22 89, 5 94
            Z
          " />
        </clipPath>

        <linearGradient
          id="mashujaaFabric"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#000" stopOpacity=".22" />
          <stop offset="22%" stopColor="#fff" stopOpacity=".12" />
          <stop offset="48%" stopColor="#000" stopOpacity=".18" />
          <stop offset="75%" stopColor="#fff" stopOpacity=".1" />
          <stop offset="100%" stopColor="#000" stopOpacity=".22" />
        </linearGradient>
      </defs>

      <g clipPath="url(#mashujaaFlagShape)">
        {/* Black upper band */}
        <rect width="126" height="37" fill="#121212" />

        {/* White separators and red band */}
        <rect y="37" width="126" height="5" fill="#fff" />
        <rect y="42" width="126" height="23" fill="#BB1E2D" />
        <rect y="65" width="126" height="5" fill="#fff" />

        {/* Green lower band */}
        <rect y="70" width="126" height="35" fill="#066B3B" />

        {/* Flag fabric shading */}
        <rect
          width="126"
          height="105"
          fill="url(#mashujaaFabric)"
        />

        {/* Crossed spears */}
        <g
          stroke="#f5f0e6"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M 55 19 L 81 83" />
          <path d="M 81 19 L 55 83" />
        </g>

        <path
          d="M55 19 L52 25 L58 23 Z"
          fill="#f5f0e6"
        />
        <path
          d="M81 19 L78 23 L84 25 Z"
          fill="#f5f0e6"
        />

        {/* Shield */}
        <path
          d="
            M 68 20
            C 56 31, 54 69, 68 84
            C 82 69, 80 31, 68 20
            Z
          "
          fill="#fff"
          stroke="#191919"
          strokeWidth="1.5"
        />

        <path
          d="
            M 68 24
            C 60 35, 59 67, 68 80
            C 77 67, 76 35, 68 24
            Z
          "
          fill="#b91f2d"
        />

        <path
          d="M68 24 V80"
          stroke="#181818"
          strokeWidth="4"
        />

        <path
          d="M60 38 L76 38 M60 65 L76 65"
          stroke="#181818"
          strokeWidth="2.5"
        />

        <ellipse
          cx="68"
          cy="52"
          rx="3"
          ry="9"
          fill="#fff"
        />
      </g>

      {/* Gold trim following the flag's curved edge */}
      <path
        d="
          M 5 94
          C 23 87, 36 87, 51 91
          S 91 89, 116 96
        "
        fill="none"
        stroke="#d4a951"
        strokeWidth="2"
        opacity=".95"
      />

      <path
        d="
          M 5 12
          C 27 0, 48 9, 69 14
          S 104 16, 120 13
        "
        fill="none"
        stroke="#d4a951"
        strokeWidth="1.4"
        opacity=".9"
      />
    </svg>
  );
}

function GoldenLaurel() {
  return (
    <svg
      viewBox="0 0 48 62"
      className="mashujaa-laurel"
      aria-hidden="true"
    >
      <path
        d="M7 56 C28 49 39 32 38 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      {[
        [12, 51, -32],
        [19, 46, -35],
        [26, 39, -32],
        [31, 32, -25],
        [35, 24, -16],
        [37, 16, -8],
      ].map(([x, y, angle], i) => (
        <ellipse
          key={`right-${i}`}
          cx={x}
          cy={y}
          rx="3.5"
          ry="9"
          fill="currentColor"
          transform={`rotate(${angle} ${x} ${y})`}
        />
      ))}

      {[
        [8, 45, 55],
        [15, 38, 48],
        [23, 31, 45],
        [29, 23, 36],
        [33, 15, 28],
      ].map(([x, y, angle], i) => (
        <ellipse
          key={`left-${i}`}
          cx={x}
          cy={y}
          rx="3"
          ry="8"
          fill="currentColor"
          transform={`rotate(${angle} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function MashujaaBadge() {
  const [dismissed, setDismissed] = useState(false);

  if ((!FORCE_SHOW && !isMashujaaSeason()) || dismissed) {
    return null;
  }

  return (
    <aside
      className="mashujaa-wrap"
      aria-label="Mashujaa Day greeting"
    >
      <div className="mashujaa-badge">
        <div className="mashujaa-shimmer" aria-hidden="true" />

        <div className="mashujaa-flag-container">
          <WavingKenyanFlag />
        </div>

        <div className="mashujaa-text">
          <div className="mashujaa-title">
            Happy Mashujaa Day
          </div>
          <div className="mashujaa-subtitle">
            Celebrating Kenya's Heroes
          </div>
        </div>

        <div className="mashujaa-laurel-container">
          <GoldenLaurel />
        </div>

        <button
          type="button"
          className="mashujaa-dismiss"
          aria-label="Dismiss greeting"
          onClick={() => setDismissed(true)}
        >
          ×
        </button>
      </div>
    </aside>
  );
}
