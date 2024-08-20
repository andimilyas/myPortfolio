<template>
  <nav
    class="w-full fixed top-0 bg-base-200 backdrop-filter backdrop-blur-lg bg-opacity-20 z-40"
  >
    <div class="navbar max-w-6xl mx-auto my-2">
      <div class="navbar-start">
        <div class="max-w-12">
          <router-link to="/"><img src="../asset/img/logo.png" /></router-link>
        </div>
      </div>
      <div class="navbar-center">
        <ul class="flex flex-row gap-8 cursor-pointer text-base">
          <li>
            <RouterLink to="/" class="hover:text-lime-600">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/project" class="hover:text-lime-600"
              >Project</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/blog" class="hover:text-lime-600">Blog</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-lime-600"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="justify-end px-5">
          <form class="max-w-40 mx-auto">
            <label class="input input-bordered flex items-center gap-2">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              <input type="text" class="max-w-20" placeholder="Search" />
            </label>
          </form>
        </div>
        <label class="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            />
          </svg>
          <input
            type="checkbox"
            value="light"
            class="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label> 
      </div>
    </div>
  </nav>
</template>

<script>
import img from "../asset/img/logo.png";
</script>
