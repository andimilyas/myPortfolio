<template>
  <section class="flex flex-col bg-base-200 py-28">
    <div class="max-w-6xl mx-auto text-center flex flex-col">
      <div class="flex justify-center flex-col">
        <carousel
          :items-to-show="1"
          :autoplay="8000"
          :wrap-around="true"
          class="sm:flex flex-col cursor-pointer h-full hidden"
        >
          <slide
            v-for="carousel in carousels"
            :key="index"
            class="h-full rounded-box box-border"
          >
            <div class="mx-auto">
              <img class="pb-9" v-bind:src="carousel.img" alt="" />
            </div>
          </slide>
        </carousel>
      </div>
      <div class="flex justify-center flex-col">
        <h1
          class="sm:text-5xl text-3xl pb-6 sm:pt-12 items-center font-bold sm:text-start text-center select-auto"
        >
          Featured Project
        </h1>
        <p class="sm:text-2xl text-xl pb-12 sm:text-start text-center">
          Some project that I have created🖱
        </p>
      </div>
      <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-9 sm:mx-0 mx-5">
        <div
          class="box-border rounded-box flex flex-col"
          v-for="project in projects"
          :key="index"
        >
          <img v-bind:src="project.img" alt="" />
          <div class="flex flex-col justify-between p-3">
            <div class="flex flex-col text-start">
              <div class="flex flex-row w-full justify-start">
                <div class="w-full">
                  <h3 class="text-2xl font-bold text-lime-600">
                    {{ project.title }}
                  </h3>
                </div>
                <div class="flex sm:hidden flex-row gap-4">
                  <div class="text-xs content-center">
                    <a v-bind:href="project.link3" target="_blank">
                      <font-awesome-icon
                        class="text-xl cursor-pointer"
                        :icon="['fas', 'star']"
                    /></a>
                  </div>
                  <div class="text-xs content-center">
                    <a v-bind:href="project.link3" target="_blank">
                      <font-awesome-icon
                        class="text-xl cursor-pointer"
                        :icon="['fas', 'comment']"
                    /></a>
                  </div>
                  <div class="text-xs content-center">
                    <a v-bind:href="project.link3" target="_blank">
                      <font-awesome-icon
                        class="text-xl cursor-pointer"
                        :icon="['fas', 'share']"
                    /></a>
                  </div>
                </div>
              </div>
              <p class="text-sm py-3">
                {{ project.description }}
              </p>
            </div>
            <div class="flex sm:flex-row flex-col justify-between h-full pt-5">
              <div class="flex sm:flex-row flex-col w-full sm:gap-5 gap-3">
                <div
                  class="btn bg-lime-600 hover:bg-lime-500 text-neutral text-base"
                >
                  <a v-bind:href="project.link1" target="_blank">Github</a>
                  <font-awesome-icon
                    class="text-xl"
                    :icon="['fab', 'github']"
                  />
                </div>
                <div class="btn btn-outline text-base">
                  <a v-bind:href="project.link2" target="_blank">Open</a>
                  <font-awesome-icon
                    class="text-xl"
                    :icon="['fas', 'paperclip']"
                  />
                </div>
              </div>
              <div class="flex-row gap-8 hidden sm:flex">
                <div class="text-sm content-center">
                  <a v-bind:href="project.link3" target="_blank">
                    <font-awesome-icon
                      class="text-xl cursor-pointer"
                      :icon="['fas', 'star']"
                  /></a>
                </div>
                <div class="text-sm content-center">
                  <a v-bind:href="project.link3" target="_blank">
                    <font-awesome-icon
                      class="text-xl cursor-pointer"
                      :icon="['fas', 'comment']"
                  /></a>
                </div>
                <div class="text-sm content-center">
                  <a v-bind:href="project.link3" target="_blank">
                    <font-awesome-icon
                      class="text-xl cursor-pointer"
                      :icon="['fas', 'share']"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import img1 from "@/asset/img/img1.png";
import img2 from "@/asset/img/img2.png";
import img3 from "@/asset/img/img3.png";
import img4 from "@/asset/img/img4.png";
import carousel1 from "@/asset/img/carousel1.png";
import carousel2 from "@/asset/img/carousel2.png";
import carousel3 from "@/asset/img/carousel3.png";
import carousel4 from "@/asset/img/carousel4.png";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
  },
});
</script>

<script setup>
const carousels = [
  {
    id: 1,
    img: carousel1,
  },
  {
    id: 2,
    img: carousel2,
  },
  {
    id: 3,
    img: carousel3,
  },
  {
    id: 4,
    img: carousel4,
  },
];
const projects = [
  {
    id: 1,
    img: img1,
    title: "Fateka App",
    description:
      "A website-based application, this platform acts as an information service and alumni interaction medium.",
    link1: "https://github.com/andimilyas/fateka",
    link2: "#",
  },
  {
    id: 2,
    img: img3,
    title: "Company Landing Page",
    description:
      "Implementation of responsive web development using native CSS. A landing page for a company operating in the agricultural sector.",
    link1: "https://github.com/andimilyas/ifarmery",
    link2: "https://ifarmery.vercel.app/",
  },

  {
    id: 3,
    img: img2,
    title: "Review Film API",
    description:
      "Backend Application for a movie review website. The application allows users to search for movies and add their reviews.",
    link1: "https://documenter.getpostman.com/view/32583135/2sA3XY6y4t",
  },
  {
    id: 4,
    img: img4,
    title: "Pustaka App",
    description:
      "Developed a book lending application that allows users to browse books with features like filtering by category, and viewing book details.",
    link1: "https://github.com/andimilyas/fe-pustaka",
    link2: "https://pustaka-one.vercel.app/",
  },
];
</script>
