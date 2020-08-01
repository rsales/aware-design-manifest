<template>
  <div class="navbar">
    <nav class="flex items-center justify-between flex-wrap bg-white p-5">
      <div class="flex items-center flex-shrink-0 mr-6">
        <router-link to="/">
          <img
            alt="connectiong teams"
            src="@/assets/images/brand/ct_brand_text.svg"
            class="h-6"
          />
        </router-link>
      </div>
      <div class="flex items-stretch">
        <h6 class="title-navbar opacity-0">
          <span class="hidden sm:hidden md:block lg:block xl:block">
            – {{ title }} –
          </span>
          <span class="block sm:block md:hidden lg:hidden xl:hidden">
            – {{ titleXs }} –
          </span>
        </h6>
        <button
          class="text-gray-600 border rounded-md py-1 px-2 ml-2 hover:bg-gray-200 focus:outline-none"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    titleXs: {
      type: String,
      required: true
    }
  },
  mounted() {
    let element = document.querySelector(".flex > h6.title-navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 389) {
        element.style.opacity = "1";
      } else if (window.scrollY < 389) {
        element.style.opacity = "0";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 9999;

  .title-navbar {
    transition: 0.4s;
  }
}
</style>
