<script lang="ts">
import "./layout.css";
import ThemeToggle from "$lib/components/ThemeToggle.svelte";

const { children } = $props();
</script>

<div class="min-h-screen bg-background text-foreground font-mono selection:bg-primary/30">
  <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-14 items-center justify-between px-4 max-w-7xl mx-auto">
      <div class="flex items-center gap-6">
        <a href="/" class="flex items-center space-x-2">
          <span class="font-bold text-primary tracking-tighter">POST_EVERYWHERE</span>
        </a>
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="/dashboard" class="transition-colors hover:text-primary text-foreground/70 hover:text-foreground">Dashboard</a>
          <a href="/settings" class="transition-colors hover:text-primary text-foreground/70 hover:text-foreground">Settings</a>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8 max-w-7xl">
    {@render children()}
  </main>
</div>