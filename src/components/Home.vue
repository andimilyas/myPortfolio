<template>
  <section class="flex flex-col bg-base-200 pt-32 pb-28">
    <div class="max-w-6xl mx-auto text-center">
      <div class="w-2/3 mx-auto items-center">
        <h1 class="text-2xl font-bold">Hello Everyone, Im Andi Mohamad 🙌</h1>
        <div class="flex w-fit items-center justify-center z-0">
          <span
            class="absolute mx- w-fit flex bg-gradient-to-r blur-md from-lime-600 from-50% to-lime-400 bg-clip-text text-8xl box-content font-extrabold text-transparent text-center select-none"
          >
            <span class="hidden">Web Developer</span> <br />
            and Design <br />Enthusiast
          </span>
          <h1
            class="relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-lime-600 from-50% to-lime-400 bg-clip-text text-8xl font-extrabold text-transparent text-center select-auto"
          >
            Web Developer and Design Enthusiast
          </h1>
        </div>
        <p class="text-2xl py-6">
          Likes to learn new things, especially related to technology 💻💥
        </p>
        <div class="flex flex-row justify-center gap-8">
          <button class="btn bg-lime-600 text-neutral text-base">
            Reach Me
          </button>
          <button class="btn btn-outline text-base">
            View Project <font-awesome-icon :icon="['fas', 'eye']" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-base-200 pb-14">
    <div class="max-w-6xl mx-auto flex flex-col">
      <div class="text-end">
        <h1 class="text-5xl font-bold pb-6">About Me</h1>
        <p class="text-2xl pb-6">Self Introduction👋</p>
      </div>
      <div class="flex flex-row">
        <div class="flex justify-center items-center h-full w-full md:block">
          <img src="../asset/img/andimoh.png" alt="" />
        </div>
        <div class="flex flex-col flex-1 justify-center gap-8 content-center">
          <div
            class="bg-base-100 rounded-box p-14 text-base"
            v-for="about in abouts"
          >
            <p>
              {{ about }}
            </p>
          </div>
          <div class="flex flex-row justify-between gap-10">
            <div
              v-for="achievment in achievements"
              class="bg-base-100 rounded-box box-border h-full w-full p-8 flex flex-col flex-wrap"
            >
              <div>
                <h1 class="text-5xl font-bold pb-6 text-lime-600">
                  {{ achievment.number }}
                </h1>
              </div>
              <div>
                <p class="text-base">{{ achievment.title }}</p>
              </div>
            </div>
          </div>
          <button class="btn bg-lime-600 text-neutral text-base">
            <download-pdf-button
              :pdf-url="pdfUrl"
              :pdf-file-name="pdfFileName"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="p-20 max-w-7xl mx-auto flex flex-col">
    <div class="text-start">
      <h1 class="text-5xl font-bold pb-6">Experience</h1>
      <p class="text-2xl pb-24">Work and other relevant experience📃</p>
    </div>
    <carousel :items-to-show="2.5" class="flex flex-col cursor-pointer">
      <slide
        v-for="experience in experiences"
        :key="slide"
        class="flex flex-col bg-base-100 h-full rounded-box box-border"
      >
        <h1 class="text-2xl font-bold py-5 w-full">{{ experience.title }}</h1>
        <p class="text-sm py-5">{{ experience.description }}</p>
        <p class="text-md badge badge-neutral">{{ experience.year }}</p>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </section>
  <section class="bg-base-200 py-28">
    <div class="max-w-6xl mx-auto flex flex-row gap-20">
      <div class="content-center grid grid-col w-3/4">
        <h1 class="text-5xl font-bold pb-6">Tools & Skills</h1>
        <p class="text-2xl">Some of the skills and tools that I use✒</p>
      </div>
      <div class="flex flex-wrap justify-end gap-5 items-end">
        <div
          class="bg-base-100 rounded-box box-border h-40 w-40"
          v-for="skillTool in skillsTools"
        >
          <div
            class="flex flex-col flex-wrap justify-center items-center h-full w-full"
          >
            <div class="text-8xl font-bold text-lime-600">
              <icon :icon="skillTool.icon" />
            </div>
            <p>{{ skillTool.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-14 p-20 max-w-7xl mx-auto">
    <div class="w-full mx-auto flex flex-col">
      <div class="text-center">
        <h1 class="text-5xl font-bold pb-6">Selected Project</h1>
        <p class="text-2xl pb-24">Some project that I have created💻</p>
      </div>
      <carousel :items-to-show="2" class="flex flex-col cursor-pointer">
        <slide
          v-for="project in projects"
          :key="index"
          class="flex flex-col bg-base-100"
        >
          <img v-bind:src="project.img" alt="" />
          <h1 class="text-2xl font-bold pt-2 w-full">{{ project.title }}</h1>
          <p class="text-sm py-3">{{ project.description }}</p>
          <p class="text-md badge badge-neutral">{{ project.tech }}</p>
          <div class="flex flex-row justify-center py-7 gap-4">
            <div class="btn bg-lime-600 text-neutral text-sm">
              <a v-bind:href="project.link1" target="_blank">Github</a>
              <font-awesome-icon class="text-xl" :icon="['fab', 'github']" />
            </div>
            <div class="btn bg-outline text-sm">
              <a v-bind:href="project.link2" target="_blank">Open</a>
              <font-awesome-icon class="text-xl" :icon="['fas', 'paperclip']" />
            </div>
          </div>
        </slide>

        <template #addons>
          <pagination class="pt-5" />
        </template>
      </carousel>
    </div>
  </section>
  <section class="hero bg-base-200 py-28">
    <div class="hero-content text-center">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-7xl font-bold py-6 text-lime-600">
          Lets Work Together
        </h1>
        <p class="text-2xl pb-12">
          For interactive communication, please contact me👇
        </p>
        <div class="flex flex-row justify-center gap-8">
          <a href="https://wa.me/6285352575367" target="_blank"
            ><button class="btn bg-lime-600 text-neutral text-base">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />Whatsapp
            </button></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import DownloadPdfButton from "./DownloadPdfButton.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import project1 from "@/asset/project/project1.png";
import project2 from "@/asset/project/project2.png";
import project3 from "@/asset/project/project3.png";

export default {
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
    DownloadPdfButton,
  },
  data() {
    return {
      pdfUrl: "./asset/doc/CV.pdf",
      pdfFileName: "CV.pdf",
    };
  },
};
</script>

<script setup>
const abouts = [
  "A passionate full-stack web developer who is very enthusiastic about designing the interface of an application. Has successfully completed more than 3 projects with excellent technical skills using Laravel and Vue Js.",
];
const achievements = [
  {
    id: 1,
    number: "3+",
    title: "Project Completed",
  },
  {
    id: 2,
    number: "6+",
    title: "Licences & Certifications",
  },
  {
    id: 3,
    number: "2",
    title: "Work Experience",
  },
];
const skillsTools = [
  {
    id: 1,
    name: "Javascript",
    icon: "mdi:language-javascript",
  },
  {
    id: 2,
    name: "PHP",
    icon: "mdi:language-php",
  },
  {
    id: 3,
    name: "Laravel",
    icon: "mdi:laravel",
  },
  {
    id: 4,
    name: "VueJs",
    icon: "mdi:vuejs",
  },
  {
    id: 5,
    name: "Tailwind",
    icon: "mdi:tailwind",
  },
  {
    id: 6,
    name: "Git",
    icon: "mdi:git",
  },
  {
    id: 7,
    name: "Github",
    icon: "mdi:github",
  },
  {
    id: 8,
    name: "HTML",
    icon: "mdi:language-html5",
  },
  {
    id: 9,
    name: "CSS",
    icon: "mdi:language-css3",
  },
  {
    id: 11,
    name: "Bootstrap",
    icon: "mdi:bootstrap",
  },
  {
    id: 12,
    name: "VS Code",
    icon: "mdi:microsoft-visual-studio-code",
  },
  {
    id: 13,
    name: "Database",
    icon: "mdi:database",
  },
];
const experiences = [
  {
    id: 1,
    title: "IT Support Intern - PT Pos Indonesia",
    year: "2020",
    description:
      "Resolving IT support requests from employees, Answering employee questions regarding computer systems, Gathering and analyzing data to diagnose problems with computer systems",
  },
  {
    id: 4,
    title: "FE Dev Student - DTS Kominfo",
    year: "2022",
    description:
      "Learn about Fundamental programming languages Intro to Frontend (HTML, CSS and Javascript)",
  },
  {
    id: 2,
    title: "Web Dev Student (Dicoding) - IDCamp",
    year: "2023",
    description:
      "Build websites using HTML semantic standards and CSS, Learn about Fundamental Javascript: Data Structure, Function, OOP, Functional Programming, Module, NPM, Testing, Async Process, etc",
  },
  {
    id: 3,
    title: "Google UX Design Student - DTS Kominfo",
    year: "2023",
    description:
      "Start the UX Design Process: Empathize, Define, Ideate and Test try Initial Concept Create Designs and High-Fidelity Prototype in Figma Web Designing Responsive in Adobe XD.",
  },
];
const projects = [
  {
    id: 1,
    img: project2,
    title: "Company Landing Page",
    description:
      "Implementation of responsive web development using native CSS. A landing page for a company operating in the agricultural sector.",
    tech: "Front End Development",
    link1: "https://github.com/andimilyas/iFarmery",
  },
  {
    id: 2,
    img: project1,
    title: "Fateka App",
    description:
      "A website-based application, this platform acts as an information service and alumni interaction medium.",
    tech: "Full Stack Development",
    link1: "https://github.com/armaind/fateka",
  },
  {
    id: 3,
    img: project3,
    title: "Review Film API",
    description:
      "Backend Application for a movie review website. The application allows users to search for movies and add their reviews.",
    tech: "Backend development",
    link1: "https://documenter.getpostman.com/view/32583135/2sA3XY6y4t",
  },
];
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
