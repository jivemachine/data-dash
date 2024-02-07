<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>
<!-- <article>
	<h1>{data.title}</h1>
	<svelte:component this={data.content} />
</article> -->
<div class="prose prose-lg">
    <svelte:component this={data.content} />
</div>