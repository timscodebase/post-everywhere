<script lang="ts">
const { data } = $props();
</script>

<div class="max-w-5xl mx-auto space-y-8 font-mono">
    <header class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tighter uppercase">Dashboard</h1>
        <p class="text-muted-foreground italic">Track your content distribution metrics.</p>
    </header>

    <section class="grid gap-6 md:grid-cols-3">
        <div class="p-6 border border-border rounded-xl bg-secondary/10">
            <span class="text-sm font-bold text-muted-foreground uppercase tracking-widest">Total Posts</span>
            <p class="text-3xl font-bold text-primary">{data.posts.length}</p>
        </div>
        <div class="p-6 border border-border rounded-xl bg-secondary/10">
            <span class="text-sm font-bold text-muted-foreground uppercase tracking-widest">Scheduled</span>
            <p class="text-3xl font-bold text-primary">0</p>
        </div>
        <div class="p-6 border border-border rounded-xl bg-secondary/10">
            <span class="text-sm font-bold text-muted-foreground uppercase tracking-widest">Engagement Rate</span>
            <p class="text-3xl font-bold text-primary">--%</p>
        </div>
    </section>

    <section class="space-y-4">
        <h2 class="text-xl font-bold tracking-tight uppercase">Recent Activity</h2>
        <div class="border border-border rounded-xl overflow-hidden bg-background">
            {#if data.posts.length === 0}
                <div class="p-12 text-center text-muted-foreground">
                    <p>No activity yet. Dispatches will appear here.</p>
                </div>
            {:else}
                <div class="divide-y divide-border">
                    {#each data.posts as post}
                        <div class="p-4 flex justify-between items-center hover:bg-secondary/20 transition-colors">
                            <div class="space-y-1">
                                <p class="line-clamp-1 font-medium">{post.content}</p>
                                <p class="text-xs text-muted-foreground uppercase tracking-tighter">
                                    {new Date(post.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <span class="text-xs font-bold px-2 py-1 rounded bg-primary/20 text-primary uppercase">
                                {post.status}
                            </span>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </section>
</div>