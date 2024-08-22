<template> 
<div class="fixed top-0 bg-base-200 backdrop-filter backdrop-blur-lg bg-opacity-20 navbar z-40 w-full mx-auto">
  <div class="navbar z-40 max-w-7xl mx-auto">
    <div class="navbar-start">
      <div class="max-w-10">
        <router-link to="/"><img src="../asset/img/logo.png" /></router-link>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu-horizontal gap-8 text-base">
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
      <div class="justify-end px-5 hidden lg:flex">
        <form class="max-w-40 mx-auto">
          <label class="input input-bordered flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            <input type="text" class="max-w-20" placeholder="Search" />
          </label>
        </form>
      </div>
      <label class="cursor-pointer gap-2 hidden lg:flex">
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
        <input type="checkbox" value="light" class="toggle theme-controller" />
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
      <div class="drawer drawer-end justify-end lg:hidden flex">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer-4" class="drawer-button"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              /></svg
          ></label>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu bg-base-200 text-xl min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <li>
              <form class="p-0 my-3">
                <label class="input input-bordered flex items-center gap-2 min-w-72">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'magnifying-glass']" />
                  <input class="w-full" type="text" placeholder="Search" />
                </label>
              </form>
            </li>
            <li>
              <RouterLink to="/" class="hover:text-lime-600"
                ><font-awesome-icon
                  class="mr-2 text-sm"
                  :icon="['fas', 'home']"
                />Home</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/project" class="hover:text-lime-600"
                ><font-awesome-icon
                  class="mr-2 text-sm"
                  :icon="['fas', 'briefcase']"
                />Project</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/blog" class="hover:text-lime-600"
                ><font-awesome-icon
                  class="mr-2 text-sm"
                  :icon="['fas', 'newspaper']"
                />Blog</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/contact" class="hover:text-lime-600"
                ><font-awesome-icon
                  class="mr-2 text-sm"
                  :icon="['fas', 'envelope']"
                />Contact</RouterLink
              >
            </li>
            <li>
              <details>
                <summary class="hover:text-lime-600"><font-awesome-icon class="mr-2 text-sm" :icon="['fas', 'gear']" />Theme</summary>
                <ul class="p-2">
                  <li>
                    <label class="cursor-pointer w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        ></path>
                      </svg>
                    </label>
                  </li>
                </ul>
              </details>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script></script>
