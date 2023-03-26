<template>
    <div
        id="splash" 
        class="h-full bg-repeat sm:bg-no-repeat bg-cover bg-picacho-extended sm:bg-picacho"
    >
        <div class="flex flex-col sm:flex-row gap-y-12 sm:gap-x-20 h-fit">
            <div class="sm:w-1/3 mx-8 sm:mx-16 mt-10 sm:mt-20 mb-10 sm:mb-24 order-last sm:order-none flex-grow">
                <h1 class="text-white text-left text-3xl sm:text-6xl text">Hi, I'm <br/>
                <strong class="text-lightSand">Tristan Macelli</strong>.</h1>
                <p class="w-fit text-darkSand text-lg sm:text-2xl">
                    SWE // DJ in Austin, TX
                </p>
                <p class="text-justify text-white sm:w-4/5">
                    Originally from La Jolla, CA, a coastal town in San Diego I grew up surfing and playing water polo.
                    I like to DJ, Workout, and Develop websites.  My friends call me Treehaus, hence the emoji icon in the tab.
                </p>
            </div>
            <div class="mx-8 sm:my-8 sm:m-0 h-80 sm:h-auto sm:w-2/5 grid place-items-center">
                <div class="absolute w-4/5 sm:w-1/3 h-2/5 2xl:w-1/4 2xl:h-1/3 mx-6 rounded-md z-0 opacity-20 bg-black"
                ></div>
                <div
                    class="relative w-2/3 h-2/3 grid grid-cols-3 justify-items-center">
                    <img
                        class="z-30 absolute sm:transform sm:-translate-x-28 sm:translate-y-8"
                        src="@/assets/img/me/coldwater-rooftop.png"
                        alt="A picture of myself, Tristan Macelli, on the Coldwater Apartments rooftop in Austin, Tx"
                    >
                    <img
                        class="z-20 absolute"
                        src="@/assets/img/me/treehouse.png"
                        alt="A picture of myself, Tristan Macelli, with my rooftop tent (how I got my name Treehaus)"
                    >
                    <img
                        class="z-10 absolute sm:transform sm:translate-x-32 sm:translate-y-8"
                        src="@/assets/img/me/big-bear.png"
                        alt="A picture of myself, Tristan Macelli, at the Big Bear ski resort"
                    >
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-y-6 h-fit mx-20">
            <button
                class="btn bg-darkSand"
                @click="RouteToPortfolio">
                Developer Portfolio
            </button>
            <button
                class="btn bg-lightSand"
                @click="RouteToEvents">
                Upcoming Events
            </button>
        </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  export * from './Splash.vue'
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: 'SplashView',
    setup() {
        const router = useRouter();

        const RouteTo = (view: string) => {
            console.log(`Routing to ${view}`);
            router.push({ path: `/${view}` });
        };
        const RouteToEvents = () => RouteTo("events");
        const RouteToPortfolio = () => RouteTo("portfolio");
        return { RouteToEvents, RouteToPortfolio };
    }
})
  </script>
  
<style lang="postcss" scoped>
  .btn {
    @apply w-52 px-5 py-2 rounded-sm text-lg text-white cursor-pointer hover:underline;
  }
</style>
