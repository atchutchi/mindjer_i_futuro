type Bucket = {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

export const rateLimit = (key: string, limit: number, windowMs: number) => {
  const now = Date.now()
  const current = buckets.get(key)

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: limit - 1 }
  }

  if (current.count >= limit) {
    return { ok: false, remaining: 0 }
  }

  current.count += 1
  return { ok: true, remaining: limit - current.count }
}

export const requestIp = (req: Request) => {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  return forwarded || req.headers.get("x-real-ip") || "unknown"
}
