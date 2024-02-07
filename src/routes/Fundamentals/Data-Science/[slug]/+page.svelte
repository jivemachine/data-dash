<!-- src/routes/Fundamentals/Data-Science/[slug]/+page.svelte -->
<script>
	export let data;
	const { title, slug, Content } = data;
</script>

<h1 class="text-3xl bold mb-5">
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
	{title}
</h1>

<article class="prose prose-lg prose-headings:underline prose-a:no-underline prose-a:link-primary hover:prose-a:underline prose-img:rounded-xl">
	<Content />
</article>