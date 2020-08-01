<template>
  <div class="method">
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

    <div class="InlineContent">
      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <p>
                Diretamente influenciado pelo
                <router-link
                  class="no-underline hover:underline text-blue-500 text-lg"
                  :to="{ name: 'Manifest' }"
                >
                  Manifesto Design Ciente
                </router-link>
                o <strong class="italic">Connecting Teams Method</strong> leva
                em conta o papel design e visa auxiliar na comunicação e conexão
                entre pessoas de uma mesma equipe de trabalho. Buscando um
                contato mais próximo entre seus participante, mas estando ciente
                da diversidade de situações e condições dentro das equipas, o CT
                Method é uma híbrida, podendo ser aplicada virtual ou
                analogicamente. O kit analógico é composto por cartões e o
                digital por boards onde os participantes se conhecem, se
                descobrem e se conectam em busca de um resultado comum. Com base
                na jornada do herói, a equipe quebra primeiras impressões de
                forma descontraída e inicia a prática de um pensamento conjunto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="ImgBlock mt-5 mb-16">
        <div
          class="container w-full xl:w-9/12 mx-auto px-5 sm:px-10 md:px-48 lg:px-64 xl:px-64"
        >
          <img
            alt="illustra 1"
            src="@/assets/images/mockups/mockup-1.jpg"
            class="w-100"
          />
        </div>
      </section>

      <!-- Backup Sections -->

      <!-- <section class="ImageBlock ImageBlock--wide ImageBlockModifyer--center">
        <div class="ImageBlock-InlineItemsContainer ImageBlock--NoCaption">
          <div class="ImageBlock-ImageContainer">
            <div class="SmartImage SmartImage--inline ImageBlock-Image">
              <video
                autoplay=""
                loop=""
                muted=""
                playsinline=""
                class="SmartImage--inline-Image"
                src="https://churchill-next.imgix.net/images/posts/cd_3.gif?dpr=1&amp;fit=max&amp;fm=mp4&amp;w=500"
                poster="https://churchill-next.imgix.net/images/posts/cd_3.gif?dpr=1&amp;fit=max&amp;fm=jpg&amp;w=500"
              ></video>
            </div>
          </div>
        </div>
      </section> -->
      <!-- <section class="QuoteBlock QuoteBlock--NoImage">
        <div class="Grid">
          <div class="QuoteBlock-Content">
            <div class="QuoteBlock-Text">
              <span>
                <p>
                  <em>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer a convallis ex. Pellentesque convallis arcu id
                    consequat consequat. Fusce ornare semper egestas. Donec vel
                    ornare tellus. Cras feugiat tincidunt gravida. Aliquam.
                  </em>
                </p>
              </span>
            </div>
            <div class="QuoteBlock-Author">
              <span>
                <p>
                  Hernan Carranza, Chief Innovation Officer,
                  <a
                    href="https://www.ideo.com/case-study/launching-an-innovation-lab-to-benefit-peruvians"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Intercorp
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
      </section> -->
    </div>

    <div class="pagination mb-6 px-0 sm:px-2">
      <div class="grid grid-cols-12 gap-2">
        <div
          class="col-span-6 bg-gray-200 hover:bg-gray-300 h-20 flex items-center justify-center"
        >
          <router-link :to="{ name: 'Manifest' }">
            <p class="text-base md:text-3xl">
              ⬅️ Manifesto Design Ciente
            </p>
          </router-link>
        </div>
        <div
          class="col-span-6 bg-gray-400 hover:bg-yellow-400 h-20 flex items-center justify-center"
        >
          <router-link :to="{ name: 'Shop' }">
            <p class="text-base md:text-3xl">
              Comprar o MethodKit ➡️
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
  name: "Method",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      title:
        "Connecting Teams: Um guia para uma cultura mais próxima, inovadora e sustentável.",
      titleXs: "Connecting Teams"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/ideo";
</style>
