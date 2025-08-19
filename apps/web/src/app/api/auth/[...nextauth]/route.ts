/* eslint-disable @typescript-eslint/no-explicit-any */
import { handlers } from "@/lib/auth";
import { rateLimit } from "@/lib/ratelimit";
import { AppRouteHandlerFn } from "next/dist/server/route-modules/app-route/module";
import { NextRequest, NextResponse } from "next/server";

function getIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
}

function withRateLimit(handler: AppRouteHandlerFn) {
  return async (req: NextRequest, ctx: any) => {
    const ip = getIp(req);
    const { success } = await rateLimit({
      key: ip,
      limit: 5,
      window: 60,
    });

    if (!success) {
      return new NextResponse("Too many requests", {
        status: 429,
        headers: { "Retry-After": "60" },
      });
    }

    return handler(req, ctx);
  };
}

export const GET = withRateLimit(handlers.GET);
export const POST = withRateLimit(handlers.POST);
