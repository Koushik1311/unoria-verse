import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.BULK_QUOTES_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Payload must be an array of quotes" },
        { status: 400 }
      );
    }

    const result = await prisma.quote.createMany({
      data: body,
      skipDuplicates: true,
    });

    return NextResponse.json({
      message: "Quotes created",
      count: result.count,
    });
  } catch (error) {
    console.error("Bulk quote insert failed:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
