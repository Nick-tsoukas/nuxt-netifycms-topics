<template>
  <div class="body_color">
    <!-- Topics -->
    <section class="container mx-auto mb-24"  id="topics">
        <!-- categories -->
        <div class="flex justify-center">
            <div class="h-96 w-56 text-xl flex justify-center theology
            transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                <h2 class="heading_font text-white pt-5">THEOLOGY</h2>
            </div>
            <div class="h-96 w-56 text-xl flex justify-center biology
            transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                <h2 class="heading_font text-white pt-5">BIOLOGY</h2>
            </div>
            <div class="h-96 w-56 text-xl flex justify-center chemistry
            transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                <h2 class="heading_font text-white pt-5">CHEMISTRY</h2>
            </div>
            <div class="h-96 w-56 text-xl flex justify-center physics
            transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                <h2 class="heading_font text-white pt-5">PHYSICS</h2>
            </div>
            <div class="h-96 w-56 text-xl flex justify-center philosophy
            transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                <h2 class="heading_font text-white pt-5">PHILOSOPHY</h2>
            </div>
            <div class="h-96 w-56 text-xl flex justify-center saint_hood
            transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
                <h2 class="heading_font text-white pt-5">SAINT HOOD</h2>
            </div>
        </div>
    </section>

    <!-- cards of featured articles wrapper -->
    <section class="grid grid-cols-3 gap-4 justify-items-center mb-24">
      <!-- article cards -->
        <article v-for="(article, i) in featuredArticles" :key="i" class="shadow-lg h-96 w-96 bg-white">
          <nuxt-link :to="`/articles/${article.slug}`">
                <img class="object-contain h-60"  :src="article.image || '/images/chem.jpg' " alt="">
            <div class="w-full h-auto p-10">
                <h1 class="font-extrabold">{{ article.title }}</h1>
                <p class="text-gray-500">{{ article.summary }} </p>
                <hr class="border_line"/>
            </div>
          </nuxt-link>
        </article>
    </section>
    <!-- <pre>{{ featuredArticles }}</pre> -->
    
</div>
</template>

<script>
  export default {
    // data: () => {
    //   return {
    //     featuredArticles: [
    //       {
    //         image: '/images/chem.jpg',
    //         title: 'Hello',
    //         summary: 'Takes story telling to the next level ...',
    //         slug: '/articles/hello'
    //       },
    //       {
    //         image: '/images/chem.jpg',
    //         title: 'yo',
    //         summary: 'Takes story telling to the next level ...',
    //         slug: '/articles/yo'
    //       },
    //       {
    //         image: '/images/chem.jpg',
    //         title: 'Hello',
    //         summary: 'Takes story telling to the next level ...',
    //         slug: '/articles/hello'
    //       }
    //     ]
    //   }
    // },
     async asyncData ({$content, params, error}) {
      const articles = await $content('articles')
        .where({ featured: true })
        .only(['title', 'featured', 'slug', 'summary'])
        .fetch()
        .catch(() => {
            error({ statusCode: 404, message: 'Page not found' })
        });
      return {
       featuredArticles: articles
      }
    } 
  }
</script>
