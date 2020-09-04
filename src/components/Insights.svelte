<script>
  import { init, trackPages } from 'insights-js';
  import { onMount } from 'svelte';

  onMount(() => {
    init('veBhSQj_f0Id8ODC');
  });

  $: trackPages();
</script>
