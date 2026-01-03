# Post Everywhere

Post Everywhere is an open-source platform that allows users to post content across multiple social media platforms simultaneously. It aims to simplify the process of content distribution and enhance user engagement by providing a unified interface for managing posts.

## Features

1. **Setup**: On first launch, users will be guided through a setup process to connect their social media accounts. The user must connect at least one account to proceed. The setup process will include API keys or authentication for each platform.
2. **Posts**: can include text, images, videos, and links, and users can schedule posts for future publication. The platform supports integration with popular social media networks such as Facebook, X (Twitter), Instagram, LinkedIn, TikTok, and more.
3. **Multi-Platform Posting**: Users can create a single post and share it across various social media platforms at once.
4. **Scheduling**: Users can schedule posts to be published at specific times on different platforms.
5. **Content Management**: A centralized dashboard to manage and track posts, including analytics on engagement.
6. **User Authentication**: Secure login and authentication for multiple social media accounts.
7. **Open Source**: The platform is open-source, allowing developers to contribute and customize the codebase.

## Technology Stack

- **Frontend**: Sveltekit (Svelte 5 runes).

1. **Framework & Language**

- SvelteKit (v2/5): Continue using SvelteKit as your foundation. If you haven't moved to Svelte 5 yet, the new Runes system will significantly simplify the state management of your multi-platform posting dashboard.

- TypeScript: Essential for managing the complex, differing schemas of various social media APIs (Facebook vs. X vs. LinkedIn).

1. **Database & ORM**

- Drizzle ORM: Since you are already using Drizzle, stick with it for its "SQL-like" feel and excellent TypeScript performance.

- SQLite (via libSQL): For an open-source project, libSQL is excellent. It provides a serverless SQL database that can run locally or in the cloud.

- Schema Design Idea: You will need a Connections table to store encrypted OAuth tokens for each platform and a ScheduledPosts table to track status and metadata.

1. **Authentication & Social Integration**

- Lucia Auth: Perfect for session management. You can use it alongside official OAuth providers to link user accounts to their social profiles.

- Social API Strategy:

- - Direct Integration: For an open-source project, you should build a "Provider Pattern" in your /src/lib/server/providers directory. Create a base class for SocialProvider and implement specific logic for the Facebook Graph API, Twitter v2 API, and LinkedIn API.

- - Unified Alternative: If you want to move faster, consider a unified API like Ayrshare or Outstand, which handles the varying rate limits and media requirements for you through a single endpoint.

1. **Job Scheduling (The "Scheduling" Feature)**

- SvelteKit is serverless-friendly, but post-scheduling requires a persistent runner.

- Upstash Workflow: A serverless-optimized way to handle long-running tasks and retries.

- BullMQ (Redis-based): If you prefer a more traditional VPS-style setup (using Docker), BullMQ is the industry standard for handling millions of scheduled jobs.

1. **UI & Styling**

- Tailwind CSS: Use it with OKLCH colors to ensure your dashboard looks modern and maintains high accessibility.

- Shadcn-Svelte: A collection of accessible, customizable components that work perfectly with SvelteKit and Drizzle.

🤖 **AI Integration (Optional)**

- Since you are interested in local LLMs and Ollama, you could add a "Smart Caption" feature:

- Ollama Integration: Allow users running the app locally to use a local model (like Llama 3) to generate or rewrite captions for different platforms (e.g., "Make this shorter for X" or "Add hashtags for Instagram").
