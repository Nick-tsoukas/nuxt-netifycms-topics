<template>
<!-- build 404 page  -->

  <div>

<div class="gradient text-white min-h-screen flex items-center">
  <div class="container mx-auto p-4 flex flex-wrap items-center">
    <div class="w-full md:w-5/12 text-center p-4">
      <img src="https://themichailov.com/img/not-found.svg" alt="Not Found" />
    </div>
    <div class="w-full md:w-7/12 text-center md:text-left p-4">
      <div class="text-6xl font-medium">{{ error.statusCode || 'Oops ...' }}</div>
      <div v-if="error.statusCode === 404" class="text-xl md:text-3xl font-medium mb-4">
        {{ pageNotFound }}
      </div>
      <div  v-else class="text-xl md:text-3xl font-medium mb-4">
        {{ otherError }}
      </div>
      <div class="text-lg mb-8">
        You may have mistyped the address or the page may have moved.
      </div>
         <NuxtLink to="/"> Home page </NuxtLink>
    </div>
  </div>
</div>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Oops. This page has gone missing.',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

 <style>
  .gradient {
    background-image: linear-gradient(135deg, #684ca0 35%, #1c4ca0 100%);
  }
</style>