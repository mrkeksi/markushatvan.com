<script lang="ts">
  import Icon from 'svelte-awesome';
  import {
    faTwitter,
    faMedium,
    faGithub,
    faLinkedin,
    faDev,
  } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';
  import SpeedlifyFooter from './SpeedlifyFooter.svelte';
</script>

<footer class="text-teal-100 border-t-4 border-teal-700 applause-gradient">
  <div
    class="container flex flex-wrap items-baseline justify-between px-3 py-5 mx-auto"
  >
    <div class="w-full mb-6 sm:mb-0 sm:w-1/3">
      <SpeedlifyFooter />
    </div>

    <nav
      aria-label="Left footer navigation"
      class="w-full mb-6 sm:mb-0 sm:w-1/3"
    >
      <a sveltekit:prefetch href="/about" class="footer-link"> About </a>
      <a sveltekit:prefetch href="/blog" class="footer-link"> Blog </a>
      <div class="ml-2">
        <a
          sveltekit:prefetch
          href="/categories/programming"
          class="italic footer-link"
        >
          Programming
        </a>
        <a
          sveltekit:prefetch
          href="/categories/lifestyle"
          class="italic footer-link"
        >
          Lifestyle
        </a>
      </div>
      <a sveltekit:prefetch href="/recommendations" class="footer-link">
        Recommendations
      </a>
    </nav>
    <nav
      aria-label="Right footer navigation"
      class="w-full mb-6 sm:mb-0 sm:w-1/3"
    >
      <a sveltekit:prefetch href="/services" class="footer-link"> Services </a>
      <a sveltekit:prefetch href="/contact" class="footer-link"> Contact </a>
      <a sveltekit:prefetch href="/resume" class="footer-link"> Resume </a>
      <a sveltekit:prefetch href="/imprint" class="footer-link"> Imprint </a>
      <a sveltekit:prefetch href="/privacy-policy" class="footer-link">
        Privacy policy
      </a>
      <a sveltekit:prefetch href="/terms-and-conditions" class="footer-link">
        Terms and conditions
      </a>
    </nav>

    <nav class="w-full mt-6 sm:w-2/3">
      <ExternalLink
        href="mailto:contact@markushatvan.com"
        ariaLabel="Write me a mail"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faEnvelope}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://github.com/mhatvan"
        ariaLabel="Follow me on GitHub"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
        rel="me"
      >
        <Icon data="{faGithub}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://dev.to/mhatvan"
        ariaLabel="Follow me on dev.to"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faDev}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/markus-hatvan-b912b91aa/"
        ariaLabel="Network with me on Linkedin"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faLinkedin}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://twitter.com/HatvanMarkus"
        ariaLabel="Tweet with me on Twitter"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
        rel="me"
      >
        <Icon data="{faTwitter}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://medium.com/@markushatvan"
        ariaLabel="Follow me on Medium"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faMedium}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://markushatvan.com/rss.xml"
        ariaLabel="Read the RSS feed"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faRss}" class="mr-3" scale="{1.5}" />
      </ExternalLink>
    </nav>

    <div class="w-full mt-0 sm:w-1/3 sm:mt-6">
      <small class="text-sm">
        <span class="hidden md:inline">Copyright</span>
        © 2020 - {new Date().getFullYear()} Markus Hatvan
      </small>
    </div>
  </div>
</footer>
