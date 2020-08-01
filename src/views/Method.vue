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
      <section class="ImgBlock mt-2 mb-16">
        <div
          class="container w-full mx-auto px-5 sm:px-10 md:px-10 lg:px-40 xl:px-64"
        >
          <div class="bg-gray-300">
            <img alt="illustra 1" src="@/assets/images/time.png" class="w-full" />
          </div>
        </div>
      </section>

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

      <section class="ImgBlock mt-5 mb-16">
        <div
          class="container w-full xl:w-9/12 mx-auto px-5 sm:px-10 md:px-48 lg:px-64 xl:px-64"
        >
          <img
            alt="illustra 1"
            src="@/assets/images/mockups/mockup-1.jpg"
            class="w-full"
          />
        </div>
      </section>

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <h3 class="text-2xl mb-2">
                Passo 1. Imersão
              </h3>
              <p>
                Apresente o desafio a ser superado. O CT Method possui uma série
                de vídeos de imersão com desafios base, mas qualquer desafio
                pode ser utilizado pelo facilitador da ferramenta.
              </p>

              <h3 class="text-2xl mt-10 mb-2">
                Passo 2. Conhecendo o Time
              </h3>
              <p>
                É essencial em uma equipe que seus participantes saibam escutar
                e sejam comunicativos. Para que haja o equilíbrio dessas
                qualidades, as apresentações são feitas em dupla, mas quem
                preenche o perfil de cada um, é o colega que o ouviu.
              </p>

              <h3 class="text-2xl mb-2">
                Passo 3. Criando estratégias
              </h3>
              <p>
                Estratégias são fundamentais para se enfrentar um desafio.
                Vínculos de confiança são criados quando conhecemos as
                habilidades de todos e definimos em qual ponto cada um poderá
                ajudar o time.
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
            alt="image wireframe"
            src="@/assets/images/mockups/mockup-card-1.jpg"
            class="w-full"
          />
        </div>
      </section>

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <h3 class="text-2xl mt-10 mb-2">
                Passo 4. Aventura
              </h3>
              <p>
                O plano deve ser executado. Tenha uma visão geral de todas as
                habilidades da equipe e veja qual o melhor momento em que cada
                um poderá agir. A flexibilidade é o que manda: todos têm algo a
                acrescentar, ainda que o plano original precise ser alterado.
              </p>

              <h3 class="text-2xl mt-10 mb-2">
                Passo 5. Esperança
              </h3>
              <p>
                A batalha foi vencida com sucesso. Todos desempenharam seu papel
                para a conclusão da missão. Agora é o momento de relembrar o que
                passaram juntos! Analisem e compartilhem qual foi a melhor parte
                da jornada ou uma palavra que defina o fator decisivo para o
                sucesso da missão.
              </p>

              <h3 class="text-2xl mt-10 mb-2">
                Passo 6. Tudo acaba bem
              </h3>
              <p>
                Você passou de fase e agora pode assumir desafios maiores junto
                à sua equipe! Celebre esse momento compartilhando com seus
                amigos. Além da certificação, agora você tem seu selo do CT
                Method no Linkedin.
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
            alt="image wireframe"
            src="@/assets/images/sprint-design.jpg"
            class="w-full"
          />
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
