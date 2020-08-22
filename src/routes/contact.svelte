<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faTwitter, faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
  import SEO from '../components/SEO.svelte';
  import ExternalLink from '../components/ExternalLink.svelte';
</script>

<svelte:head>
  <title>Contact | Markus Hatvan</title>
  <meta
    name="description"
    content="If you want to say hello, the best way you can reach me is through these channels
    below."
  />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>Contact</h1>

  <p>Want to get in touch?</p>
  <p>There is always something to discuss.</p>
  <p>If you want to say hello, the best way you can reach me is through these channels below.</p>

  <header>
    <h2>Let's get in touch!</h2>
  </header>
  <div class="flex flex-wrap mb-6">
    <ExternalLink
      href="mailto:markus_hatvan@aon.at"
      ariaLabel="Write me a mail"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faEnvelope}" scale="{2}" />
    </ExternalLink>
    <ExternalLink
      href="https://github.com/mhatvan"
      ariaLabel="Follow me on Github"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faGithub}" class="ml-5" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://www.linkedin.com/in/markus-hatvan-b912b91aa/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faLinkedin}" class="ml-5" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://twitter.com/HatvanMarkus"
      ariaLabel="Tweet with me on Twitter"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faTwitter}" class="ml-5" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://medium.com/@markushatvan"
      ariaLabel="Follow me on Medium"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faMedium}" class="ml-5" scale="{2}" />
    </ExternalLink>
  </div>

  <div class="flex flex-wrap">
    <div class="w-full sm:w-1/3">
      <h3>Found an unexpected bug?</h3>
      <ExternalLink
        href="https://github.com/mhatvan/markushatvan.com/issues/new"
        customClass="inline-flex"
      >
        Submit issue
        <Icon data="{faExternalLinkAlt}" class="mt-1 ml-2" />
      </ExternalLink>

    </div>
    <div class="w-full sm:w-1/3">
      <h3>Improvements for the website?</h3>
      <ExternalLink
        href="https://github.com/mhatvan/markushatvan.com/issues/new"
        customClass="inline-flex"
      >
        Request feature
        <Icon data="{faExternalLinkAlt}" class="mt-1 ml-2" />
      </ExternalLink>
    </div>
    <div class="w-full sm:w-1/3">
      <h3>Got a blog post topic proposal?</h3>
      <ExternalLink
        href="https://github.com/mhatvan/markushatvan.com/issues/new"
        customClass="inline-flex"
      >
        Suggest content
        <Icon data="{faExternalLinkAlt}" class="mt-1 ml-2" />
      </ExternalLink>
    </div>
  </div>
</section>
