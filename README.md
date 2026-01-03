# Post Everywhere

**Post Everywhere** is an open-source platform designed to simplify content distribution by allowing users to post to multiple social media platforms simultaneously from a single interface.

## 🚀 Features

- **Unified Dashboard**: Manage posts for Facebook, X (Twitter), LinkedIn, Instagram, and more.
- **Multi-Platform Posting**: Create once, publish everywhere.
- **Scheduling**: Schedule posts for future publication.
- **Analytics**: Track engagement across platforms (Planned).
- **Secure**: Encrypted OAuth token storage.

## 🛠️ Tech Stack

- **Framework**: SvelteKit (Svelte 5 Runes)
- **Language**: TypeScript
- **Database**: SQLite (via libSQL) with Drizzle ORM
- **Auth**: Lucia Auth
- **Styling**: Tailwind CSS (OKLCH colors)

## 📦 Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file:

   ```env
   DATABASE_URL="file:local.db"
   ```

3. **Database Setup**
   Push the schema to the local SQLite database:

   ```bash
   npm run db:push
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/lib/server/db.ts`: Database connection initialization.
- `src/lib/server/schema.ts`: Drizzle ORM schema definitions.
- `src/routes/`: SvelteKit routes and pages.

## 🤝 Contributing

This project is open-source. Please refer to `PLANNING.md` for the roadmap and `GEMINI.md` for coding standards.

---

_Generated for Post Everywhere POC._
