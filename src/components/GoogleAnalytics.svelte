<script>
  // @ts-nocheck
  import { stores } from '@sapper/app';
  const { page } = stores();
  import { onMount } from 'svelte';

  function gtag() {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(arguments);
    }
  }

  const gaProperty = 'UA-81701707-3';

  const gtagHit = () =>
    gtag('config', gaProperty, {
      page_path: $page.path,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });

  onMount(() => {
    const ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = `https://www.googletagmanager.com/gtag/js?id=${gaProperty}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());

    // Collect initial page hit after page load
    gtagHit();
  });

  $: {
    if (typeof gtag !== 'undefined') {
      // Collect page hits on navigate to other pages
      gtagHit();
    }
  }
</script>
