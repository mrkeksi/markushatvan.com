<script>
  import { formatDate } from '../helpers/utils.js';
  import type { Post } from '../models/post';
  import slugify from 'slugify';

  export let post: Post;
</script>

<span class="text-teal-700">{formatDate(post.creationDate)}</span>
&middot;
<span class="text-teal-700">{post.readingTime}</span>
&middot;
<a rel="prefetch" href="/categories/{slugify(post.category)}">{post.category} </a>
