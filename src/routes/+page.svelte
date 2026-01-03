<script lang="ts">
  // Svelte 5 Runes
  let postContent = $state("");
  let selectedPlatforms = $state<string[]>([]);

  const platforms = [
    { id: "twitter", name: "X (Twitter)", icon: "🐦" },
    { id: "linkedin", name: "LinkedIn", icon: "💼" },
    { id: "facebook", name: "Facebook", icon: "📘" },
  ];

  function togglePlatform(id: string) {
    if (selectedPlatforms.includes(id)) {
      selectedPlatforms = selectedPlatforms.filter((p) => p !== id);
    } else {
      selectedPlatforms = [...selectedPlatforms, id];
    }
  }

  function handlePost() {
    console.log("Posting to:", selectedPlatforms);
    console.log("Content:", postContent);
    // TODO: Implement server action
  }
</script>

<div class="max-w-4xl mx-auto p-6 space-y-8">
  <header class="space-y-2">
    <h1 class="text-3xl font-bold tracking-tight">Post Everywhere</h1>
    <p class="text-gray-500">Create once, publish everywhere.</p>
  </header>

  <main class="grid gap-6 md:grid-cols-2">
    <!-- Composer -->
    <section class="space-y-4 border rounded-lg p-6 shadow-sm">
      <h2 class="text-xl font-semibold">Compose</h2>

      <div class="space-y-2">
        <label for="content" class="text-sm font-medium">Post Content</label>
        <textarea
          id="content"
          bind:value={postContent}
          class="w-full min-h-[150px] p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          placeholder="What's on your mind?"
        ></textarea>
      </div>

      <div class="space-y-2">
        <span class="text-sm font-medium">Select Platforms</span>
        <div class="flex gap-2">
          {#each platforms as platform}
            <button
              onclick={() => togglePlatform(platform.id)}
              class="px-3 py-2 border rounded-md flex items-center gap-2 transition-colors
							{selectedPlatforms.includes(platform.id)
                ? 'bg-blue-50 border-blue-200 text-blue-700'
                : 'hover:bg-gray-50'}"
            >
              <span>{platform.icon}</span>
              <span>{platform.name}</span>
            </button>
          {/each}
        </div>
      </div>

      <button
        onclick={handlePost}
        class="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors font-medium"
      >
        Schedule Post
      </button>
    </section>

    <!-- Preview / Status (Placeholder) -->
    <section class="space-y-4 border rounded-lg p-6 ">
      <h2 class="text-xl font-semibold">Recent Activity</h2>
      <div class="text-sm text-gray-500 text-center py-10">
        No posts yet. Connect an account to get started.
      </div>
    </section>
  </main>
</div>
