import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import * as table from "$lib/server/db/schema";
import { xProvider } from "$lib/server/providers/x";

export const load = async ({ locals }) => {
  if (!locals.user) throw redirect(302, "/demo/lucia/login");
  return {};
};

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

    // Save the post to the database
    const postId = crypto.randomUUID();
    await db.insert(table.posts).values({
      id: postId,
      userId: user.id,
      content,
      status: "published",
    });

    // Immediate dispatch logic (Mock)
    if (platforms.includes("x")) {
      await xProvider.post("MOCK_TOKEN", { text: content });
    }

    return { success: true };
  },
};
