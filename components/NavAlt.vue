<template>
  <div class="relative bg-white mb-10">
    <div class="relative z-20 shadow">
      <div
        class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
        <div>
          <a href="#" class="flex">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="../static/images/icons/manual-book.svg" alt="">
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav class="flex space-x-10">
            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </a>
            </div>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Theology
            </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Biology
            </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Chemistry
            </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Physics
            </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Philosophy
            </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Mythology
            </a>
            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
             <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              All Articles
            </a>
            </div>
          </nav>
          <div class="flex items-center md:ml-12">
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a href="#"
              style="background-color: #02ff9d;"
              class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:bg-indigo-700">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>

</style>
