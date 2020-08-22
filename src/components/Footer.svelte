<style>
  .applause-gradient {
    background-image: linear-gradient(
        306deg,
        rgba(54, 54, 54, 0.05) 0%,
        rgba(54, 54, 54, 0.05) 33.333%,
        rgba(85, 85, 85, 0.05) 33.333%,
        rgba(85, 85, 85, 0.05) 66.666%,
        rgba(255, 255, 255, 0.05) 66.666%,
        rgba(255, 255, 255, 0.05) 99.999%
      ),
      linear-gradient(
        353deg,
        rgba(81, 81, 81, 0.05) 0%,
        rgba(81, 81, 81, 0.05) 33.333%,
        rgba(238, 238, 238, 0.05) 33.333%,
        rgba(238, 238, 238, 0.05) 66.666%,
        rgba(32, 32, 32, 0.05) 66.666%,
        rgba(32, 32, 32, 0.05) 99.999%
      ),
      linear-gradient(
        140deg,
        rgba(192, 192, 192, 0.05) 0%,
        rgba(192, 192, 192, 0.05) 33.333%,
        rgba(109, 109, 109, 0.05) 33.333%,
        rgba(109, 109, 109, 0.05) 66.666%,
        rgba(30, 30, 30, 0.05) 66.666%,
        rgba(30, 30, 30, 0.05) 99.999%
      ),
      linear-gradient(
        189deg,
        rgba(77, 77, 77, 0.05) 0%,
        rgba(77, 77, 77, 0.05) 33.333%,
        rgba(55, 55, 55, 0.05) 33.333%,
        rgba(55, 55, 55, 0.05) 66.666%,
        rgba(145, 145, 145, 0.05) 66.666%,
        rgba(145, 145, 145, 0.05) 99.999%
      ),
      linear-gradient(90deg, rgb(9, 201, 186), rgb(18, 131, 221));
  }
</style>

<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faTwitter, faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';

  export let segment: string;
</script>

<footer class="text-teal-200 border-t-4 border-teal-700 applause-gradient">
  <div class="container flex flex-wrap items-baseline justify-between px-3 py-5 mx-auto">
    <div class="w-full mb-6 sm:mb-0 sm:w-1/3">Markus Hatvan</div>
    <nav class="w-full mb-6 sm:mb-0 sm:w-1/3">
      <a
        rel="prefetch"
        aria-current="{segment === 'blog' ? 'page' : undefined}"
        href="/blog"
        class="footer-link"
      >
        Blog
      </a>
      <div class="ml-2">
        <a
          rel="prefetch"
          aria-current="{segment === 'programming' ? 'page' : undefined}"
          href="/categories/programming"
          class="text-sm footer-link"
        >
          Programming
        </a>
        <a
          rel="prefetch"
          aria-current="{segment === 'lifestyle' ? 'page' : undefined}"
          href="/categories/lifestyle"
          class="text-sm footer-link"
        >
          Lifestyle
        </a>
      </div>
    </nav>
    <nav class="w-full mb-6 sm:mb-0 sm:w-1/3">
      <a
        rel="prefetch"
        aria-current="{segment === 'about' ? 'page' : undefined}"
        href="/about"
        class="footer-link"
      >
        About
      </a>
      <a
        rel="prefetch"
        aria-current="{segment === 'contact' ? 'page' : undefined}"
        href="/contact"
        class="footer-link"
      >
        Contact
      </a>
      <a
        rel="prefetch"
        aria-current="{segment === 'imprint' ? 'page' : undefined}"
        href="/imprint"
        class="footer-link"
      >
        Imprint
      </a>
      <a
        rel="prefetch"
        aria-current="{segment === 'privacy-policy' ? 'page' : undefined}"
        href="/privacy-policy"
        class="footer-link"
      >
        Privacy policy
      </a>
    </nav>
    <nav class="w-full mt-6 ml-auto sm:w-1/3">
      <ExternalLink
        href="mailto:markus_hatvan@aon.at"
        ariaLabel="Write me a mail"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faEnvelope}" class="mr-3" />
      </ExternalLink>

      <ExternalLink
        href="https://github.com/mhatvan"
        ariaLabel="Follow me on Github"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faGithub}" class="mr-3" />
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/markus-hatvan-b912b91aa/"
        ariaLabel="Network with me on Linkedin"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faLinkedin}" class="mr-3" />
      </ExternalLink>

      <ExternalLink
        href="https://twitter.com/HatvanMarkus"
        ariaLabel="Tweet with me on Twitter"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faTwitter}" class="mr-3" />
      </ExternalLink>

      <ExternalLink
        href="https://medium.com/@markushatvan"
        ariaLabel="Follow me on Medium"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faMedium}" class="mr-3" />
      </ExternalLink>

      <ExternalLink
        href="https://markushatvan.com/rss.xml"
        ariaLabel="Read the RSS feed"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faRss}" class="mr-3" />
      </ExternalLink>
    </nav>
    <div class="w-full mt-0 sm:w-1/3 sm:mt-6">
      <small class="text-sm ">
        <span class="hidden md:inline">Copyright</span>
        © 2020 Markus Hatvan
      </small>
    </div>
  </div>
</footer>
