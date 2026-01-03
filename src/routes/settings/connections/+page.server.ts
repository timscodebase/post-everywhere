import { error, redirect } from "@sveltejs/kit";
import { and, eq } from "drizzle-orm";
import { db } from "$lib/server/db";
import { connections } from "$lib/server/db/schema";

export const load = async ({ locals }) => {
	if (!locals.user) throw redirect(302, "/demo/lucia/login");

	const userConnections = await db
		.select()
		.from(connections)
		.where(eq(connections.userId, locals.user.id));

	return {
		connections: userConnections,
	};
};

export const actions = {
	disconnect: async ({ request, locals }) => {
		if (!locals.user) throw error(401);

		const formData = await request.formData();
		const platform = formData.get("platform") as string;

		await db
			.delete(connections)
			.where(
				and(
					eq(connections.userId, locals.user.id),
					eq(connections.platform, platform),
				),
			);

		return { success: true };
	},
};
