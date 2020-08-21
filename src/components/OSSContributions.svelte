<script>
  import GithubButton from './GithubButton.svelte';

  // Unfortunately have to add the repos manually, since I would be running into rate limiting of Github API all the time
  const repos = [
    {
      name: 'React Boilerplate',
      description:
        '🔥 A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.',
      full_name: 'react-boilerplate/react-boilerplate',
      avatar_url: 'https://avatars2.githubusercontent.com/u/25323389?v=4',
      stargazers_count: 25586,
    },
    {
      name: 'Mailspring',
      description:
        '💌 A beautiful, fast and maintained fork of @nylas Mail by one of the original authors.',
      full_name: 'Foundry376/Mailspring',
      avatar_url: 'https://avatars1.githubusercontent.com/u/1065759?v=4',
      stargazers_count: 8553,
    },
    {
      name: 'WebTemplateStudio',
      description:
        'Microsoft Web Template Studio quickly builds web applications using a wizard-based UI to turn your needs into a foundation of best patterns and practices',
      full_name: 'microsoft/WebTemplateStudio',
      avatar_url: 'https://avatars2.githubusercontent.com/u/6154722?v=4',
      stargazers_count: 1806,
    },
    {
      name: 'Semantic-UI-React',
      description: 'The official Semantic-UI-React integration',
      full_name: 'Semantic-Org/Semantic-UI-React',
      avatar_url: 'https://avatars0.githubusercontent.com/u/5796209?v=4',
      stargazers_count: 11326,
    },
    {
      name: 'eslint-plugin-unicorn',
      description: 'Various awesome ESLint rules',
      full_name: 'sindresorhus/eslint-plugin-unicorn',
      avatar_url: 'https://avatars1.githubusercontent.com/u/170270?v=4',
      stargazers_count: 1169,
    },
  ];
</script>

<section class="container mh-container">
  <h2 class="border-b-4 border-teal-700">Open Source Contributions</h2>
  {#each repos as repo}
    <div class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300">
      <div class="inline-flex items-center w-full lg:w-1/4">
        <img
          src="{repo.avatar_url}"
          alt="{repo.name} Logo"
          class="w-12 h-auto bg-cover rounded-t"
          loading="lazy"
        />
        <p class="mb-0 ml-3 font-bold break-all">{repo.name}</p>
      </div>
      <div class="w-full my-3 lg:w-2/4">
        <p class="my-0">{repo.description}</p>
      </div>
      <div class="w-full lg:text-right lg:w-1/4">
        <div class="inline-flex">
          <GithubButton urlSlug="{repo.full_name}" count="{repo.stargazers_count}" />
        </div>
      </div>
    </div>
  {/each}
</section>
