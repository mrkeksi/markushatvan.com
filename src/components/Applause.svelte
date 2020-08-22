<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="applause-gradient">
  <div class="container mh-container">

    <h2 class="text-center text-white">Testimonials</h2>

    <div class="flex flex-wrap -m-2">
      <div class="flex flex-col w-full p-2 md:w-1/2">
        <div class="lg:px-6 lg:py-4">
          <div class="flex justify-start">
            <Icon data="{faQuoteLeft}" class="text-white" scale="{1.5}" />
          </div>
          <q class="px-5 mx-4 text-center text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut laborum repudiandae magni
            mollitia porro aliquid possimus rerum fugit totam asperiores consectetur ab saepe
            impedit, iusto esse dolore odio dicta modi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor sit, quas nemo aspernatur sapiente cupiditate voluptas sunt
            voluptatum, ad itaque illum impedit natus molestias dolorem magnam, facilis ullam!
            Rerum, ea!
          </q>
          <div class="flex justify-end">
            <Icon data="{faQuoteRight}" class="text-white" scale="{1.5}" />
          </div>
        </div>
        <div>
          <p class="mt-5 text-center text-white">
            - Flora Fischbacher, best girlfirend in the world
          </p>
        </div>
      </div>
      <div class="flex flex-col w-full p-2 md:w-1/2">
        <div class="lg:px-6 lg:py-4">
          <div class="flex justify-start">
            <Icon data="{faQuoteLeft}" class="text-white" scale="{1.5}" />
          </div>
          <q class="px-5 mx-4 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit, quas nemo aspernatur
            sapiente cupiditate voluptas sunt voluptatum, ad itaque illum impedit natus molestias
            dolorem magnam, facilis ullam! Rerum, ea!
          </q>
          <div class="flex justify-end">
            <Icon data="{faQuoteRight}" class="text-white" scale="{1.5}" />
          </div>
        </div>
        <div>
          <p class="mt-5 text-center text-white">
            - Flora Fischbacher, best girlfirend in the world
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
