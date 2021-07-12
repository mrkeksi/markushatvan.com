<script>
  import Icon from 'svelte-awesome';
  import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';

  const testimonials = [
    {
      founder: 'Robin Wieruch',
      websiteRaw: 'robinwieruch.de',
      websiteLink: 'https://www.robinwieruch.de/',
      text: 'I highly recommend Markus as an exceptional developer — who is dedicated to producing quality code. He completes his tasks beyond expectations, adds thoughtful discussions to the greater picture of a project, and cares about the projects he works for. It would be a pleasure to work with him again in the future.',
    },
    {
      founder: 'Jeremy Lefèbre',
      websiteRaw: 'slowlettuce.io',
      websiteLink: 'https://slowlettuce.io/',
      text: 'Markus is an excellent developer and certainly produced great work for us. He’s also a great team player: reliable, communicating well, and proposing solutions. As project complexity increases, this second part can be a real lifesaver.',
    },
    {
      founder: 'Justice Conder',
      websiteRaw: 'singularityhacker.com',
      websiteLink: 'https://singularityhacker.com/',
      text: 'I’ve worked with many engineers over the past ten years, and Markus is a beast. He’s self-directed, thoughtful, and fast. He has excellent written and verbal communication skills and is candid and direct when his opinion is asked. I reached out to him for some unorthodox app development based on his GitHub profile and what I feared would take weeks and thousands of dollars was complete in days and far beyond my expectations. My only hesitation in writing this review for him is that I want all his time for myself and have no doubt that he will be in high demand, given his skill set and personal qualities. Grab this guy quickly because he’s about to be in limited supply.',
    },
    {
      founder: 'Matthias Eigner',
      websiteRaw: 'codecove.at',
      websiteLink: 'https://codecove.at/',
      text: 'On every project I worked on together with Markus, he was an essential part of the team. With his high demand for software quality and a smooth development workflow, he has always contributed significantly to the success of the projects. He is constantly learning and using the latest technologies and is very good at passing on these learnings to the team. He always keeps the bigger picture in mind and his calm but direct manner is conducive to strengthening the team spirit and creating a good working atmosphere.',
    },
  ];
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <h2 class="mb-8 text-3xl text-center text-white">Testimonials</h2>

    <div class="grid grid-cols-12 gap-6">
      {#each testimonials as testimonial}
        <div class="col-span-12 p-8 pb-6 card lg:col-span-6">
          <Icon data="{faQuoteLeft}" class="text-teal-700" scale="{1.5}" />
          <p class="my-2 text-base italic">
            {testimonial.text}
          </p>
          <h3>
            {testimonial.founder}, Founder of
            <ExternalLink
              href="{testimonial.websiteLink}"
              customClass="link-inherit underline"
              >{testimonial.websiteRaw}</ExternalLink
            >
          </h3>
        </div>
      {/each}
    </div>
  </div>
</section>
