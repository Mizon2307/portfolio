<template>
	<section>
		<container>
			<h1 class="text-4xl leading-none max-w-sm mb-10 sm:text-6xl sm:max-w-2xl md:text-[70px] md:mb-12 lg:text-8xl lg:mb-16 lg:max-w-5xl xl:text-[108px] xl:max-w-6xl">{{ data.heading }}</h1>
			<div class="flex flex-col justify-between md:flex-row">
				<div class="flex flex-col justify-between">
					<div class="max-w-[300px] prose text-lg leading-[1.2] sm:text-xl md:min-w-[330px] md:max-w-sm md:mr-16 lg:text-2xl">
						<sanity-content :blocks="data.copy" />
					</div>
					<svg class="w-8 mt-10 mb-16 sm:w-9 md:mt-0 md:w-10 lg:w-12 lg:mb-24 xl:w-14" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 70">
						<path d="M56 44.2 28.1 70 .1 44.2l5.6-6L24 55.4V.9h8.1v54.5l18.3-17.2 5.6 6Z" fill="#16074C" />
					</svg>
				</div>

				<swiper
					loop
					:modules="[EffectFade, Autoplay]"
					effect="fade"
					:autoplay="{
						delay: 1750,
						disableOnInteraction: false,
					}"
				>
					<template v-for="image in data.carousel">
						<swiper-slide>
							<nuxt-img :src="image.asset._ref" class="select-none" loading="lazy" />
						</swiper-slide>
					</template>
				</swiper>

				<!-- <nuxt-img :src="image.asset._ref" :alt="data.caption" sizes="100vw sm:100vw md:100vw lg:100vw xl:100vw" :height="data.image.metadata.dimensions.height" :width="data.image.metadata.dimensions.width" :placeholder="data.image.metadata.lqip" :style="{ 'aspect-ratio': `${data.image.metadata.dimensions.width} / ${data.image.metadata.dimensions.height}` }" placeholder-class="object-cover" class="select-none" loading="lazy" /> -->

				<!-- <swiper
					loop
					:modules="[EffectFade, Autoplay]"
					effect="fade"
					:autoplay="{
						delay: 1750,
						disableOnInteraction: false,
					}"
				>
					<swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
					<swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
					<swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
				</swiper> -->
			</div>
			<h4 class="hidden font-italic text-2xl uppercase md:block md:my-24 lg:text-[34px] xl:my-32">
				<span class="flex justify-center">
					Design
					<svg class="w-11 mx-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 31">
						<path d="m11.395 29.02.876-10.932-9.892 6.184L0 19.9l10.831-4.873L0 10.217l2.38-4.372 9.891 6.184-.876-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373L17.28 15.09l10.832 4.81-2.38 4.372-9.83-6.184.815 10.932h-5.322Z" fill="#16074C" />
						<path d="m29.283 29.02.877-10.932-9.893 6.184-2.379-4.372 10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.893-6.184L46 10.218 35.169 15.09 46 19.9l-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
						<path d="M2.442 0h30.41v30.34H2.442V0Z" fill="#E5D5EB" />
						<path d="M13.175 0h30.41v30.34h-30.41V0Z" fill="#E5D5EB" />
						<path d="m14.973 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="m25.706 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="M7.808 0h30.41v30.34H7.808V0Z" fill="#E5D5EB" />
						<path d="m20.34 29.02.876-10.932-9.893 6.184L8.944 19.9l10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373-10.832 4.872 10.832 4.81-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
					</svg>
					to
					<svg class="w-11 mx-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 31">
						<path d="m11.395 29.02.876-10.932-9.892 6.184L0 19.9l10.831-4.873L0 10.217l2.38-4.372 9.891 6.184-.876-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373L17.28 15.09l10.832 4.81-2.38 4.372-9.83-6.184.815 10.932h-5.322Z" fill="#16074C" />
						<path d="m29.283 29.02.877-10.932-9.893 6.184-2.379-4.372 10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.893-6.184L46 10.218 35.169 15.09 46 19.9l-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
						<path d="M2.442 0h30.41v30.34H2.442V0Z" fill="#E5D5EB" />
						<path d="M13.175 0h30.41v30.34h-30.41V0Z" fill="#E5D5EB" />
						<path d="m14.973 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="m25.706 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="M7.808 0h30.41v30.34H7.808V0Z" fill="#E5D5EB" />
						<path d="m20.34 29.02.876-10.932-9.893 6.184L8.944 19.9l10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373-10.832 4.872 10.832 4.81-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
					</svg>
					Development
				</span>
			</h4>
			<h4 class="font-italic text-xl uppercase my-20 sm:text-2xl md:hidden">
				<span class="flex justify-center">
					<svg class="w-9 sm:w-11" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 31">
						<path d="m11.395 29.02.876-10.932-9.892 6.184L0 19.9l10.831-4.873L0 10.217l2.38-4.372 9.891 6.184-.876-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373L17.28 15.09l10.832 4.81-2.38 4.372-9.83-6.184.815 10.932h-5.322Z" fill="#16074C" />
						<path d="m29.283 29.02.877-10.932-9.893 6.184-2.379-4.372 10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.893-6.184L46 10.218 35.169 15.09 46 19.9l-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
						<path d="M2.442 0h30.41v30.34H2.442V0Z" fill="#E5D5EB" />
						<path d="M13.175 0h30.41v30.34h-30.41V0Z" fill="#E5D5EB" />
						<path d="m14.973 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="m25.706 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="M7.808 0h30.41v30.34H7.808V0Z" fill="#E5D5EB" />
						<path d="m20.34 29.02.876-10.932-9.893 6.184L8.944 19.9l10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373-10.832 4.872 10.832 4.81-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
					</svg>
					<span class="mx-5">Highlights</span>
					<svg class="w-9 sm:w-11" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 31">
						<path d="m11.395 29.02.876-10.932-9.892 6.184L0 19.9l10.831-4.873L0 10.217l2.38-4.372 9.891 6.184-.876-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373L17.28 15.09l10.832 4.81-2.38 4.372-9.83-6.184.815 10.932h-5.322Z" fill="#16074C" />
						<path d="m29.283 29.02.877-10.932-9.893 6.184-2.379-4.372 10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.893-6.184L46 10.218 35.169 15.09 46 19.9l-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
						<path d="M2.442 0h30.41v30.34H2.442V0Z" fill="#E5D5EB" />
						<path d="M13.175 0h30.41v30.34h-30.41V0Z" fill="#E5D5EB" />
						<path d="m14.973 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="m25.706 29.02.876-10.932-9.892 6.184-2.38-4.372 10.832-4.873-10.831-4.81 2.379-4.372 9.892 6.184-.876-10.931h5.321l-.814 10.931 9.893-6.184 2.316 4.373-10.831 4.872 10.831 4.81-2.379 4.372-9.83-6.184.814 10.932h-5.321Z" fill="#16074C" />
						<path d="M7.808 0h30.41v30.34H7.808V0Z" fill="#E5D5EB" />
						<path d="m20.34 29.02.876-10.932-9.893 6.184L8.944 19.9l10.832-4.873-10.832-4.81 2.38-4.372 9.892 6.184-.877-10.931h5.322l-.814 10.931 9.892-6.184 2.317 4.373-10.832 4.872 10.832 4.81-2.38 4.372-9.829-6.184.814 10.932h-5.322Z" fill="#16074C" />
					</svg>
				</span>
			</h4>
		</container>
	</section>
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			EffectFade,
			Autoplay,
		}
	},
}
</script>
