import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

async function loadCursiveFont(text: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Pacifico&text=${encodeURIComponent(text)}`
    )
  ).text();
  const match = css.match(/src: url\(([^)]+)\) format\('truetype'\)/);
  if (!match) throw new Error("failed to resolve font url");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function AppleIcon() {
  const fontData = await loadCursiveFont("CV");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a3a2f",
        }}
      >
        <span
          style={{
            display: "flex",
            fontFamily: "Pacifico",
            fontSize: 96,
            color: "#f5f0e8",
          }}
        >
          CV
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Pacifico", data: fontData, style: "normal" }],
    }
  );
}
