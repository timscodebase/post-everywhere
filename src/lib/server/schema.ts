// src/lib/server/db/schema.ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Renamed to plural to match auth.ts expectations
export const users = sqliteTable("user", {
	id: text("id").primaryKey(),
	age: integer("age"),
	username: text("username").notNull().unique(),
	passwordHash: text("password_hash").notNull(),
});

export const sessions = sqliteTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});

// New Table: Stores OAuth credentials for social accounts
export const connections = sqliteTable("connections", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	platform: text("platform").notNull(), // 'x', 'facebook', 'linkedin'
	platformUserId: text("platform_user_id").notNull(),
	platformUsername: text("platform_username"),
	accessToken: text("access_token").notNull(), // Encrypt this in production
	refreshToken: text("refresh_token"),
	expiresAt: integer("expires_at", { mode: "timestamp" }),
	createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
		() => new Date(),
	),
});

// New Table: Tracks post status and content
export const posts = sqliteTable("posts", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	content: text("content").notNull(),
	status: text("status")
		.notNull()
		.$type<"draft" | "scheduled" | "published" | "failed">(),
	scheduledAt: integer("scheduled_at", { mode: "timestamp" }),
	createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
		() => new Date(),
	),
});

export type Session = typeof sessions.$inferSelect;
export type User = typeof users.$inferSelect;
export type Connection = typeof connections.$inferSelect;
export type Post = typeof posts.$inferSelect;
