<script>
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';

  import Image from 'svelte-image';
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <div
      class="flex flex-col-reverse flex-wrap items-center justify-between px-12 py-8 bg-white
      rounded shadow-xl md:flex-row"
    >
      <div class="w-full md:w-2/3 md:pr-10">
        <h1>Hey there, I'm Markus.</h1>
        <p>
          I am a web developer based in Vienna, Austria. Welcome to my personal website, get ready
          for some great tips on programming, biohacking, and life in general. Enjoy!
        </p>

        <a
          href="https://github.com/mhatvan"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex mt-3"
        >
          Check me out on Github here
          <Fa icon="{faGithub}" size="1.5x" class="hidden ml-3 sm:block" />
        </a>
      </div>
      <div class="w-full mx-auto sm:w-1/2 md:w-1/3" style="max-width: 250px">
        <Image
          src="markus_hatvan-800x800.jpeg"
          alt="Markus Hatvan"
          placeholderClass="rounded-full"
          class="rounded-full"
        />
      </div>
    </div>
  </div>
</section>
