<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faAngular, faJs, faNpm } from '@fortawesome/free-brands-svg-icons';

  import ExternalLink from './ExternalLink.svelte';
</script>

<section class="container mh-container">
  <h2 class="border-b-4 border-teal-700">Talks</h2>

  <small class="block mt-6 text-sm text-gray-600">
    <em>Upcoming</em>
  </small>

  <div class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300">
    <div class="inline-flex items-center w-full lg:w-2/4">
      <Icon data="{faNpm}" scale="{2}" class="mr-3 text-red-700" />
      <span>
        <b>Betcha didn't know that?!</b>
        &middot;
        <!-- <a
          href="https://www.youtube.com/watch?v=708el7zgGfY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video
        </a>
        &middot; -->
        <ExternalLink href="https://slides.com/chimpcmder/betcha-didn-t-know-that">
          Slides
        </ExternalLink>
      </span>
    </div>
    <div class="w-full my-3 lg:my-0 lg:w-2/4">
      <ExternalLink href="https://www.meetup.com/de-DE/viennajs/">Vienna.js</ExternalLink>
      &middot; Vienna, Austria
    </div>
  </div>

  <div class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300">
    <div class="inline-flex items-center w-full lg:w-2/4">
      <Icon data="{faJs}" scale="{2}" class="mr-3 text-yellow-500" />
      <span>
        <b>Best practices for open source contributions</b>
        &middot;
        <!-- <a
          href="https://www.youtube.com/watch?v=708el7zgGfY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video
        </a>
        &middot; -->
        <ExternalLink
          href="https://www.beautiful.ai/player/-MCCJc2bhl1Tizg5YvKe/Best-practices-for-open-source-contributions"
        >
          Slides
        </ExternalLink>
      </span>
    </div>
    <div class="w-full my-3 lg:my-0 lg:w-2/4">
      <ExternalLink href="https://www.meetup.com/de-DE/fccvienna/">
        freeCodeCamp Vienna
      </ExternalLink>
      &middot; Vienna, Austria
    </div>
  </div>

  <small class="block text-sm text-gray-600">
    <em>Past</em>
  </small>

  <div class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300">
    <div class="inline-flex items-center w-full lg:w-2/4">
      <Icon data="{faAngular}" scale="{2}" class="mr-3 text-red-700" />
      <span>
        <b>How to boost web dev efficiency</b>
        &middot;
        <ExternalLink href="https://www.youtube.com/watch?v=708el7zgGfY">Video</ExternalLink>
        &middot;
        <ExternalLink
          href="http://slides.com/chimpcmder/how-to-boost-your-web-development-efficiency"
        >
          Slides
        </ExternalLink>
      </span>
    </div>
    <div class="w-full my-3 lg:my-0 lg:w-2/4">
      <ExternalLink href="https://www.meetup.com/de-DE/Angular-Vienna/">
        Angular Vienna
      </ExternalLink>
      &middot; Vienna, Austria
    </div>
  </div>
</section>
