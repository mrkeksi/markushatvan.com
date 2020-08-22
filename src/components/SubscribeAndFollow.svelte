<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faTwitter, faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faRss } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2>Subscribe & Follow</h2>
  </header>
  <div class="flex flex-wrap justify-center mt-5">
    <ExternalLink
      href="https://github.com/mhatvan"
      ariaLabel="Follow me on Github"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faGithub}" class="mx-3 mb-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://www.linkedin.com/in/markus-hatvan-b912b91aa/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faLinkedin}" class="mx-3 mb-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://twitter.com/HatvanMarkus"
      ariaLabel="Tweet with me on Twitter"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faTwitter}" class="mx-3 mb-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://medium.com/@markushatvan"
      ariaLabel="Follow me on Medium"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faMedium}" class="mx-3 mb-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://markushatvan.com/rss.xml"
      ariaLabel="Read the RSS feed"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faRss}" class="mx-3 mb-3" scale="{2}" />
    </ExternalLink>
  </div>
</div>
