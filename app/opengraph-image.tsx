import { ImageResponse } from "next/og";
import { FEATURED } from "@/lib/data/providers";
import { SITE } from "@/lib/data/site";

export const alt = `${SITE.name} — Independent 2026 GLP-1 Provider Rankings`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfbfd",
          backgroundImage:
            "radial-gradient(900px 520px at 12% -10%, rgba(120,124,130,0.18), transparent 60%), radial-gradient(700px 600px at 100% 10%, rgba(120,124,130,0.12), transparent 55%)",
          padding: "64px 72px",
          color: "#1d1d1f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 26,
              height: 26,
              border: "3px solid #1d1d1f",
              borderRadius: 6,
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            GLP Review
          </div>
          <div
            style={{
              marginLeft: 12,
              fontSize: 18,
              color: "#6e6e73",
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Independent · Non-payable
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            The definitive 2026 ranking of GLP-1 telehealth care.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 26,
              color: "#6e6e73",
            }}
          >
            <span style={{ color: "#6e6e73" }}>#1 Editor&apos;s pick</span>
            <span style={{ fontWeight: 700, color: "#1d1d1f" }}>{FEATURED.name}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              color: "#1d1d1f",
            }}
          >
            <span style={{ fontSize: 84, fontWeight: 700 }}>{FEATURED.score}</span>
            <span style={{ fontSize: 30, color: "#6e6e73" }}>/100</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
