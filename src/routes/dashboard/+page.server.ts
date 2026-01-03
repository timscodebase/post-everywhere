import { redirect } from "@sveltejs/kit";
import { desc, eq } from "drizzle-orm";
import { db } from "$lib/server/db";
import { posts } from "$lib/server/db/schema";

export const load = async ({ locals }) => {
	if (!locals.user) throw redirect(302, "/demo/lucia/login");

	// Fetch the user's recent posts from the database
	const recentPosts = await db
		.select()
		.from(posts)
		.where(eq(posts.userId, locals.user.id))
		.orderBy(desc(posts.createdAt))
		.limit(10);

	return {
		posts: recentPosts,
	};
};
