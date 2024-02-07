// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
    const allPosts = await fetchMarkdownPosts();

    const sortedPosts = allPosts.sort(( a, b ) => {
        return b.meta.order - a.meta.order;
    });

    return json(sortedPosts);
};