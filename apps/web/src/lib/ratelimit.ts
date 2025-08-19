import redis from "./providers/redis";

export async function rateLimit({
  key,
  limit,
  window,
}: {
  key: string;
  limit: number;
  window: number; // in seconds
}) {
  const redisKey = `rate_limit:${key}`;

  const results = await redis
    .multi()
    .incr(redisKey) // increment request count
    .expire(redisKey, window) // set expiry (will be ignored if already set)
    .exec();

  // results = [ [null, count], [null, 1 or 0] ]
  const count = results?.[0]?.[1] as number;

  return {
    success: count <= limit,
    remaining: Math.max(0, limit - count),
    count,
  };
}
