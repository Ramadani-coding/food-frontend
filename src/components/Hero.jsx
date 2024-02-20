const Hero = () => {
  return (
    <div className="hero">
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xxl px-3 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:px-12 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              NyunCake
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Calling all chocoholics! NyunCake is your haven for heavenly
              chocolate cakes, each one a decadent masterpiece that will satisfy
              your cravings.
            </p>
            <a
              href="#order"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-amber-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Order Now
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/blog"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              About us
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://cdn.discordapp.com/attachments/1016318711365374045/1207861812318441513/IMG-20240216-WA0008.jpg?ex=65e12ff9&is=65cebaf9&hm=dbd35498d973ad7f82962106b7fd1815e2ec170dcba695e6660ccc226c34e851&"
              className="max-w-m rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
