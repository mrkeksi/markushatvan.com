import type { LoadInput } from '@sveltejs/kit';
import posts from './../_posts';

export function get({ params }: LoadInput) {
  const selectedPost = posts.find((post) => post.slug === params.slug);

  if (selectedPost) {
    return {
      body: selectedPost,
    };
  }

  return {
    status: 404,
  };
}
