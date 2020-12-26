<script context="module">
  export async function preload() {
    try {
      const blog = await this.fetch(`blog.json`);
      const posts = await blog.json();
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script>
  import Introduction from '../components/Introduction.svelte';
  import Applause from '../components/Applause.svelte';
  import InspirationalQuote from '../components/InspirationalQuote.svelte';
  import OSSContributions from '../components/OSSContributions.svelte';
  import CurrentProjects from '../components/CurrentProjects.svelte';
  import Talks from '../components/Talks.svelte';
  import RecentPosts from '../components/RecentPosts.svelte';
  import SEO from '../components/SEO.svelte';
  import type { Post } from '../models/post';

  export let posts: Post[];
</script>

<svelte:head>
  <title>Markus Hatvan - Full Stack Developer</title>
  <meta
    name="description"
    content="Personal website and blog written from scratch with SapperJS and TailwindCSS."
  />
</svelte:head>

<SEO />

<Introduction />

<RecentPosts posts="{posts}" />

<InspirationalQuote />

<CurrentProjects />

<Applause />

<OSSContributions />

<Talks />
