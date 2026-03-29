export const paragrafosDeTexto = (text: string) =>
  text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
