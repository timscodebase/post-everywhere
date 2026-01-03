# **📄 GEMINI.md**

## **🚀 Project Overview**

- **Project Name**: Post Everywhere
- **Description**: An open-source platform for simultaneous content distribution across multiple social media platforms.
- **Key Value**: Provides a unified interface to manage posts and track engagement through a centralized dashboard.

**🛠️ Technical Stack**

- **Framework**: SvelteKit (Primary).
- **Language**: TypeScript for strict type-safety across various social APIs.
- **Database**: Drizzle ORM with a SQL-backend (e.g., SQLite/libSQL).
- **Authentication**: Lucia Auth for managing sessions and encrypted OAuth tokens.
- **Styling**: Tailwind CSS using **OKLCH** color space for modern, accessible UI.
- **Environment**: VSCode Insiders.

**📂 Core Features & Logic**

- **Multi-Platform Integration**: Supports Facebook, X (Twitter), Instagram, LinkedIn, and TikTok.
- **Provider Pattern**: All social integrations must implement a standard interface for posting and fetching analytics.
- **Post Scheduling**: Capability to schedule text, images, videos, and links for future publication.
- **Onboarding**: A guided setup process requiring at least one connected social account before proceeding.
- **Open Source**: The codebase must be modular to allow for community contributions and custom integrations.

**🤖 Instructions for Gemini**

- **Code Style**: Prioritize Svelte 5 **Runes** for reactive state and functional TypeScript patterns.
- **Component Architecture**: Use a "Headless" approach where logic is separated from the UI; prioritize **Shadcn-Svelte** components.
- **Security First**: Always remind the user to encrypt OAuth tokens at rest and use protected server-side routes for API interactions.
- **Conciseness**: Provide code snippets that are ready for VSCode Insiders, focusing on clarity and modern syntax.
- **Contextual Awareness**: Always check PLANNING.md for feature requirements before suggesting structural changes.
