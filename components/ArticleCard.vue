<template>

    <nuxt-link :to="`/articles/${article.slug}`">
    <div class="hover:transition duration-200 ease-in-out transform hover:-translate-y-2">
      <img class="h-60 w-full"  :src="article.image || '/images/chem.jpg' " alt="">
        <div class="w-full h-auto pt-4 pr-8 pl-8 pb-8">
            <h1 class="font-extrabold">{{ article.title }}</h1>
            <p class="text-gray-500">{{ article.summary }} </p>
            <hr class="border_line"/>
            <p>hello world </p>
        </div>
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