<template>
   <section class="grid grid-cols-3 gap-4 justify-items-center mb-24">
      <!-- article card -->
        <article v-for="(article, i) in articles" :key="i" class="shadow-lg h-96 w-96 bg-white">
          <ArticleCard :article="article" />
        </article>
    </section>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped>

</style>