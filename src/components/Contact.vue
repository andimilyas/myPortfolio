<template>
  <section class="flex flex-col bg-base-200 pt-28 sm:pb-14">
    <div class="max-w-6xl mx-auto text-center">
      <div class="w-full flex justify-center flex-col">
        <h1
          class="pb-6 items-center sm:text-5xl text-3xl font-bold text-center select-auto"
        >
          Contact With Me
        </h1>
        <p class="sm:text-2xl text-xl pb-12">
          For bussines inquiries and other📫
        </p>
      </div>
    </div>
  </section>
  <section class="hero bg-base-200 grid pb-14">
    <div class="hero-content flex-col grid grid-cols-5 min-w-6xl">
      <div class="sm:col-span-2 col-span-5">
        <img class="" src="../asset/img/andimoh.png" alt="" />
      </div>
      <div class="sm:col-span-3 col-span-5">
        <div
          class="col-span-3 sm:col-span-1 justify-center gap-8 content-center"
        >
          <div class="sm:bg-base-100 rounded-box sm:p-8 p-2 text-base">
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered w-full my-2 text-sm"
            />
            <input
              type="text"
              placeholder="Your Email"
              class="input input-bordered w-full my-2 text-sm"
            />
            <input
              type="text"
              placeholder="Subject"
              class="input input-bordered w-full my-2 text-sm"
            />
            <textarea
              class="textarea textarea-bordered w-full my-2"
              placeholder="Your Message"
            ></textarea>
            <button
              class="w-full btn bg-lime-600 hover:bg-lime-500 text-base text-neutral"
            >
              <font-awesome-icon :icon="['fas', 'paper-plane']" /> Send
            </button>
          </div> 
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
