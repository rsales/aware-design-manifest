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
      <h6 class="title-navbar opacity-0">
        <span class="hidden sm:hidden md:block lg:block xl:block">
          – {{ title }} –
        </span>
        <span class="block sm:block md:hidden lg:hidden xl:hidden">
          – {{ titleXs }} –
        </span>
      </h6>
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
