<template>
  <div class="body_color">
    <!-- Topics -->
    <HomeCategories />

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
