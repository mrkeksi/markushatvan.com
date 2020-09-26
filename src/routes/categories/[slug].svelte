<script context="module">
  import { convertToSentenceCase } from '../../helpers/utils';

  export async function preload({ params }) {
    try {
      const allPosts = await this.fetch(`blog.json`);
      const posts = await allPosts.json();

      const postsByCategory = posts.filter(
        (post: Post) => post.category === convertToSentenceCase(params.slug),
      );

      return { posts, postsByCategory, slug: params.slug };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script>
  import BlogOverviewHeader from '../../components/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '../../components/BlogPostSidebar.svelte';
  import BlogPostFilters from '../../components/BlogPostFilters.svelte';
  import CurrentGoals from '../../components/CurrentGoals.svelte';
  import SEO from '../../components/SEO.svelte';
  import { stores } from '@sapper/app';
  import type { Post } from '../../models/post';
  const { page } = stores();

  export let postsByCategory: Post[];
  export let posts: Post[];

  $: readableSlug = convertToSentenceCase($page.params.slug);
</script>

<svelte:head>
  <title>{readableSlug} | Markus Hatvan</title>

  <meta
    name="description"
    content="Opinions and viewpoints about {readableSlug}."
  />
</svelte:head>

<SEO />

<BlogOverviewHeader>
  <CurrentGoals {readableSlug} />
</BlogOverviewHeader>

<section class="container flex flex-wrap mh-container">
  <BlogPostFilters posts="{postsByCategory}" filteredByCategory />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar {posts} />
  </aside>
</section>
