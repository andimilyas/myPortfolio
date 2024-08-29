<template>
  <section class="hero bg-base-200 mt-16 sm:py-16 py-10">
    <div class="hero-content flex-col lg:flex-row min-w-6xl">
      <div class="text-center">
        <h1 class="text-2xl font-bold">
          Hello Everyone, <br class="block sm:hidden" />
          Im Andi Mohamad 🙌
        </h1>
        <h1
          class="py-6 justify-center flex bg-gradient-to-r items-center from-lime-600 from-50% to-lime-400 bg-clip-text sm:text-8xl text-5xl font-extrabold text-transparent text-center select-auto"
        >
          Web Developer and Design Enthusiast
        </h1>
        <p class="sm:text-2xl text-xl py-6">
          Likes to learn new things, especially related to technology 💻💥
        </p>
        <div class="flex sm:flex-row sm:gap-5 flex-col justify-center gap-3">
          <RouterLink to="/contact">
            <button
              class="btn bg-lime-600 hover:bg-lime-500 text-base text-neutral w-full"
            >
              Reach Me
            </button>
          </RouterLink>
          <RouterLink to="/project">
            <button class="btn btn-outline text-base w-full">
              See Projects <font-awesome-icon :icon="['fas', 'eye']" />
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="hero bg-base-200 sm:py-16 py-10 grid">
    <div class="hero-content flex-col grid grid-cols-5 min-w-6xl">
      <div class="sm:text-end text-center col-span-5">
        <h1 class="sm:text-5xl text-3xl font-bold pb-6">About Me</h1>
        <p class="sm:text-2xl text-xl pb-6">Self Introduction👋</p>
      </div>
      <div class="sm:col-span-2 col-span-5">
        <img class="" src="../asset/img/andimoh.png" alt="" />
      </div>
      <div class="sm:col-span-3 col-span-5">
        <div
          class="col-span-3 sm:col-span-1 justify-center gap-8 content-center"
        >
          <div
            class="sm:bg-base-100 rounded-box sm:p-8 p-4 text-base"
            v-for="about in abouts"
          >
            <p class="text-justify">
              {{ about }}
            </p>
          </div>
          <div
            class="col-span-3 sm:grid sm:grid-cols-3 gap-8 justify-between my-3 text-center"
          >
            <div
              v-for="achievment in achievements"
              class="bg-base-100 rounded-box box-border h-full w-full p-5 my-3 content-center"
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
          <div class="col-span-3 mt-8">
            <button
              class="w-full btn bg-lime-600 hover:bg-lime-500 text-base text-neutral"
            >
              <download-pdf-button
                :pdf-url="pdfUrl"
                :pdf-file-name="pdfFileName"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hero bg-base-200 pb-28 grid">
    <div class="hero-content flex-col grid grid-cols-5 min-w-6xl">
      <div class="text-center col-span-5">
        <h1 class="sm:text-5xl text-3xl font-bold pb-6">Experience</h1>
        <p class="sm:text-2xl text-xl pb-6">
          Work and other relevant experience📃
        </p>
      </div>
      <div class="col-span-5">
        <ul class="timeline timeline-vertical lg:timeline-horizontal">
          <li v-for="experience in experiences">
            <hr />
            <div class="timeline-start">{{ experience.year }}</div>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              class="timeline-end timeline-box sm:w-56 w-40 sm:text-justify p-5"
            >
              {{ experience.title }}
              <div class="dropdown dropdown-end flex mt-2">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost btn-circle btn-xs"
                >
                  <font-awesome-icon
                    class="text-xs"
                    :icon="['fas', 'chevron-down']"
                  />
                </div>
                <div
                  tabindex="0"
                  class="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow my-5"
                >
                  <div tabindex="0" class="card-body">
                    <p class="text-sm mb-5 text-justify">
                      {{ experience.description.substring(0, 100) }}...
                      <RouterLink class="link link-hover font-bold">
                        more details
                      </RouterLink>
                    </p>
                    <button
                      class="w-full btn bg-lime-600 hover:bg-lime-500 text-sm text-neutral"
                    >
                      <font-awesome-icon :icon="['fas', 'eye']" />Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="hero bg-base-200 sm:py-16 py-10 grid">
    <div class="hero-content flex-col grid grid-cols-5 min-w-6xl">
      <div class="sm:col-span-2 text-center sm:text-start col-span-5 sm:mr-10">
        <h1 class="sm:text-5xl text-3xl font-bold pb-6">Tools & Skills</h1>
        <p class="sm:text-2xl text-xl pb-6">
          Some tools and skills that <br class="sm:hidden" />
          i have used🧰
        </p>
      </div>
      <div class="sm:col-span-3 col-span-5">
        <div
          class="col-span-3 sm:col-span-1 justify-center gap-5 content-center"
        >
          <div
            class="grid grid-cols-3 sm:grid sm:grid-cols-4 gap-5 justify-between text-center"
          >
            <div
              v-for="skillTool in skillsTools"
              class="bg-base-100 rounded-box box-border h-full w-full p-5 content-center"
            >
              <div class="flex justify-center">
                <h1
                  class="sm:text-8xl md:text-6xl text-6xl font-bold text-lime-600 hover:text-lime-500 delay-150"
                >
                  <icon :icon="skillTool.icon" />
                </h1>
              </div>
              <div>
                <p class="text-base hidden sm:block">{{ skillTool.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hero bg-base-200 sm:py-16 py-10 grid">
    <div class="hero-content flex-col grid grid-cols-5 min-w-6xl">
      <div class="text-center col-span-5">
        <h1 class="sm:text-5xl text-3xl font-bold pb-6">Selected Project</h1>
        <p class="sm:text-2xl text-xl pb-6">
          Some project that I have created💻
        </p>
      </div>
      <div class="col-span-5">
        <carousel
          :items-to-show="2.5"
          class="flex-col cursor-pointer hidden sm:block"
        >
          <slide
            v-for="project in projects"
            :key="index"
            class="flex flex-col my-5"
          >
            <img v-bind:src="project.img" alt="" />
            <div class="mx-5">
              <h1 class="text-2xl font-bold pt-2 w-full">
                {{ project.title }}
              </h1>
              <p class="text-sm py-3">{{ project.description }}</p>
              <p class="text-md badge badge-neutral mb-5">{{ project.tech }}</p>
              <div class="flex flex-row justify-center gap-4 mb-8">
                <div
                  class="btn bg-lime-600 hover:bg-lime-500 text-neutral text-sm"
                >
                  <a v-bind:href="project.link1" target="_blank">Github</a>
                  <font-awesome-icon
                    class="text-xl"
                    :icon="['fab', 'github']"
                  />
                </div>
                <div class="btn btn-outline text-sm">
                  <a v-bind:href="project.link2" target="_blank">Open</a>
                  <font-awesome-icon
                    class="text-xl"
                    :icon="['fas', 'paperclip']"
                  />
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <pagination class="pt-5" />
          </template>
        </carousel>
        <carousel
          :items-to-show="1"
          class="flex-col cursor-pointer sm:hidden block rounded-box"
        >
          <slide v-for="project in projects" :key="index" class="flex flex-col">
            <img v-bind:src="project.img" alt="" />
            <h1 class="text-xl font-bold pt-2 w-full mb-3">
              {{ project.title }}
            </h1>
            <p class="text-md badge badge-neutral mb-5">{{ project.tech }}</p>
            <div class="flex flex-row justify-center gap-4 mb-8">
              <div
                class="btn bg-lime-600 hover:bg-lime-500 text-neutral text-sm"
              >
                <a v-bind:href="project.link1" target="_blank">Github</a>
                <font-awesome-icon class="text-xl" :icon="['fab', 'github']" />
              </div>
              <div class="btn btn-outline text-sm">
                <a v-bind:href="project.link2" target="_blank">Open</a>
                <font-awesome-icon
                  class="text-xl"
                  :icon="['fas', 'paperclip']"
                />
              </div>
            </div>
          </slide>
          <template #addons>
            <pagination class="pt-5" />
          </template>
        </carousel>
      </div>
    </div>
  </section>
  <section class="hero bg-base-200 sm:py-16 pb-16">
    <div class="hero-content flex-col lg:flex-row min-w-6xl">
      <div class="hero-content text-center">
        <div class="max-w-6xl mx-auto">
          <h1 class="sm:text-7xl text-5xl font-bold py-6 text-lime-600">
            Lets Work Together
          </h1>
          <p class="sm:text-2xl text-xl pb-10">
            For interactive communication, please contact me👇
          </p>
          <div class="flex flex-row justify-center gap-8">
            <a href="https://wa.me/6285352575367" target="_blank"
              ><button
                class="btn bg-lime-600 hover:bg-lime-500 text-neutral text-base"
              >
                <font-awesome-icon :icon="['fab', 'whatsapp']" />Whatsapp
              </button></a
            >
          </div>
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
import project4 from "@/asset/project/project4.png";
import { RouterLink } from "vue-router";

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
  {
    id: 4,
    title: "Full Stack Developer (Sanbercode) - Disnakertrans",
    year: "2024",
    description:
      "Learn about fundamental of PHP and Javascript, Implementing Laravel, Vue Js until deployment and supporting technologies such as git for managing code resource storage, Test back end app with Postman for fixed the API, Create book lending project, platform for movie reviews, and a personal website using Laravel and Vue Js",
  },
];
const projects = [
  {
    id: 1,
    img: project1,
    title: "Fateka App",
    description:
      "A website-based application, this platform acts as an information service and alumni interaction medium.",
    tech: "Full Stack Development",
    link1: "https://github.com/andimilyas/fateka",
    link2: "#"
  }, 
  {
    id: 2,
    img: project2,
    title: "Company Landing Page",
    description:
      "This is a landing page for a company. The page contains information about the company, services and contact details.",
    tech: "Frontend Development",
    link1: "https://github.com/andimilyas/ifarmery",
    link2: "https://ifarmery.vercel.app/"
  }, 
  {
    id: 3,
    img: project3,
    title: "Review Film API",
    description:
      "Backend Application for a movie review website. The application allows users to search for movies and add their reviews.",
    tech: "Backend Development",
    link1: "https://documenter.getpostman.com/view/32583135/2sA3XY6y4t",
  },
  {
    id: 4,
    img: project4,
    title: "Pustaka App",
    description:
      "Developed a book lending application that allows users to browse books with features like filtering by category, and viewing book details.",
    tech: "Full Stack Development",
    link1: "https://github.com/andimilyas/fe-pustaka",
    link2: "https://pustaka-one.vercel.app/"
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
