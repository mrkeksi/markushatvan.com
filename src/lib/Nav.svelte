<script lang="ts">
  import Icon from 'svelte-awesome';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ClickOutside from 'svelte-click-outside';

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="w-full dark:bg-slate-800">
<div class="bg-blue-400 text-white py-1">
<div class="container mx-auto"><p>test</p></div>
</div>
<div class="container flex flex-wrap mx-auto py-3">
<div>
<a sveltekit:prefetch href="/" class="mt-0 text-xl font-semibold tracking-tight nav-link" >
  <img class="h-38" src="/rst_logo-head.webp" alt="rst Logo" />
</a>
</div>
</div>
</header>

<div class="sticky top-0 shadow-lg bg-gray-600/90">
  <div class="container items-center justify-between p-3 mx-auto">
    <div class="ml-auto md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center px-3 py-2 text-teal-700 border border-gray-400 hover:text-teal-900 hover:border-gray-500"
          aria-label="Hamburger menu"
          on:click="{toggleHamburgerMenu}"
        >
          <Icon data="{faBars}" />
        </button>
      </ClickOutside>
    </div>
    <nav
      aria-label="Header navigation"
      class:hidden="{!open}"
      class="w-full ml-auto md:flex md:items-center md:w-auto text-white"
    >
      <a sveltekit:prefetch href="/about" class="nav-link md:mt-0" >
        About
      </a>
      <a sveltekit:prefetch href="/blog" class="nav-link md:mt-0" >
        Blog
      </a>
      <a sveltekit:prefetch href="/recommendations" class="nav-link md:mt-0" >
        Recommendations
      </a>
      <a sveltekit:prefetch href="/services" class="nav-link md:mt-0" >
        Services
      </a>
      <a sveltekit:prefetch href="/contact" class="nav-link md:mt-0" >
        Contact
      </a>
    </nav>
  </div>
  </div>

<style>
  .header-box-shadow {
    box-shadow: 0 -0.2rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  header {
    z-index: 1;
  }
</style>
