<template>
  <div class="manifest">
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
        <div class="container mx-auto px-0 sm:px-0 md:px-10 lg:px-10 xl:px-10">
          <img
            alt="illustra 1"
            src="@/assets/images/illustrations/pilares.svg"
            class="w-full"
          />
        </div>
      </section>

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <h3 class="text-2xl mb-2">
                <img
                  alt="icon 1"
                  src="@/assets/images/icons/1.svg"
                  class="h-16"
                />
                1. Educação acima de imposição.
              </h3>
              <p>
                O design sofre inúmeros preconceitos, seja no âmbito
                profissional, ou no âmbito social. Aqueles que não conhecem
                verdadeiramente o que é o design, podem conceber ideias e
                convicções errôneas a respeito de tal área. Deste modo, o design
                deve assumir seu papel educador, não somente sobre os demais
                desafios que enfrenta. Mas também para ensinar à sociedade, seja
                essa vinculada diretamente ao design (cientes e demais
                profissionais) ou não (aqueles que consomem design sem ter
                conhecimento deste fato) de modo gradual, para que todos
                compreendam a importância e valor do design.
              </p>

              <h3 class="text-2xl mt-10 mb-2">
                <img
                  alt="icon 2"
                  src="@/assets/images/icons/2.svg"
                  class="h-20"
                />
                2. Design sempre disposto à mudanças
              </h3>
              <p>
                Estando presente em inovações e transformações, o design deve
                estar sempre apto a modificar-se, ainda que não atue diretamente
                em áreas correlatas a esse tema. Deve manter-se continuamente
                vigilante quanto às tendências, garantindo que em todos os
                projetos e serviços aos quais for aplicado esteja presente
                garantindo o desenvolvimento conectado ao que é realmente
                necessário no momento vigente.
              </p>

              <h3 class="text-2xl mt-10 mb-2">
                <img
                  alt="icon 3"
                  src="@/assets/images/icons/3.svg"
                  class="h-16"
                />
                3. Design feito para pessoas.
              </h3>
              <p>
                Seja direta ou indiretamente, o design está relacionado e
                conectado às pessoas. Assim, o design deve assumir essa
                característica e, ainda que se trate sobre produtos e/ou
                sistemas digitais, sempre que possível deve ser incentivado o
                contato entre pessoas, sejam elas parte da equipe de
                profissionais ou consumidores finais/clientes. O design
                desenvolvido deve ter real ciência do que é importante, evitando
                assim a produção de serviços/produtos desalinhados à realidade e
                necessidade das pessoas impactadas.
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
            src="@/assets/images/illustrations/iso-illustration.svg"
            class="w-full"
          />
        </div>
      </section>

      <section class="TextBlock TextBlock--wide">
        <div class="Grid">
          <div class="TextBlock-Content">
            <div class="Text TextStyles">
              <h3 class="text-2xl mb-2">
                <img
                  alt="icon 4"
                  src="@/assets/images/icons/4.svg"
                  class="h-20"
                  style="margin-left: -18px;"
                />
                4. Design tem responsabilidade ambiental
              </h3>
              <p>
                Estando integrado ao processo de criação dos mais diversos
                produtos e tecnologias, o design deve evoluir aliado ao seu
                comprometimento com o meio em que vive. Assim, a
                responsabilidade se torna primordial.
              </p>

              <h3 class="text-2xl mt-10 mb-2">
                <img
                  alt="icon 5"
                  src="@/assets/images/icons/5.svg"
                  class="h-16"
                />
                5. Design tem responsabilidade social
              </h3>
              <p>
                Estando integrado ao processo de criação dos mais diversos
                produtos e tecnologias, o design deve evoluir aliado ao seu
                comprometimento com o meio em que vive. Assim, a
                responsabilidade se torna primordial.
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
            src="@/assets/images/design-wireframe.jpg"
            class="w-full"
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
          class="col-span-12 bg-gray-400 hover:bg-yellow-400 h-20 flex items-center justify-center"
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
        "Manifesto Design Ciente: contruindo um design que tenha compromisso com o futuro.",
      titleXs: "Manifesto Design Ciente"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/ideo";
</style>
