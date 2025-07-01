import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function isRequestAllowed(userId: string, limit: number = 2) {
  const today = new Date().toISOString().slice(0, 10);
  const key = `unoriaverse:limit:${userId}:${today}`;

  const currentCount = await redis.get<number>(key);

  if (currentCount !== null && currentCount >= limit) {
    return false;
  }

  const newCount = await redis.incr(key);

  if (newCount === 1) {
    await redis.expire(key, 60 * 60 * 24); // Set 1-day expiry only on first request
  }

  return true;
}
