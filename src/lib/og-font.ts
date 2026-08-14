async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);

  if (match) {
    const res = await fetch(match[1]);
    if (res.status === 200) return res.arrayBuffer();
  }

  throw new Error(`Failed to load font: ${family}`);
}

export async function loadFraunces(text: string, weight = 700) {
  return loadGoogleFont("Fraunces", weight, text);
}

export async function loadInter(text: string, weight = 400) {
  return loadGoogleFont("Inter", weight, text);
}
