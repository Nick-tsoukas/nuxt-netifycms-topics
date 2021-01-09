<template>
  <div class="body_color">
    <!-- Topics -->
    <HomeCategories />

    <!-- cards of featured articles wrapper -->
    <ArticlesList :articles="featuredArticles" />
</div>
</template>

<script>
// try to build a filter function to test
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
      const featuredArticles = await $content('articles')
        .where({ featured: true })
        .limit(3)
        .only(['title', 'featured', 'slug', 'summary', 'image'])
        .fetch()
        .catch(() => {
            error({ statusCode: 404, message: 'Page not found' })
        });
      return {
       featuredArticles
      }
    } 
  }
</script>
