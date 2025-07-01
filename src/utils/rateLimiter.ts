import { Redis } from "@upstash/redis";
import { DateTime } from "luxon";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function isRequestAllowed(
  userId: string,
  limit: number = 2,
  timezone: string = "UTC"
) {
  const now = DateTime.now().setZone(timezone);
  const today = now.toISODate();
  const key = `unoriaverse:limit:${userId}:${today}`;

  const currentCount = await redis.get<number>(key);

  if (currentCount !== null && currentCount >= limit) {
    return false;
  }

  const newCount = await redis.incr(key);

  if (newCount === 1) {
    const midnight = now.plus({ days: 1 }).startOf("day");
    const secondsUntilMidnight = Math.floor(
      midnight.diff(now, "seconds").seconds
    );

    await redis.expire(key, secondsUntilMidnight);
  }

  return true;
}
