<style>
  .header-box-shadow {
    box-shadow: 0 -0.2rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  [aria-current] {
    font-weight: bold;
  }

  header {
    z-index: 1;
    padding: 2px 0;
  }
</style>

<script>
  // @ts-nocheck
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import ClickOutside from 'svelte-click-outside';

  export let segment: string;

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="fixed top-0 w-full bg-white header-box-shadow">
  <div class="container flex flex-wrap items-baseline justify-between p-3 mx-auto bg-white">
    <div class="flex items-center flex-shrink-0 mr-6 text-white">
      <a
        rel="prefetch"
        aria-current="{segment === undefined ? 'page' : undefined}"
        href="."
        class="mt-0 text-xl font-semibold tracking-tight nav-link md:inline-block"
      >
        Markus Hatvan
      </a>
    </div>
    <div class="block md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center px-3 py-2 text-teal-600 border border-gray-400 hover:text-teal-800 hover:border-gray-500"
          on:click="{toggleHamburgerMenu}"
        >
          <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </ClickOutside>
    </div>
    <div class:hidden="{!open}" class="w-full md:flex md:w-auto">
      <nav>
        <a
          rel="prefetch"
          aria-current="{segment === 'about' ? 'page' : undefined}"
          href="/about"
          class="nav-link md:inline-block md:mt-0"
        >
          About
        </a>
        <a
          rel="prefetch"
          aria-current="{segment === 'blog' ? 'page' : undefined}"
          href="/blog"
          class="nav-link md:inline-block md:mt-0"
        >
          Blog
        </a>
        <a
          rel="prefetch"
          aria-current="{segment === 'recommendations' ? 'page' : undefined}"
          href="/recommendations"
          class="nav-link md:inline-block md:mt-0"
        >
          Recommendations
        </a>
        <a
          rel="prefetch"
          aria-current="{segment === 'contact' ? 'page' : undefined}"
          href="/contact"
          class="nav-link md:inline-block md:mt-0"
        >
          Contact
        </a>
        <a
          href="https://github.com/mhatvan"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex mr-0 nav-link md:mt-0"
        >
          Github
          <Fa icon="{faGithub}" class="mt-1 ml-3" />
        </a>
      </nav>
    </div>
  </div>
</header>
