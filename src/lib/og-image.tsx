import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";
import { loadFraunces, loadInter } from "@/lib/og-font";

export const ogImageAlt = `${profile.name} — ${profile.role}`;
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const EYEBROW = "Portafolio verificado";

export async function renderProfileOgImage() {
  const bodyText = `${EYEBROW}${profile.role}${profile.tagline}`;
  const [fraunces, inter] = await Promise.all([
    loadFraunces(profile.name, 700),
    loadInter(bodyText, 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0f0c",
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, rgba(47,158,99,0.22), transparent 55%)",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#2f9e63",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#0a0f0c"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8a9a8f",
            }}
          >
            {EYEBROW}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span
            style={{
              fontSize: 64,
              fontFamily: "Fraunces",
              fontWeight: 700,
              color: "#eff3ef",
            }}
          >
            {profile.name}
          </span>
          <span style={{ fontSize: 28, color: "#2f9e63" }}>{profile.role}</span>
          <span
            style={{
              display: "flex",
              fontSize: 24,
              lineHeight: 1.5,
              color: "#b9c4bb",
              width: 760,
            }}
          >
            {profile.tagline}
          </span>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 700 },
        { name: "Inter", data: inter, style: "normal", weight: 400 },
      ],
    }
  );
}
