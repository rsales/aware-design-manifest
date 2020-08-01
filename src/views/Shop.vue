<template>
  <div class="shop">
    <navbar :title="title" :title-xs="titleXs" />
    <div class="PageHeader PageHeader--tertiary">
      <div class="Grid">
        <div class="PageHeader-Content">
          <h1 class="PageHeader-Title">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>

    <div class="pagination mt-20 mb-6 px-0 sm:px-2">
      <div class="grid grid-cols-12 gap-2">
        <div
          class="col-span-12 bg-gray-400 hover:bg-gray-500 h-20 flex items-center justify-center"
        >
          <router-link :to="{ name: 'Method' }">
            <p class="text-base md:text-3xl">
              ⬅️ Método Connecting Teams
            </p>
          </router-link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "shop",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      title: "Adquira esse material para usar dentro da sua empresa",
      titleXs: "Compra"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/ideo";
</style>
