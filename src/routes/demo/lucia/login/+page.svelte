<script lang="ts">
  import { enhance } from "$app/forms";
  let { form } = $props();
</script>

<div
  class="max-w-md mx-auto mt-12 p-8 border border-border rounded-xl bg-background shadow-sm"
>
  <h1 class="text-2xl font-bold uppercase tracking-tight mb-6 text-center">
    Authentication
  </h1>

  <form method="post" use:enhance class="space-y-4">
    <div class="space-y-2">
      <label
        for="username"
        class="text-xs font-bold uppercase text-muted-foreground"
        >Username</label
      >
      <input
        name="username"
        id="username"
        class="w-full p-3 bg-secondary/30 border border-border rounded-lg outline-none focus:border-primary"
      />
    </div>
    <div class="space-y-2">
      <label
        for="password"
        class="text-xs font-bold uppercase text-muted-foreground"
        >Password</label
      >
      <input
        type="password"
        name="password"
        id="password"
        class="w-full p-3 bg-secondary/30 border border-border rounded-lg outline-none focus:border-primary"
      />
    </div>

    <div class="grid grid-cols-2 gap-4 pt-4">
      <button
        formaction="?/login"
        class="py-3 bg-secondary text-foreground font-bold rounded-lg hover:bg-secondary/80 uppercase"
        >Login</button
      >
      <button
        formaction="?/register"
        class="py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 uppercase"
        >Register</button
      >
    </div>

    {#if form?.message}
      <p class="text-sm text-red-500 font-bold mt-4">{form.message}</p>
    {/if}
  </form>
</div>
