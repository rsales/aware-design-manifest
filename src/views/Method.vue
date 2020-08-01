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

      <section class="QuoteBlock QuoteBlock--NoImage">
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

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <h3 class="text-2xl mb-2">
                <img
                  alt="icon 6"
                  src="@/assets/images/icons/6.svg"
                  class="h-16"
                />
                6. Design tem compromisso com a ética
              </h3>
              <p>
                Com seu grande poder comunicador e transformador, o design deve
                se responsabilizar pela informação que potencializa. É
                imprescindível estar aliado às questões jurídicas quanto à
                proteção de dados gerais, direitos autorais e o compromisso com
                a verdade.
              </p>

              <h3 class="text-2xl mt-10 mb-2">
                <img
                  alt="icon 7"
                  src="@/assets/images/icons/7.svg"
                  class="h-16"
                />
                7. Design como integração entre áreas
              </h3>
              <p>
                O papel comunicador do design deve agir em prol de conectar
                pessoas e equipes, para garantir e incentivar o diálogo. A
                geração de equipes multidisciplinares é essencial para o
                desenvolvimento de projetos sólidos e fundamentados. Portanto, o
                design deve favorecer a troca de conhecimento e informações
                entre pessoas, dando voz à todos e integrando diferentes áreas.
              </p>
            </div>
          </div>
        </div>
      </section>
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
