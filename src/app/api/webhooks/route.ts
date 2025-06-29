import { prisma } from "@/lib/prisma";
import { UserJSON } from "@clerk/nextjs/server";
import { verifyWebhook, WebhookEvent } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = (await verifyWebhook(req)) as WebhookEvent;

    const eventType = evt.type;

    if (eventType === "user.created" || eventType === "user.updated") {
      const user = evt.data as UserJSON;

      const clerkId = user.id;
      const firstName = user.first_name;
      const lastName = user.last_name;
      const email = user.email_addresses.find(
        (e) => e.id === user.primary_email_address_id
      )?.email_address;

      if (!email) {
        console.warn("Primary email not found");
        return new Response("Missing primary email", { status: 400 });
      }

      await prisma.user.upsert({
        where: { clerkId },
        update: {
          email,
          firstName,
          lastName,
        },
        create: {
          clerkId,
          email,
          firstName,
          lastName,
        },
      });
    }
  } catch (error) {
    console.error("Error verifying or processing webhook:", error);
    return new Response("Error processing webhook", { status: 400 });
  }
}
