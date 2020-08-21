<script context="module">
  import { convertToSentenceCase } from '../../helpers/utils';

  export async function preload({ params }) {
    try {
      const allPosts = await this.fetch(`blog.json`);
      const posts: Post[] = await allPosts.json();

      const postsByTag = posts.filter((post: Post) => {
        if (!post.tags) {
          return [];
        }
        const regex = new RegExp(post.tags.join('|'), 'i');
        return regex.test(convertToSentenceCase(params.slug));
      });

      return { posts, postsByTag, slug: params.slug };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script>
  import BlogOverviewHeader from '../../components/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '../../components/BlogPostSidebar.svelte';
  import BlogPostFilters from '../../components/BlogPostFilters.svelte';
  import SEO from '../../components/SEO.svelte';
  import type { Post } from '../../models/post';

  export let postsByTag: Post[];
  export let slug: string;
  export let posts: Post[];

  const readableSlug = convertToSentenceCase(slug);
</script>

<svelte:head>
  <title>{readableSlug} | Markus Hatvan</title>

  <meta name="description" content="Blog posts filtered by selected tag." />
</svelte:head>

<SEO />

<BlogOverviewHeader>
  <h1>
    Posts tagged with
    <span class="underline">{readableSlug}</span>
  </h1>
</BlogOverviewHeader>

<section class="container flex flex-wrap mh-container">

  <BlogPostFilters posts="{postsByTag}" filteredByTag />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar {posts} />
  </aside>
</section>
