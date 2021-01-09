<template>
   <section class="grid grid-cols-4 gap-6 justify-items-center mb-24">
      <!-- article card -->
        <article v-for="(article, i) in articles" :key="i" class="shadow-lg h-auto w-96 bg-white">
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