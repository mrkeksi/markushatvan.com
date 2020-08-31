<style global lang="postcss">
  body {
    font-family: 'Lato', sans-serif;
    padding-top: 58px;
    @apply relative leading-relaxed text-lg;
  }

  .mh a {
    @apply text-teal-700;
  }

  .mh a:hover {
    @apply underline text-teal-800;
  }

  .mh h1 {
    @apply text-3xl mb-3 mt-6 font-bold;
  }

  .mh h2 {
    @apply text-2xl mb-3 mt-6 font-bold;
  }

  .mh h3,
  .mh h4,
  .mh h5,
  .mh h6 {
    @apply text-xl mb-3 mt-6 font-semibold;
  }

  .mh p {
    @apply mb-4 text-gray-800;
  }

  .mh .blog code p {
    @apply mb-0;
    color: inherit;
  }

  .mh pre > p {
    @apply m-0;
  }

  .mh ol {
    @apply list-decimal text-gray-800 mb-4 ml-8;
  }

  .mh ul {
    @apply list-disc text-gray-800 mb-4 ml-8;
  }

  .mh ul ul {
    @apply mb-4 ml-8 text-gray-800 list-circle;
  }

  .mh blockquote {
    @apply p-2 bg-gray-100 mb-4 border-l-4 border-gray-400 italic;
  }

  .mh blockquote > p {
    @apply mb-0;
  }

  .mh pre[class*='language-'] {
    margin: 16px 0 32px 0 !important;
  }

  .mh td,
  .mh th {
    @apply mx-2 my-1 border border-gray-400;
  }

  .mh tr:nth-child(odd) {
    @apply bg-gray-100;
  }

  .mh table {
    @apply mb-6;
  }

  .mh hr {
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

  .mh figcaption {
    @apply text-gray-600 text-sm italic;
  }

  .mh p > code:not([class*='language-']),
  .mh h3 > code,
  .mh li > code,
  .mh figcaption > code {
    word-break: break-word;
    background-color: #f0f0f0;
    padding: 0.2em 0.4em;
    border-radius: 2px;
  }

  .nav-link {
    @apply block text-teal-700 mt-4 mr-4;
  }

  .nav-link:hover {
    @apply text-teal-800;
  }

  .footer-link {
    @apply block text-teal-200 mt-4 mr-4;
  }

  .footer-link:hover {
    @apply text-white;
  }

  .mh .link-inherit,
  .mh .link-inherit:hover {
    color: inherit !important;
  }

  .mh .mh-container {
    @apply px-3 py-12 mx-auto;
  }

  .mh .btn-primary {
    @apply px-5 py-3 text-sm font-semibold text-white bg-teal-700;
  }

  .mh .btn-primary:hover {
    @apply bg-teal-800 text-white no-underline;
  }

  .mh .card {
    @apply relative bg-white border rounded shadow-xl w-full;
  }

  .mh .topic-box {
    @apply text-center border-b-4 border-teal-700;
  }

  .mh .info-tag {
    @apply inline-flex items-center bg-gray-200 rounded py-1 my-1 text-sm font-semibold mr-2 px-3;
  }

  .mh .alert-grey {
    @apply p-4 text-gray-600 bg-gray-300 border-l-4 border-gray-500;
  }

  .mh .applause-gradient {
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

  /* 
    These styles are from Image.svelte of svelte-image
    Currently, they dont end up in the bundle, so I had to copy them here
    Related issue: https://github.com/matyunya/svelte-image/issues/67  
  */
  img.main,
  img.placeholder {
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    will-change: opacity;
  }

  .blur {
    filter: blur(10px);
    transition: opacity 0.4s ease, filter 0.5s ease;
  }

  .placeholder {
    opacity: 1;
    transition: opacity 0.5s ease;
    transition-delay: 0.7s;
  }

  .main {
    opacity: 0;
    transition: opacity 0.5s ease;
    transition-delay: 0.7s;
  }

  .loaded .placeholder {
    opacity: 0;
  }

  .loaded .main {
    opacity: 1;
  }
</style>
