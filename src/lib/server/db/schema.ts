// src/lib/server/db/schema.ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  age: integer("age"),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});

// New Table: Stores OAuth credentials for different platforms
export const connections = sqliteTable("connections", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  platform: text("platform").notNull(), // e.g., 'x', 'facebook', 'linkedin'
  platformUserId: text("platform_user_id").notNull(),
  platformUsername: text("platform_username"),
  accessToken: text("access_token").notNull(), // Should be encrypted in production
  refreshToken: text("refresh_token"),
  expiresAt: integer("expires_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});

// New Table: Tracks posts across platforms
export const posts = sqliteTable("posts", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  content: text("content").notNull(),
  mediaUrls: text("media_urls"), // JSON string of URLs
  status: text("status")
    .notNull()
    .$type<"draft" | "scheduled" | "published" | "failed">(),
  scheduledAt: integer("scheduled_at", { mode: "timestamp" }),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Connection = typeof connections.$inferSelect;
export type Post = typeof posts.$inferSelect;
