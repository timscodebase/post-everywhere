import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import type { InferSelectModel } from "drizzle-orm";

// --- Auth Tables (Lucia) ---

export const users = sqliteTable("user", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

export type User = InferSelectModel<typeof users>;

export const sessions = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: integer("expires_at").notNull(),
});

export type Session = InferSelectModel<typeof sessions>;

// --- Application Tables ---

export const connections = sqliteTable("connection", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  provider: text("provider").notNull(), // e.g., 'twitter', 'facebook', 'linkedin'
  providerAccountId: text("provider_account_id").notNull(),
  accessToken: text("access_token").notNull(), // Should be encrypted in production
  refreshToken: text("refresh_token"),
  expiresAt: integer("expires_at"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

export const posts = sqliteTable("post", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  content: text("content").notNull(),
  mediaUrls: text("media_urls"), // JSON string of URLs
  status: text("status").default("draft"), // draft, scheduled, published, failed
  scheduledFor: integer("scheduled_for", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

// Track status of a post on a specific platform
export const postDeployments = sqliteTable("post_deployment", {
  id: text("id").primaryKey(),
  postId: text("post_id")
    .notNull()
    .references(() => posts.id),
  connectionId: text("connection_id")
    .notNull()
    .references(() => connections.id),
  status: text("status").default("pending"), // pending, success, failed
  externalId: text("external_id"), // ID returned by the social platform
});
