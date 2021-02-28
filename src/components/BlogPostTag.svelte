<script>
  import { convertToSlug } from '../helpers/utils';

  export let tags: string[];
</script>

<div class="mt-3 text-sm">
  {#each tags as tag}
    <a sapper:prefetch class="info-tag" href="/tags/{convertToSlug(tag)}"
      >{tag}</a
    >
  {/each}
</div>
