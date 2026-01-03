<script lang="ts">
	import { enhance } from '$app/forms';

	// Svelte 5 Runes for reactive state
	let postContent = $state("");
	let selectedPlatforms = $state<string[]>([]);

	const platforms = [
		{ id: "x", name: "X (Twitter)", icon: "🐦" },
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
</script>

<div class="max-w-5xl mx-auto space-y-10 py-6 font-mono">
	<header class="space-y-3">
		<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
			POST_<span class="text-primary italic">EVERYWHERE</span>
		</h1>
		<p class="text-muted-foreground text-lg italic">
			Create once, publish everywhere.
		</p>
	</header>

	<main class="grid gap-8 lg:grid-cols-5">
		<form 
			method="POST" 
			use:enhance 
			class="lg:col-span-3 space-y-6 border border-border rounded-xl p-8 bg-background shadow-sm"
		>
			<div class="flex items-center justify-between">
				<h2 class="text-xl font-bold tracking-tight uppercase">Compose</h2>
				<span class="text-xs text-muted-foreground font-medium uppercase tracking-widest">New Dispatch</span>
			</div>

			{#each selectedPlatforms as platform}
				<input type="hidden" name="platforms" value={platform} />
			{/each}

			<div class="space-y-3">
				<label for="content" class="text-sm font-bold uppercase tracking-wider text-muted-foreground">Content</label>
				<textarea
					id="content"
					name="content"
					bind:value={postContent}
					required
					class="w-full min-h-[220px] p-4 bg-secondary/30 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none transition-all placeholder:text-muted-foreground/50"
					placeholder="What's on your mind? Type your update here..."
				></textarea>
			</div>

			<div class="space-y-3">
				<span class="text-sm font-bold uppercase tracking-wider text-muted-foreground">Destinations</span>
				<div class="flex flex-wrap gap-3">
					{#each platforms as platform}
						<button
							type="button"
							onclick={() => togglePlatform(platform.id)}
							class="px-4 py-2 border rounded-md flex items-center gap-3 transition-all font-medium
							{selectedPlatforms.includes(platform.id)
								? 'bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
								: 'border-border bg-background hover:bg-secondary text-foreground opacity-70 hover:opacity-100 hover:scale-[1.02]'}"
						>
							<span class="grayscale-0">{platform.icon}</span>
							<span>{platform.name}</span>
						</button>
					{/each}
				</div>
			</div>

			<button
				type="submit"
				disabled={!postContent || selectedPlatforms.length === 0}
				class="w-full py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 active:scale-[0.98] transition-all font-bold text-lg shadow-lg shadow-primary/20 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
			>
				Schedule Dispatch
			</button>
		</form>

		<section class="lg:col-span-2 space-y-6 border border-border rounded-xl p-8 bg-secondary/10">
			<h2 class="text-xl font-bold tracking-tight uppercase">Recent Activity</h2>
			<div class="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-4">
				<div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center opacity-50">
					<span class="text-xl">📊</span>
				</div>
				<div class="space-y-1">
					<p class="font-medium text-foreground">Queue is empty</p>
					<p class="text-sm text-muted-foreground max-w-[220px] mx-auto">
						Connect your accounts to start distributing content.
					</p>
				</div>
				<a href="/settings" class="text-sm text-primary font-bold hover:underline underline-offset-4 uppercase tracking-tighter transition-all">
					Manage Connections &rarr;
				</a>
			</div>
		</section>
	</main>
</div>