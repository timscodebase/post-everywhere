<script lang="ts">
	// Svelte 5 Runes for capturing data from the server loader
	const { data } = $props();

	const platforms = [
		{ id: "x", name: "X (Twitter)", icon: "🐦" },
		{ id: "linkedin", name: "LinkedIn", icon: "💼" },
		{ id: "facebook", name: "Facebook", icon: "📘" },
	];
</script>

<div class="max-w-2xl mx-auto space-y-8 font-mono">
	<header class="space-y-2">
		<h1 class="text-3xl font-bold tracking-tighter uppercase">Connections</h1>
		<p class="text-muted-foreground italic">Manage your linked accounts.</p>
	</header>

	<div class="grid gap-4">
		{#each platforms as platform}
			{@const conn = data.connections.find((c) => c.platform === platform.id)}
			<div
				class="flex items-center justify-between p-6 border border-border rounded-xl bg-secondary/5"
			>
				<div class="flex items-center gap-4">
					<span class="text-2xl">{platform.icon}</span>
					<div>
						<h3 class="font-bold uppercase tracking-tight">{platform.name}</h3>
						{#if conn}
							<p class="text-xs text-primary font-bold tracking-widest">
								CONNECTED AS @{conn.platformUsername}
							</p>
						{:else}
							<p class="text-xs text-muted-foreground uppercase">Not Linked</p>
						{/if}
					</div>
				</div>

				<div class="flex items-center">
					{#if conn}
						<form method="POST" action="?/disconnect">
							<input type="hidden" name="platform" value={platform.id} />
							<button
								type="submit"
								class="px-4 py-2 text-xs font-bold border border-border rounded hover:bg-destructive hover:text-destructive-foreground transition-all uppercase"
							>
								Disconnect
							</button>
						</form>
					{:else}
						<a
							href="/auth/login/{platform.id}"
							class="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded uppercase transition-all
							{platform.id !== 'x'
								? 'opacity-30 pointer-events-none grayscale'
								: 'hover:opacity-90 active:scale-95'}"
						>
							{platform.id === "x" ? "Connect" : "Soon"}
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
