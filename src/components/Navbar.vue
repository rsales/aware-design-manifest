<template>
  <div class="navbar">
    <nav class="flex items-center justify-between flex-wrap bg-white p-5">
      <div class="flex items-center flex-shrink-0 mr-6">
        <router-link to="/">
          <img
            alt="connectiong teams"
            src="@/assets/images/brand/ct_brand_text.svg"
            class="h-8"
          />
        </router-link>
      </div>
      <h6
        class="title-navbar opacity-0 hidden sm:hidden md:block lg:block xl:block"
      >
        – {{ title }} –
      </h6>
      <!-- <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> -->
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    let element = document.querySelector("h6.title-navbar");
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
