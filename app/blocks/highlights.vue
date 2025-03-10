<template>
	<section id="highlights" class="my-20 md:my-24 lg:my-32">
		<container>
			<template v-if="data.image._id">
				<nuxt-img :src="data.image._id" :alt="data.caption" sizes="100vw sm:100vw md:100vw lg:100vw xl:100vw" :height="data.image.metadata.dimensions.height" :width="data.image.metadata.dimensions.width" :placeholder="data.image.metadata.lqip" :style="{ 'aspect-ratio': `${data.image.metadata.dimensions.width} / ${data.image.metadata.dimensions.height}` }" placeholder-class="object-cover" class="select-none" loading="lazy" />
			</template>
			<div class="flex flex-col items-center mt-8 mb-8 sm:mb-10 md:mb-12 lg:mb-20">
				<h2 class="font-headline uppercase text-center text-4xl leading-[0.92] max-w-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{{ data.client }}</h2>
				<h3 class="text-lg mt-4 text-center leading-snug sm:text-xl lg:text-2xl">{{ data.tagline }}</h3>
			</div>
			<div class="grid grid-cols-1 justify-center md:grid-cols-3 md:justify-between md:text-lg">
				<p class="text-center md:text-left">View the site at:</p>
				<p class="text-center mb-6 md:mb-0">
					<nuxt-link :to="`${data.url}`" target="_blank" class="border-hover">
						{{ data.url }}
					</nuxt-link>
				</p>
				<p class="text-center md:text-right">{{ data.stack }}</p>
			</div>
		</container>
	</section>
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>
