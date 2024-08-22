<template>
  <footer class="bg-neutral text-neutral-content p-5 py-8">
    <div class="footer max-w-6xl mx-auto justify-between text-base">
      <div class="gap-6 basis-1/2">
        <img class="sm:w-20 sm:h-20 w-14 h-14" src="../asset/img/logo.png" alt="logo" />
        <p class="text-2xl font-bold">
          Andi Mohamad <br class="sm:block hidden"/>
          Ilyas
        </p>
        <p class="text-base">Tasikmalaya, Indonesia</p>
      </div>
      <nav>
        <h6 class="footer-title">Resources</h6>
        <download-pdf-button class="link link-hover" :pdf-url="pdfUrl" :pdf-file-name="pdfFileName" />
      </nav>
      <nav>
        <h6 class="footer-title">Pages</h6>
        <RouterLink to="/" target="_blank" class="link link-hover">Home</RouterLink>
        <RouterLink to="/blog" target="_blank" class="link link-hover">Blog</RouterLink>
        <RouterLink to="/project" target="_blank" class="link link-hover">Project</RouterLink>
        <RouterLink to="/contact" target="_blank" class="link link-hover">Contact</RouterLink> 
      </nav>
      <nav>
        <h6 class="footer-title">Follow Me</h6>
        <a href="https://github.com/andimilyas" target="_blank" class="link link-hover"
          ><font-awesome-icon class="mr-4" :icon="['fab', 'github']" />Github</a
        >
        <a href="https://www.linkedin.com/in/andimohamadilyas/" target="_blank" class="link link-hover"
          ><font-awesome-icon
            class="mr-4"
            :icon="['fab', 'linkedin']"
          />Linkedin</a
        >
        <a href="https://www.instagram.com/andi_milyas/" target="_blank" class="link link-hover"
          ><font-awesome-icon
            class="mr-4"
            :icon="['fab', 'instagram']"
          />Instagram</a
        >
        <a href="https://www.facebook.com/andimohilyas/" target="_blank" class="link link-hover"
          ><font-awesome-icon
            class="mr-4"
            :icon="['fab', 'facebook']"
          />Facebook</a
        >
        <a href="https://dribbble.com/andymilyas" target="_blank" class="link link-hover"
          ><font-awesome-icon
            class="mr-4"
            :icon="['fab', 'dribbble']"
          />Dribbble</a
        >
      </nav>
    </div>
  </footer>
  <footer class="footer footer-center bg-base-200 text-base-content p-4">
    <aside>
      <p>Copyright © 2024 - All rights created by Andi Mohamad Ilyas | v1.0</p>
    </aside>
  </footer>
</template>
<script>
import DownloadPdfButton from './DownloadPdfButton.vue';

export default { 
  components: { 
    DownloadPdfButton 
  },
  data() {
    return {
      pdfUrl: './asset/doc/CV.pdf',
      pdfFileName: 'CV.pdf'
  };
},
};
</script>
