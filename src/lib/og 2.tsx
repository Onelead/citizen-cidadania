import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function ogImage(title: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#faf8f5",
          color: "#161413",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontFamily: "sans-serif" }}>
          Citizen Cidadania
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            lineHeight: 1.04,
            letterSpacing: "-0.01em",
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", height: 10, width: 160, background: "#892725" }} />
      </div>
    ),
    ogSize,
  );
}
