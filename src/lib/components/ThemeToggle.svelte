<script lang="ts">
  import { onMount } from 'svelte';

  // Initialize as a rune to prevent ReferenceError during SSR
  let isDark = $state(true);

  onMount(() => {
    // Sync UI state with the actual class on the client
    isDark = document.documentElement.classList.contains('dark');
  });

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<button
  onclick={toggleTheme}
  type="button"
  class="h-10 w-10 flex items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
  aria-label="Toggle Theme"
>
  {#if isDark}
    <span class="text-lg">🌙</span>
  {:else}
    <span class="text-lg">☀️</span>
  {/if}
</button>