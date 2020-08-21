<script>
  import { formatDate, convertToSlug } from '../helpers/utils.js';
  import readingTime from 'reading-time';
  import type { Post } from '../models/post';

  export let post: Post;
</script>

<span class="text-teal-600">{formatDate(post.creationDate)}</span>
&middot;
<span class="text-teal-600">{readingTime(post.html).text}</span>
&middot;
<a rel="prefetch" href="/categories/{convertToSlug(post.category)}">{post.category}</a>
