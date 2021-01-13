<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <h2 class="text-3xl text-center text-white">Testimonials</h2>

    <div class="flex flex-wrap">
      <div class="flex flex-col w-full mb-10">
        <div class="flex justify-start">
          <Icon data="{faQuoteLeft}" class="text-white" scale="{1.5}" />
        </div>
        <div class="px-4 mx-4 italic text-center text-white">
          Markus is an excellent developer and certainly produced great work for
          us. He’s also a great team player: reliable, communicating well and
          proposing solutions. As project complexity increases, this second part
          can be a real life saver.
        </div>
        <div class="flex justify-end">
          <Icon data="{faQuoteRight}" class="text-white" scale="{1.5}" />
        </div>
        <h3 class="mt-5 text-center text-white">
          Jeremy, Founder of
          <ExternalLink
            href="https://slowlettuce.io/"
            customClass="link-inherit underline"
          >slowlettuce.io</ExternalLink
          >
        </h3>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex justify-start">
          <Icon data="{faQuoteLeft}" class="text-white" scale="{1.5}" />
        </div>
        <div class="px-4 mx-4 italic text-center text-white">
          I’ve worked with many engineers over the past ten years, and Markus is
          a beast. He’s self-directed, thoughtful, and fast. He has excellent
          written and verbal communication skills and is candid and direct when
          his opinion is asked. I reached out to him for some unorthodox app
          development based on his GitHub profile and what I feared would take
          weeks and thousands of dollars was complete in days and far beyond my
          expectations. My only hesitation in writing this review for him is
          that I want all his time for myself and have no doubt that he will be
          in high demand, given his skill set and personal qualities. Grab this
          guy quick because he’s about to be in limited supply.
        </div>
        <div class="flex justify-end">
          <Icon data="{faQuoteRight}" class="text-white" scale="{1.5}" />
        </div>
        <h3 class="mt-5 text-center text-white">
          Justice, Founder of
          <ExternalLink
            href="https://singularityhacker.com/"
            customClass="link-inherit underline"
          >singularityhacker.com</ExternalLink
          >
        </h3>
      </div>
    </div>
  </div>
</section>
