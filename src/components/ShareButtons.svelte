<script>
  import Fa from 'svelte-fa';
  import {
    faReddit,
    faPinterest,
    faTwitter,
    faFacebook,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
  import { stores } from '@sapper/app';
  import type { Post } from '../models/post';
  const { page } = stores();

  export let post: Post;

  const fullURL = `https://markushatvan.com${$page.path}`;
  const encodedURL = encodeURIComponent(fullURL);
  const encodedPostTitle = encodeURIComponent(post.title);
  const encodedPostExcerpt = encodeURIComponent(post.excerpt);
</script>

<a
  href="https://www.facebook.com/sharer/sharer.php?u={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="inline-flex text-teal-900 hover:text-teal-700"
  title="Share on Facebook"
>
  <Fa icon="{faFacebook}" class="mr-3" size="1.5x" />
</a>
<a
  href="https://www.linkedin.com/shareArticle?mini=true&url={encodedURL}&title={encodedPostTitle}&summary={encodedPostExcerpt}&source=LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
  class="inline-flex text-teal-900 hover:text-teal-700"
  title="Share on LinkedIn"
>
  <Fa icon="{faLinkedin}" class="mx-3" size="1.5x" />
</a>
<a
  href="https://twitter.com/intent/tweet?text={encodedPostTitle}&url={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="inline-flex text-teal-900 hover:text-teal-700"
  title="Share on Twitter"
>
  <Fa icon="{faTwitter}" class="mx-3" size="1.5x" />
</a>
<a
  href="https://www.reddit.com/submit?url={encodedURL}&title={encodedPostTitle}"
  target="_blank"
  rel="noopener noreferrer"
  class="inline-flex text-teal-900 hover:text-teal-700"
  title="Share on Reddit"
>
  <Fa icon="{faReddit}" class="mx-3" size="1.5x" />
</a>
<a
  href="https://www.linkedin.com/sharing/share-offsite/?url={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="inline-flex text-teal-900 hover:text-teal-700"
  title="Share on Pinterest"
>
  <Fa icon="{faPinterest}" class="mx-3" size="1.5x" />
</a>
