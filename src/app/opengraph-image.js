import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0000 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              width: 110,
              height: 110,
              borderRadius: 24,
              background: "#0a0a0a",
              border: "3px solid #ef4444",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontWeight: 700,
              color: "#ef4444",
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 68, fontWeight: 700, color: "white" }}>
              Avindu Oshan
            </div>
            <div style={{ fontSize: 30, color: "#f87171" }}>
              Software Engineering Undergraduate
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
          {["Laravel", "React.js", ".NET", "Java"].map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid #333",
                color: "#aaaaaa",
                fontSize: 24,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
