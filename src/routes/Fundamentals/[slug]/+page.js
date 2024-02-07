// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, slug } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
        slug
	};
}