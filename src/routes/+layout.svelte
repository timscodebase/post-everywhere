<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<nav class="p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
		<span class="font-bold text-lg">Post Everywhere</span>
		<ThemeToggle />
	</nav>
	
	<main class="flex-grow">
		{@render children()}
	</main>
</div>