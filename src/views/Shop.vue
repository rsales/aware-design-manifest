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

    <main class="mt-20 mb-8">
      <div class="container mx-auto px-6">
        <div class="md:flex md:items-center">
          <div class="w-full h-64 md:w-1/2 lg:h-96">
            <img
              class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src="@/assets/images/mockups/mockup-2.jpg"
              alt="Method CT"
            />
          </div>
          <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 class="text-gray-700 uppercase text-lg">
              Connecting Teams MethodKit
            </h3>
            <span class="text-gray-500 mt-3">$125</span>
            <hr class="my-3" />
            <div class="mt-2">
              <label class="text-gray-700 text-sm" for="count">Count:</label>
              <div class="flex items-center mt-1">
                <button
                  class="text-gray-500 focus:outline-none focus:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <span class="text-gray-700 text-lg mx-2">02</span>
                <button
                  class="text-gray-500 focus:outline-none focus:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <button
                class="px-8 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-black focus:outline-none focus:bg-indigo-500"
              >
                Order Now
              </button>
              <button
                class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  class="h-5 w-5"
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
          </div>
        </div>
      </div>
    </main>

    <section class="container mx-auto mt-24 px-16">
      <h3 class="text-3xl text-center">
        Comentários de quem já faz parte...
      </h3>
      <div
        class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md mx-auto mb-10"
      >
        <div class="flex justify-between items-center">
          <span class="font-light text-gray-600">mar 10, 2019</span>
          <a
            class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href="#"
            >Design</a
          >
        </div>
        <div class="mt-2">
          <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#"
            >Accessibility tools for designers and developers</a
          >
          <p class="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
            ratione libero!
          </p>
        </div>
        <div class="flex justify-between items-center mt-4">
          <a class="text-blue-600 hover:underline" href="#">Read more</a>
          <div>
            <a class="flex items-center" href="#">
              <img
                class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                alt="avatar"
              />
              <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
            </a>
          </div>
        </div>
      </div>
      <div
        class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md mx-auto mb-10"
      >
        <div class="flex justify-between items-center">
          <span class="font-light text-gray-600">mar 10, 2019</span>
          <a
            class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href="#"
            >Design</a
          >
        </div>
        <div class="mt-2">
          <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#"
            >Accessibility tools for designers and developers</a
          >
          <p class="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
            ratione libero!
          </p>
        </div>
        <div class="flex justify-between items-center mt-4">
          <a class="text-blue-600 hover:underline" href="#">Read more</a>
          <div>
            <a class="flex items-center" href="#">
              <img
                class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                alt="avatar"
              />
              <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
            </a>
          </div>
        </div>
      </div>
      <div
        class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md mx-auto mb-10"
      >
        <div class="flex justify-between items-center">
          <span class="font-light text-gray-600">mar 10, 2019</span>
          <a
            class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href="#"
            >Design</a
          >
        </div>
        <div class="mt-2">
          <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#"
            >Accessibility tools for designers and developers</a
          >
          <p class="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
            ratione libero!
          </p>
        </div>
        <div class="flex justify-between items-center mt-4">
          <a class="text-blue-600 hover:underline" href="#">Read more</a>
          <div>
            <a class="flex items-center" href="#">
              <img
                class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                alt="avatar"
              />
              <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="pagination mt-20 mb-6 px-0 sm:px-2">
      <div class="grid grid-cols-12 gap-2">
        <div
          class="col-span-12 bg-gray-200 hover:bg-gray-300 h-20 flex items-center justify-center"
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
