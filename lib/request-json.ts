type JsonBodyResult =
  | { ok: true; data: unknown }
  | { ok: false; status: 400 | 413; message: string }

const encoder = new TextEncoder()

export const readJsonBody = async (req: Request, maxBytes = 20_000): Promise<JsonBodyResult> => {
  const contentLength = req.headers.get("content-length")
  const declaredLength = contentLength ? Number(contentLength) : 0

  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    return { ok: false, status: 413, message: "Pedido demasiado grande." }
  }

  let text: string
  try {
    text = await req.text()
  } catch {
    return { ok: false, status: 400, message: "Não foi possível ler o pedido." }
  }

  if (encoder.encode(text).byteLength > maxBytes) {
    return { ok: false, status: 413, message: "Pedido demasiado grande." }
  }

  try {
    return { ok: true, data: JSON.parse(text) }
  } catch {
    return { ok: false, status: 400, message: "JSON inválido." }
  }
}
