import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import * as table from "$lib/server/db/schema";

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

    // Insert into the database using plural 'posts' table
    await db.insert(table.posts).values({
      id: crypto.randomUUID(),
      userId: user.id,
      content,
      status: "published",
    });

    return { success: true };
  },
};
