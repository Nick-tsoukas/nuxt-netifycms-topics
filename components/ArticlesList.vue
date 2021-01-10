<template>
   <section class="grid grid-cols-4 gap-6 justify-items-center mr-8 ml-8 mb-24">
      <!-- article card -->
        <article style="max-width: 22rem" v-for="(article, i) in articles" :key="i" class="shadow-lg h-auto bg-white hover_card">
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