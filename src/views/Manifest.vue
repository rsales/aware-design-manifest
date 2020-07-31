<template>
  <div class="manifest">
    <navbar :title="title" />
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
                O Manifesto Design Ciente visa a defesa e construção de uma
                prática de design que tenha compromisso com o futuro,
                alinhando-se ao mundo atual à medida que se posiciona aos novos
                desafios. A palavra ciente vem de encontro à carga de
                responsabilidade que o design carrega ao ser o agente
                transformador e inovador, usando de sua técnica e ciência de
                métodos e estudos para agir em prol daqueles que impacta. Design
                é criado por pessoas e para pessoas, então deve se
                responsabilizar pela segurança e qualidade de vida do ser humano
                e do meio em que este habita.
              </p>
              <p>
                Para tal, o manifesto sintetiza esse anseio e essa busca em 7
                pilares principais:
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="ImgBlock mt-5 mb-16">
        <div class="container mx-auto px-5 sm:px-10 md:px-48 lg:px-64 xl:px-48">
          <img
            alt="illustra 1"
            src="@/assets/images/illustrations/iso-illustration.svg"
            class="w-100"
          />
        </div>
      </section>

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                odio ligula, ornare non urna id, pellentesque elementum mauris.
                Vestibulum sapien ipsum, luctus quis semper commodo, pulvinar
                eget risus. Quisque vel neque libero. Duis posuere est luctus
                fringilla accumsan. Vestibulum varius bibendum ipsum, nec
                venenatis velit elementum nec. Nulla tempus diam quis elit
                tincidunt, quis convallis massa gravida. Morbi sagittis commodo
                sapien, vel pharetra elit luctus id. Phasellus convallis
                interdum orci a finibus. Proin maximus ante sit amet ultricies
                imperdiet. Quisque ac ipsum eros. Morbi pretium porttitor
                consequat. Sed tempus pellentesque velit non.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="ImgBlock mt-5 mb-16">
        <div class="container mx-auto px-5 sm:px-10 md:px-48 lg:px-64 xl:px-48">
          <img
            alt="illustra 1"
            src="@/assets/images/illustrations/iso-illustration.svg"
            class="w-100"
          />
        </div>
      </section>

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tincidunt dui luctus odio congue vestibulum.
                Vestibulum volutpat risus vitae tellus varius facilisis. Ut
                scelerisque est turpis, a euismod enim tincidunt in. Proin
                pharetra nulla vel mi hendrerit aliquet. Curabitur vitae ex
                congue, ullamcorper leo tristique, efficitur ligula. Vestibulum
                molestie ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="ImgBlock mt-5 mb-16">
        <div class="container mx-auto px-5 sm:px-10 md:px-48 lg:px-64 xl:px-48">
          <img
            alt="illustra 1"
            src="@/assets/images/illustrations/iso-illustration.svg"
            class="w-100"
          />
        </div>
      </section>

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur mollis purus diam, id sagittis leo malesuada sed. Sed
                quis vulputate justo. Maecenas ipsum nisl, lobortis eget sem.
              </p>
            </div>
          </div>
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
          class="col-span-12 bg-gray-400 hover:bg-gray-500 h-20 flex items-center justify-center"
        >
          <router-link :to="{ name: 'Method' }">
            <p class="text-base md:text-3xl">
              Método Connecting Teams ➡️
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
  name: "Manifest",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      title:
        "Manifesto Design Ciente: contruindo uma design que tenha compromisso com o futuro."
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/ideo";
</style>
