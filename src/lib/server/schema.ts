// src/lib/server/db/schema.ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// ... existing user and session tables ...

export const connections = sqliteTable("connections", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  platform: text("platform").notNull(), // 'x', 'facebook', 'linkedin', etc.
  platformUserId: text("platform_user_id").notNull(),
  platformUsername: text("platform_username"),
  accessToken: text("access_token").notNull(), // In production, encrypt this
  refreshToken: text("refresh_token"),
  expiresAt: integer("expires_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});

export const posts = sqliteTable("posts", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  content: text("content").notNull(),
  mediaUrls: text("media_urls"), // JSON string of image/video URLs
  status: text("status")
    .notNull()
    .$type<"draft" | "scheduled" | "published" | "failed">(),
  scheduledAt: integer("scheduled_at", { mode: "timestamp" }),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});

export type Connection = typeof connections.$inferSelect;
export type Post = typeof posts.$inferSelect;
