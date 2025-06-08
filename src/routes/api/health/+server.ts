import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ platform }) => {
  const timestamp = new Date().toISOString();

  const healthData = {
    status: "healthy",
    timestamp,
    version: "1.0.0",
    environment: platform?.env?.NODE_ENV || "development",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    platform: {
      cloudflare: !!platform?.env,
      node: process.version,
    },
  };

  return json(healthData, {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    },
  });
};

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();

  return json(
    {
      message: "Health check endpoint - POST not implemented",
      received: body,
      timestamp: new Date().toISOString(),
    },
    {
      status: 501,
    }
  );
};
