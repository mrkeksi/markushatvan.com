<script>
  import type { Post } from '../models/post';

  export let previousArticle: Post;
  export let nextArticle: Post;
</script>

<div class="flex flex-wrap mb-10 -m-2">
  {#if previousArticle}
    <div class="w-full p-2 md:w-1/2">
      <div class="h-full p-5 card">
        <small class="block text-sm text-gray-600">
          <em>Previous article</em>
        </small>
        <h3 class="my-0">
          <a rel="prefetch" href="blog/{previousArticle.slug}" class="link-inherit">
            {previousArticle.title}
          </a>
        </h3>
      </div>
    </div>
  {/if}
  {#if nextArticle}
    <div class="w-full p-2 md:w-1/2">
      <div class="h-full p-5 card">
        <small class="block text-sm text-gray-600">
          <em>Next article</em>
        </small>
        <h3 class="my-0">
          <a rel="prefetch" href="blog/{nextArticle.slug}" class="link-inherit">
            {nextArticle.title}
          </a>
        </h3>
      </div>
    </div>
  {/if}
</div>
