<script>
  import slugify from 'slugify';

  export let tags: string[];
</script>

<div class="mt-3 text-sm">
  {#each tags as tag}<a rel="prefetch" class="info-tag" href="/tags/{slugify(tag)}">{tag}</a>{/each}
</div>
