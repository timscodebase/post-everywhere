// src/routes/+page.server.ts
import { fail } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import * as table from "$lib/server/db/schema";
import { xProvider } from "$lib/server/providers/x";

export const actions = {
  default: async ({ request, locals }) => {
    const user = locals.user;
    if (!user) return fail(401, { message: "Unauthorized" });

    const formData = await request.formData();
    const content = formData.get("content") as string;
    const platforms = formData.getAll("platforms") as string[];

    if (!content || platforms.length === 0) {
      return fail(400, { message: "Missing content or platforms" });
    }

    // 1. Create the post record in DB
    const postId = crypto.randomUUID();
    await db.insert(table.posts).values({
      id: postId,
      userId: user.id,
      content,
      status: "published", // Default to immediate for now
    });

    // 2. Logic to dispatch to each selected platform
    // Note: In a real app, you would fetch tokens from table.connections here
    if (platforms.includes("twitter")) {
      await xProvider.post("DUMMY_TOKEN", { text: content });
    }

    return { success: true };
  },
};
