<script>
  import Icon from 'svelte-awesome';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

  const projects = [
    {
      name: 'MediaMarktSaturn',
      description: `Europe's number one consumer electronics retailer`,
      techStack:
        'React, Typescript, GraphQL, Styled Components, Node.js, Contentful CMS, Storybook, Jira, Confluence',
      websiteLink: 'https://www.mediamarkt.com/',
    },
    {
      name: 'SlowLettuce',
      description: 'Berlin’s UX design agency for early-stage tech startups',
      techStack:
        'SapperJS, Svelte, Bulma, NodeJS, Rollup, Markdown, Github, Netlify, Asana',
      websiteLink: 'https://slowlettuce.io/',
    },
    {
      name: 'markushatvan.com',
      description:
        'Personal website and blog written from scratch with SvelteKit and TailwindCSS.',
      techStack:
        'SvelteKit, Svelte, TailwindCSS, NodeJS, Rollup, Markdown, GitHub, Netlify',
      websiteLink: 'https://markushatvan.com',
      githubLink: 'https://github.com/mhatvan/markushatvan.com',
    },
  ];

</script>

<section class="container mh-container">
  <h2 class="border-b-4 border-teal-700">Projects that I am working on</h2>
  {#each projects as project}
    <div
      class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300"
    >
      <div class="inline-flex items-baseline w-full lg:w-1/4">
        <h3 class="my-0 font-bold break-all">{project.name}</h3>
        {#if project.websiteLink}
          <a
            href="{project.websiteLink}"
            class="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Website for {project.name}"
          >
            <Icon data="{faExternalLinkAlt}" class="ml-3" />
          </a>
        {/if}
        {#if project.githubLink}
          <a
            href="{project.githubLink}"
            class="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub for {project.name}"
          >
            <Icon data="{faGithub}" class="ml-3" />
          </a>
        {/if}
      </div>
      <div class="w-full my-3 lg:w-3/4">
        <p>{project.description}</p>
        <p class="my-0 text-sm">Built with {project.techStack}</p>
      </div>
    </div>
  {/each}
</section>
