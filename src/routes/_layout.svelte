<script context="module">
  export async function preload() {
    try {
      await this.fetch('sitemap.xml');
      await this.fetch('rss.xml');
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script>
  import { afterUpdate } from 'svelte';
  import BreakpointHelper from '../components/BreakpointHelper.svelte';
  import CookieNotice from '../components/CookieNotice.svelte';
  import NProgress from '../components/NProgress.svelte';
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
  import { isDev } from '../helpers/stores.js';

  import 'prismjs/themes/prism-tomorrow.css';

  export let segment: string;

  let fullURL: string = '';

  afterUpdate(() => {
    let tmpURL = window.location.href;
    fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/';
  });
</script>

<svelte:head>
  <link rel="canonical" href="{fullURL}" />
</svelte:head>

<BreakpointHelper />

<NProgress />

<Nav segment="{segment}" />

<main class="pb-12 mh">
  <slot />
</main>

<Footer segment="{segment}" />

{#if !$isDev}
  <CookieNotice />
{/if}

<style>
  main {
    /* Offset fixed navbar */
    min-height: calc(100vh - 335px);
  }
</style>
