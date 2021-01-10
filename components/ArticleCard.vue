<template>

  <nuxt-link :to="`/articles/${article.slug}`">
  <div>
        <div class="h-full">
          <img class="lg:h-48 md:h-36 w-full object-fill object-center" :src="article.image || '/images/chem.jpg' " alt="blog">
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-black mb-3">{{ article.title }}</h1>
            <div style="background-color: #02ff9d !important; " class="h-2 w-4 mb-2"></div>
            <p class="leading-relaxed mb-3">{{ article.summary }}</p>
            <div class="flex items-center flex-wrap">
              <a class="text-black inline-flex items-center md:mb-2 lg:mb-0">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="#02ff9d" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg class="w-4 h-4 mr-1" stroke="#02ff9d" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="#02ff9d" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
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

<!-- <div class="flex flex-col hover:transition duration-200 ease-in-out transform hover:-translate-y-2">
      <div>
        <img class="flex-grow-1 h-60 w-full"  :src="article.image || '/images/chem.jpg' " alt="">
      </div>
        <div class=" flex-grow-1 w-full h-auto pt-4 pr-8 pl-8 pb-8">
            <h1 class="font-extrabold mb-2">{{ article.title }}</h1>
            <p class="text-black">{{ article.summary }} </p>
            <hr class="border_line"/>
        </div>
        </div> -->
