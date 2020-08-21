<style lang="postcss">
  :global(body) {
    font-family: 'Lato', sans-serif;
    padding-top: 58px;
    @apply relative leading-relaxed text-lg;
  }

  :global(.mh a) {
    @apply text-teal-600;
  }

  :global(.mh a:hover) {
    @apply underline text-teal-700;
  }

  :global(.mh h1) {
    @apply text-3xl pb-3 pt-6 font-bold;
  }

  :global(.mh h2) {
    @apply text-2xl pb-3 pt-6 font-bold;
  }

  :global(.mh h3, .mh h4, .mh h5, .mh h6) {
    @apply text-xl pb-3 pt-6 font-semibold;
  }

  :global(.mh p) {
    @apply mb-4 text-gray-800;
  }

  :global(.mh .blog code p) {
    @apply mb-0;
    color: inherit;
  }

  :global(.mh pre > p) {
    @apply m-0;
  }

  :global(.mh ol) {
    @apply list-decimal text-gray-800 mb-4 ml-8;
  }

  :global(.mh ul) {
    @apply list-disc text-gray-800 mb-4 ml-8;
  }

  :global(.mh ul ul) {
    @apply mb-4 ml-8 text-gray-800 list-circle;
  }

  :global(.mh blockquote) {
    @apply p-2 bg-gray-100 mb-4 border-l-4 border-gray-400 italic;
  }

  :global(.mh blockquote > p) {
    @apply mb-0;
  }

  :global(.mh pre[class*='language-']) {
    margin: 16px 0 32px 0 !important;
  }

  :global(.mh td, .mh th) {
    @apply px-2 py-1 border border-gray-400;
  }

  :global(.mh tr:nth-child(odd)) {
    @apply bg-gray-100;
  }

  :global(.mh table) {
    @apply mb-6;
  }

  :global(.mh hr) {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
  }

  :global(.mh figcaption) {
    @apply text-gray-600 text-sm;
  }

  :global(.mh p > code:not([class*='language-']), .mh li > code, .mh figcaption > code) {
    font-size: calc(1em - 2px);
    color: #555;
    page-break-inside: avoid;
    background-color: #f0f0f0;
    padding: 0.2em 0.4em;
    border-radius: 2px;
  }

  :global(.nav-link) {
    @apply block text-teal-600 mt-4 mr-4;
  }

  :global(.nav-link:hover) {
    @apply text-teal-800;
  }

  :global(.footer-link) {
    @apply block text-teal-200 mt-4 mr-4;
  }

  :global(.footer-link:hover) {
    @apply text-white;
  }

  :global(.mh .link-inherit, .mh .link-inherit:hover) {
    color: inherit !important;
  }

  :global(.mh .mh-container) {
    @apply px-3 py-12 mx-auto;
  }

  :global(.mh .btn-primary) {
    @apply px-5 py-3 text-sm font-semibold text-white bg-teal-500;
  }

  :global(.mh .btn-primary:hover) {
    @apply bg-teal-600 text-white no-underline;
  }

  :global(.mh .card) {
    @apply relative bg-white border rounded shadow-xl w-full;
  }

  :global(.mh .topic-box) {
    @apply text-center border-b-4 border-teal-700;
  }

  :global(.mh .info-tag) {
    @apply inline-flex items-center bg-gray-200 text-teal-600 rounded py-1 my-1 text-sm font-semibold mr-2 px-3;
  }

  :global(.mh .alert-grey) {
    @apply p-4 text-gray-600 bg-gray-300 border-l-4 border-gray-500;
  }

  :global(.mh .applause-gradient) {
    background-image: linear-gradient(
        306deg,
        rgba(54, 54, 54, 0.05) 0%,
        rgba(54, 54, 54, 0.05) 33.333%,
        rgba(85, 85, 85, 0.05) 33.333%,
        rgba(85, 85, 85, 0.05) 66.666%,
        rgba(255, 255, 255, 0.05) 66.666%,
        rgba(255, 255, 255, 0.05) 99.999%
      ),
      linear-gradient(
        353deg,
        rgba(81, 81, 81, 0.05) 0%,
        rgba(81, 81, 81, 0.05) 33.333%,
        rgba(238, 238, 238, 0.05) 33.333%,
        rgba(238, 238, 238, 0.05) 66.666%,
        rgba(32, 32, 32, 0.05) 66.666%,
        rgba(32, 32, 32, 0.05) 99.999%
      ),
      linear-gradient(
        140deg,
        rgba(192, 192, 192, 0.05) 0%,
        rgba(192, 192, 192, 0.05) 33.333%,
        rgba(109, 109, 109, 0.05) 33.333%,
        rgba(109, 109, 109, 0.05) 66.666%,
        rgba(30, 30, 30, 0.05) 66.666%,
        rgba(30, 30, 30, 0.05) 99.999%
      ),
      linear-gradient(
        189deg,
        rgba(77, 77, 77, 0.05) 0%,
        rgba(77, 77, 77, 0.05) 33.333%,
        rgba(55, 55, 55, 0.05) 33.333%,
        rgba(55, 55, 55, 0.05) 66.666%,
        rgba(145, 145, 145, 0.05) 66.666%,
        rgba(145, 145, 145, 0.05) 99.999%
      ),
      linear-gradient(90deg, rgb(9, 201, 186), rgb(18, 131, 221));
  }
</style>
