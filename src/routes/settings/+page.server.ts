import { redirect } from "@sveltejs/kit";

export const load = () => {
	// Redirect /settings to the connections management page
	throw redirect(302, "/settings/connections");
};
