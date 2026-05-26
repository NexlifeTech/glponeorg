import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbfbfd",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "8px solid #1d1d1f",
            borderRadius: 16,
            transform: "rotate(45deg)",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 999,
              background: "#1d1d1f",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
