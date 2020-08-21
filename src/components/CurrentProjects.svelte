<script>
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

  const projects = [
    {
      name: 'markushatvan',
      description: 'Personal website and blog written from scratch with SapperJS and TailwindCSS.',
      techStack: 'SapperJS, Svelte, TailwindCSS, NodeJS, Rollup, Markdown, Github, Github Pages',
      websiteLink: 'https://markushatvan.com',
      githubLink: 'https://github.com/mhatvan/markushatvan.com',
    },
    {
      name: 'DAW Comparison',
      description: 'Compare and find the ideal DAW for your needs.',
      techStack: 'Gatsby, React, Ant Design, Markdown, Github, Netlify',
      websiteLink: 'https://dawcomparison.com',
      githubLink: 'https://github.com/mhatvan/dawcomparison',
    },
    {
      name: 'Jooblr',
      description: 'Helping people find a side job.',
      techStack:
        'React Native, Typescript, GraphQL, Formik, Jest, Sentry, Slack, Github, Hasura, Firebase',
      githubLink: 'https://github.com/jooblr',
    },
    {
      name: 'NOVID20',
      description: 'The private way of tracing contacts.',
      techStack:
        'VueJS, Vuex, Google Maps, Leaflet, NodeJS, Typescript, Slack, Gitlab, Trello, Swagger UI',
      websiteLink: 'https://www.novid20.org',
      githubLink: 'https://github.com/novid20org/',
    },
  ];
</script>

<section class="container mh-container">
  <h2 class="border-b-4 border-teal-700">Current Projects</h2>
  {#each projects as project}
    <div class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300">
      <div class="inline-flex items-baseline w-full lg:w-1/4">
        <p class="mb-0 font-bold break-all">{project.name}</p>
        {#if project.websiteLink}
          <a
            href="{project.websiteLink}"
            class="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fa icon="{faExternalLinkAlt}" class="ml-3" />
          </a>
        {/if}
        <a
          href="{project.githubLink}"
          class="inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fa icon="{faGithub}" class="ml-3" />
        </a>
      </div>
      <div class="w-full my-3 lg:w-3/4">
        <p class="my-0">{project.description}</p>
      </div>
      <div class="w-full ml-auto text-sm lg:w-3/4">
        <p class="my-0">Built with {project.techStack}</p>
      </div>
    </div>
  {/each}
</section>
