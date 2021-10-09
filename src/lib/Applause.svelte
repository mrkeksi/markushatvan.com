<script lang="ts">
  import Icon from 'svelte-awesome';
  import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';

  const testimonials = [
    {
      founder: 'Justice Conder',
      websiteRaw: 'Singularity Hacker',
      websiteLink: 'https://singularityhacker.com/',
      text: 'I’ve worked with many engineers over the past ten years, and Markus is a beast. He’s self-directed, thoughtful, and fast. He has excellent written and verbal communication skills and is candid and direct when his opinion is asked. I reached out to him for some unorthodox app development based on his GitHub profile and what I feared would take weeks and thousands of dollars was complete in days and far beyond my expectations. My only hesitation in writing this review for him is that I want all his time for myself and have no doubt that he will be in high demand, given his skill set and personal qualities. Grab this guy quickly because he’s about to be in limited supply.',
    },
    {
      founder: 'Vijay Aravamudhan',
      role: 'Maintainer',
      websiteRaw: 'Ferdi',
      websiteLink: 'https://getferdi.com',
      text: 'Markus came to the Ferdi repo, and started reporting bugs, and some fixes. Within a short period of time (if I remember, it was literally 3-4 weeks), he had a good grasp of the complex, legacy app - and was suggesting discussions, raising PRs, commenting on bugs reported by others, etc. - all the responsibilities that a maintainer on any OSS project does. His genuine passion to fix bugs, suggest and implement enhancements (be they small or big) - is astounding to me. Over the past few months, he has been a bedrock and a great co-collaborator on this journey, and I have high hopes for the future of Ferdi with him being so active!',
    },
    {
      founder: 'Matthias Eigner',
      websiteRaw: 'CodeCove',
      websiteLink: 'https://codecove.at/',
      text: 'On every project I worked on together with Markus, he was an essential part of the team. With his high demand for software quality and a smooth development workflow, he has always contributed significantly to the success of the projects. He is constantly learning and using the latest technologies and is very good at passing on these learnings to the team. He always keeps the bigger picture in mind and his calm but direct manner is conducive to strengthening the team spirit and creating a good working atmosphere.',
    },
    {
      founder: 'Dmytro Mezhenskyi',
      role: 'Author',
      websiteRaw: 'Decoded Frontend',
      websiteLink: 'https://youtube.com/DecodedFrontend',
      text: 'I am glad that twice I had a chance to work with Markus in one team! I can highlight his aspiration of clean code, maintainability, and automation. Markus is very open to new technologies and tries to understand how things are working in-depth rather than just cover basics. Aside from his impressive tech skills, he is also a nice person to chatting with, and he can always recommend a great craft beer!',
    },
    {
      founder: 'Robin Wieruch',
      websiteRaw: 'Robin Wieruch',
      websiteLink: 'https://www.robinwieruch.de/',
      text: 'I highly recommend Markus as an exceptional developer — who is dedicated to producing quality code. He completes his tasks beyond expectations, adds thoughtful discussions to the greater picture of a project, and cares about the projects he works for. It would be a pleasure to work with him again in the future.',
    },
    {
      founder: 'Jeremy Lefèbre',
      websiteRaw: 'SlowLettuce',
      websiteLink: 'https://slowlettuce.io/',
      text: 'Markus is an excellent developer and certainly produced great work for us. He’s also a great team player: reliable, communicating well, and proposing solutions. As project complexity increases, this second part can be a real lifesaver.',
    },
    {
      founder: 'Francois Lamotte',
      websiteRaw: 'Pageverify',
      websiteLink: 'https://www.pageverify.me',
      text: 'Markus Hatvan is a great front-end Svelte developer. He did an excellent job for our company, and he was also a valuable team member. He communicated well, was reliable, and could be counted on to be available when needed. I would recommend him to anyone in need of a front-end developer!',
    },
  ];
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <h2 class="mb-8 text-3xl text-center text-white">Testimonials</h2>

    <div class="grid grid-cols-2 gap-6">
      {#each testimonials as testimonial}
        <div
          class="col-span-2 p-8 pb-6 card lg:col-span-1 flex flex-col justify-between"
        >
          <div>
            <Icon data="{faQuoteLeft}" class="text-teal-700" scale="{1.5}" />
            <p class="mt-2 text-base italic">
              {testimonial.text}
            </p>
          </div>
          <div>
            <h3>
              {testimonial.founder}, {testimonial?.role || 'Founder'} of
              <ExternalLink
                href="{testimonial.websiteLink}"
                customClass="link-inherit underline"
                >{testimonial.websiteRaw}</ExternalLink
              >
            </h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
