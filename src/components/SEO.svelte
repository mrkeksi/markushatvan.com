<script>
  import { stores } from '@sapper/app';
  import { onMount } from 'svelte';
  const { page } = stores();

  const fullURL = `https://markushatvan.com${$page.path}`;

  export let blogPostInfo: { title?: string; excerpt?: string; creationDate?: string } = {};

  const siteLogo = 'https://markushatvan.com/logo-192.png';

  const schemaOrgURL = 'http://schema.org';

  const fallbackTitle = 'Markus Hatvan - Full Stack Developer';
  const fallbackDescription =
    'Personal website and blog written from scratch with SapperJS and TailwindCSS.';

  const socialTitle = blogPostInfo.title || fallbackTitle;
  const socialDescription = blogPostInfo.excerpt || fallbackDescription;

  const authorJSONLD = {
    '@type': 'Person',
    name: 'Markus Hatvan',
    email: 'markus_hatvan@aon.at',
    address: 'Vienna, Austria',
  };

  let schemaOrgJSONLD: any[] = [
    {
      '@context': schemaOrgURL,
      '@type': 'WebSite',
      url: 'https://markushatvan.com',
      name: fallbackTitle,
      alternateName: fallbackTitle,
    },
  ];

  const detailSchemaOrgJSONLD = [
    {
      '@context': schemaOrgURL,
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': fullURL,
            name: blogPostInfo.title,
            // image,
          },
        },
      ],
    },
    {
      '@context': schemaOrgURL,
      '@type': 'BlogPosting',
      url: fullURL,
      name: blogPostInfo.title,
      alternateName: blogPostInfo.title,
      headline: blogPostInfo.title,
      // image: { '@type': 'ImageObject', url: image },
      author: authorJSONLD,
      publisher: {
        ...authorJSONLD,
        '@type': 'Organization',
        logo: {
          '@type': 'ImageObject',
          url: siteLogo,
        },
      },
      datePublished: blogPostInfo.creationDate,
      description: blogPostInfo.excerpt,
    },
  ];

  let isBlogDetailsPage = Object.keys(blogPostInfo).length > 0;

  const ldJson = `${JSON.stringify(
    isBlogDetailsPage ? [...schemaOrgJSONLD, ...detailSchemaOrgJSONLD] : schemaOrgJSONLD,
  )}`;

  onMount(() => {
    const ldJsonScript = document.getElementById('addedldJsonScript');

    // We want to avoid placing multiple application/ld+json files in the DOM, therefore replace text content,
    // or load script only on first mount of component
    if (ldJsonScript) {
      ldJsonScript.textContent = ldJson;
    } else {
      const script = document.createElement('script');
      script.setAttribute('id', 'addedldJsonScript');
      script.type = 'application/ld+json';
      script.text = ldJson;
      document.head.appendChild(script);
    }
  });
</script>

<svelte:head>
  <meta name="image" content="{siteLogo}" />

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="{socialTitle}" />
  <meta property="og:description" content="{socialDescription}" />
  <meta property="og:url" content="{fullURL}" />
  <meta property="og:image" content="{siteLogo}" />

  {#if isBlogDetailsPage}
    <meta property="og:type" content="article" />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:title" content="{socialTitle}" />
  <meta property="twitter:description" content="{socialDescription}" />
  <meta property="twitter:url" content="{fullURL}" />
  <meta property="twitter:image" content="{siteLogo}" />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>
