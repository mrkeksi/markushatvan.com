<script lang="ts">
  import Icon from 'svelte-awesome';
  import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
</script>

<a
  sveltekit:prefetch
  href="/blog"
  class="inline-flex no-underline rounded hover:underline"
>
  <Icon data="{faAngleLeft}" class="mt-1 mr-3" scale="{1.5}" />
  Back to Blog overview
</a>
