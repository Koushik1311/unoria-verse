import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { emotion: string } }
) {
  const { emotion } = params;

  if (!emotion) {
    return NextResponse.json({ error: "Emotion is required" }, { status: 400 });
  }

  try {
    const limit = 5;

    // Get the total number of quotes with the given emotion
    const total = await prisma.quote.count({
      where: {
        emotion: {
          name: emotion,
        },
      },
    });

    if (total === 0) {
      return NextResponse.json({ error: "No quotes found" }, { status: 404 });
    }

    /// Safely generate a random offset
    const offset =
      total > limit ? Math.floor(Math.random() * (total - limit)) : 0;

    // Fech 5 random quotes starting from the random offset
    const quotes = await prisma.quote.findMany({
      where: {
        emotion: {
          name: emotion,
        },
      },
      skip: offset,
      take: limit,
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(quotes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}
