<template>
  <div id="home">
    <div class="slider" aria-labelledby="slider-heading__example-slider">
      <div class="brand__nav">
        <img
          alt="connectiong teams"
          src="@/assets/images/brand/ct_brand_text.svg"
        />
      </div>
      <ul
        class="slider__wrapper"
        :style="
          `transform: translateX(-${current * (100 / slideData.length)}%);`
        "
      >
        <li
          v-for="(item, index) in slideData"
          :key="`slide_key_${index}`"
          class="slide"
          :class="{
            'slide--current': index === current,
            'slide--next': index === current + 1,
            'slide--previous': index === current - 1
          }"
          @click="clickImage"
          style="--x:0; --y:0;"
        >
          <div class="slide__image-wrapper">
            <img
              class="slide__image"
              :alt="item.headline"
              v-lazy="item.img"
              style="opacity: 0.4;"
            />
          </div>

          <article class="slide__content">
            <h2 :class="`slide__headline text-${item.color}`">
              {{ item.headline }}
            </h2>
            <button>
              <router-link class="slide__action btn" :to="{ name: item.to }">
                {{ item.button }}
              </router-link>
            </button>
          </article>
        </li>
      </ul>
      <div class="slider__controls">
        <button
          class="btn btn--previous"
          title="Go to previous slide"
          @click="handlePreviousClick()"
        >
          <svg class="icon" viewBox="0 0 24 24">
            <path
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            ></path>
          </svg>
        </button>
        <button
          class="btn btn--next"
          title="Go to next slide"
          @click="handleNextClick()"
        >
          <svg class="icon" viewBox="0 0 24 24">
            <path
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      current: 0,
      slideData: [
        {
          index: 0,
          headline: "Manifesto Design Ciente",
          button: "Ver Manifesto",
          to: "Manifest",
          img: {
            src: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            error: require("@/assets/images/manifest-image.jpg"),
            loading: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=50"
          },
          color: "black"
        },
        {
          index: 1,
          headline: "Connecting Teams",
          button: "Ver Método",
          to: "Method",
          img: {
            src: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            error: require("@/assets/images/method-image.jpg"),
            loading: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=50"
          },
          color: "black"
        },
        {
          index: 2,
          headline: "Trazer para minha Empresa",
          button: "🛒",
          to: "Shop",
          img: {
            src: "https://images.pexels.com/photos/4668350/pexels-photo-4668350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            error: require("@/assets/images/shop-image.jpg"),
            loading: "https://images.pexels.com/photos/4668350/pexels-photo-4668350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=50"
          },
          color: "black"
        }
      ]
    };
  },
  methods: {
    clickImage(event) {
      if (event.path[1].className === "slide slide--next") {
        this.handleNextClick();
      } else if (event.path[1].className === "slide slide--previous") {
        this.handlePreviousClick();
      }
    },
    handlePreviousClick() {
      if (this.current > 0) {
        this.current = this.current - 1;
      } else {
        this.current = this.slideData.length - 1;
      }
    },
    handleNextClick() {
      if (this.current < this.slideData.length - 1) {
        this.current = this.current + 1;
      } else {
        this.current = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// =========================
// Global
// =========================

#home {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
}
.visuallyhidden {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}
img[lazy="loading"] {
  filter: blur(10px);
  transition: filter 0.7s;
}

// =========================
// Icons
// =========================

.icon {
  fill: black;
  width: 100%;
}

// =========================
// Buttons
// =========================

.btn {
  background-color: #fbad18;
  border: none;
  border-radius: 0.125rem;
  color: black;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem 2.5rem 1.125rem;
  font-family: "lato", serif;

  &:focus {
    outline-color: black;
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 3px;
  }

  &:active {
    transform: translateY(1px);
  }
}

// =========================
// Brand nav
// =========================

.brand__nav {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 2rem);
  width: 100%;

  img {
    height: 2rem;
  }
}

// =========================
// Slider controls
// =========================

.slider__controls {
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100% + 1rem);
  width: 100%;

  .btn {
    --size: 3rem;

    align-items: center;
    background-color: transparent;
    border: 3px solid transparent;
    border-radius: 100%;
    display: flex;
    height: var(--size);
    padding: 0;
    width: var(--size);

    &:focus {
      border-color: #fbad18;
      outline: none;
    }

    &--previous > * {
      transform: rotate(180deg);
    }
  }
}

// =========================
// Slider
// =========================

.slider {
  --slide-size: 70vmin;
  --slide-margin: 4vmin;

  height: var(--slide-size);
  margin: 0 auto;
  position: relative;
  width: var(--slide-size);
}
.slider__wrapper {
  display: flex;
  margin: 0 calc(var(--slide-margin) * -1);
  position: absolute;
  transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);
}

// =========================
// Slide
// =========================

.slide {
  align-items: center;
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: var(--slide-size);
  justify-content: center;
  margin: 0 var(--slide-margin);
  opacity: 0.25;
  position: relative;
  text-align: center;
  transition: opacity calc(var(--base-duration) / 2) var(--base-ease),
    transform calc(var(--base-duration) / 2) var(--base-ease);
  width: var(--slide-size);
  z-index: 1;

  &--previous,
  &--next {
    &:hover {
      opacity: 0.5;
    }
  }

  &--previous {
    cursor: w-resize;

    &:hover {
      transform: translateX(2%);
    }
  }

  &--next {
    cursor: e-resize;

    &:hover {
      transform: translateX(-2%);
    }
  }
}
.slide--current {
  --x: 0;
  --y: 0;
  --d: 50;

  opacity: 1;
  pointer-events: auto;
  user-select: auto;

  @media (hover: hover) {
    &:hover .slide__image-wrapper {
      transform: scale(1.025)
        translate(
          calc(var(--x) / var(--d) * 1px),
          calc(var(--y) / var(--d) * 1px)
        );
    }
  }
}
.slide__image-wrapper {
  background-color: #f5f5f5;
  border-radius: 1%;
  height: 100%;
  left: 0%;
  overflow: hidden;
  position: absolute;
  top: 0%;
  transition: transform calc(var(--base-duration) / 4) var(--base-ease);
  width: 100%;
}
.slide__image {
  --d: 20;

  height: 110%;
  object-fit: cover;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -5%;
  transition: opacity var(--base-duration) var(--base-ease),
    transform var(--base-duration) var(--base-ease);
  user-select: none;
  width: 110%;

  @media (hover: hover) {
    // .slide--current & {
    //   transform: translate(
    //     calc(var(--x) / var(--d) * 1px),
    //     calc(var(--y) / var(--d) * 1px)
    //   );
    // }
  }
}
.slide__headline {
  font-size: 9vmin;
  line-height: 10vmin;
  letter-spacing: -4px;
  font-family: "Lora", serif;
  font-weight: 400;
  font-style: italic;
  position: relative;
}
.slide__content {
  --d: 60;

  opacity: 0;
  padding: 4vmin;
  position: relative;
  transition: transform var(--base-duration) var(--base-ease);
  visibility: hidden;

  .slide--current & {
    animation: fade-in calc(var(--base-duration) / 2) var(--base-ease) forwards;
    visibility: visible;

    @media (hover: hover) {
      transform: translate(
        calc(var(--x) / var(--d) * -1px),
        calc(var(--y) / var(--d) * -1px)
      );
    }
  }

  > * + * {
    margin-top: 2rem;
  }
}

// =========================
// Animations
// =========================

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
