<template>
    <nuxt-link :to="`/articles/${article.slug}`">
      <img class="object-contain h-60"  :src="article.image || '/images/chem.jpg' " alt="">
        <div class="w-full h-auto p-10">
            <h1 class="font-extrabold">{{ article.title }}</h1>
            <p class="text-gray-500">{{ article.summary }} </p>
            <hr class="border_line"/>
        </div>
     </nuxt-link>
</template>

<script>
    export default {
       props: {
        article: {
        type: Object,
        default: null,
        },
       },
    }
</script>

<style scoped>

</style>