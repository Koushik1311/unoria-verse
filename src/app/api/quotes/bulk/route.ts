import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
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
