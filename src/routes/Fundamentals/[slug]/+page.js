// src/routes/Fundamentals/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../data/${params.slug}.md`);
	const { title, slug } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
        slug
	};
}