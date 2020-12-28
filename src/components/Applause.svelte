<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <h2 class="text-3xl text-center text-white">Testimonials</h2>

    <div class="flex flex-wrap -m-2">
      <div class="flex flex-col w-full p-2 mx-auto lg:w-3/4">
        <div class="lg:px-6 lg:py-4">
          <div class="flex justify-start">
            <Icon data="{faQuoteLeft}" class="text-white" scale="{1.5}" />
          </div>
          <div class="px-4 mx-4 italic text-center text-white">
            Markus is an excellent developer and certainly produced great work
            for us. He’s also a great team player: reliable, communicating well
            and proposing solutions. As project complexity increases, this
            second part can be a real life saver.
          </div>
          <div class="flex justify-end">
            <Icon data="{faQuoteRight}" class="text-white" scale="{1.5}" />
          </div>
        </div>
        <h3 class="mt-5 text-center text-white">
          Jeremy, Founder of
          <ExternalLink
            href="https://slowlettuce.io/"
            customClass="link-inherit underline"
          >
            SlowLettuce.io
          </ExternalLink>
        </h3>
      </div>
    </div>
  </div>
</section>
