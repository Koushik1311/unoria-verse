import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Mood } from "@/generated/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ mood: string }> }
) {
  const { mood } = await params;

  if (!mood) {
    return NextResponse.json({ error: "Mood is required" }, { status: 400 });
  }

  // Validate if the mood is a valid enum value
  if (!Object.values(Mood).includes(mood as Mood)) {
    return NextResponse.json({ error: "Invalid mood value" }, { status: 400 });
  }

  try {
    // TODO: need to get dynamic limit or based on plan
    const limit = 5;

    // Get the total number of quotes with the given mood
    const total = await prisma.quote.count({
      where: {
        mood: mood as Mood,
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
        mood: mood as Mood,
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
    console.error("Can not get quotes", error);
    return NextResponse.json(
      { error: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}
