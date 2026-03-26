const RATE_LIMIT = 30;
const TTL_SECONDS = 7200;

export async function checkRateLimit(
  ip: string,
  kv: any,
): Promise<{ allowed: boolean; remaining: number }> {
  if (!kv) {
    return { allowed: true, remaining: RATE_LIMIT };
  }

  const now = new Date();
  const hour = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
    String(now.getUTCHours()).padStart(2, "0"),
  ].join("-");

  const key = `rate:${ip}:${hour}`;

  const current = parseInt((await kv.get(key)) || "0", 10);

  if (current >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  const next = current + 1;
  await kv.put(key, String(next), { expirationTtl: TTL_SECONDS });

  return { allowed: true, remaining: RATE_LIMIT - next };
}
