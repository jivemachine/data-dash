// src/routes/Tools/SQL/Clauses/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../../../data/${params.slug}.md`);
	const { title, slug, order } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
        slug,
        order
	};
}