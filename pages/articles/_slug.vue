<template>
<!-- singular article -->
    <div>
        <h1>{{ article.title }}</h1>
        <nuxt-content :document="article" />

        <!-- <pre>
            {{ article }}
        </pre> -->
    </div>
</template>

<script>
    export default {
      async asyncData ({$content, params, error}) {
      const article = await $content('articles', params.slug)
        .fetch()
        .catch(() => {
            error({ statusCode: 404, message: 'Page not found' })
        });
      return {
        article
      }
    } 
    }
</script>
