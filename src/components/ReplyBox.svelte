<script>
  import { stores } from '@sapper/app';
  const { page } = stores();

  const fullURL = `https://markushatvan.com${$page.path}`;
  const encodedURL = encodeURIComponent(fullURL);

  const replyBoxSiteID = 'L9KB6JgBqG';

  const loadComments = () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://app.getreplybox.com/embed/sites/${replyBoxSiteID}?url=${encodedURL}&amp;identifier=demo&amp;title=${document.title}&amp;childId=replybox&amp;parentTitle=${document.title}&amp;parentUrl=${encodedURL}`;
    iframe.width = '100%';
    // iframe.scrolling = 'no';
    iframe.title = 'ReplyBox';

    // Hack until replybox loading works as expected
    iframe.setAttribute('style', 'height: 258px; overflow: scroll');

    const replyBoxDiv = document.getElementById('replybox');
    const loadCommentsDiv = document.getElementById('loadComments');
    loadCommentsDiv && replyBoxDiv?.replaceChild(iframe, loadCommentsDiv);
  };
</script>

<div id="replybox" class="text-center">
  <button class="btn-primary rounded" id="loadComments" on:click="{loadComments}">
    Load comments
  </button>
</div>
