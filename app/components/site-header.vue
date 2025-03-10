<template>
	<header>
		<container>
			<div class="flex items-end justify-between mb-10 border-b border-purple pt-10 pb-6 lg:mb-16 lg:pt-16 lg:pb-8">
				<div class="flex leading-[1.2] md:text-lg">
					<div>
						<p class="font-headline uppercase leading-tight lg:text-lg">
							<nuxt-link to="/" aria-label="Home">Christian<br />Mizon</nuxt-link>
						</p>
					</div>
					<div class="hidden lg:block lg:ml-28 lg:mr-28 xl:ml-36 xl:mr-36">
						<p>Based in Manchester<br />United Kingdom</p>
					</div>
					<div class="hidden lg:block">
						<p>Say hello<br /><nuxt-link to="mailto:hello@christianmizon.co.uk" aria-label="Email Address" class="border-hover">hello@christianmizon.co.uk</nuxt-link></p>
					</div>
				</div>
				<nav class="hidden md:text-lg lg:flex lg:gap-1">
					<nuxt-link to="#highlights" aria-label="Highlights" class="border-hover bottom-[-3px]">Highlights, </nuxt-link>
					<nuxt-link to="#contact" aria-label="Contact" class="border-hover bottom-[-3px]">Contact</nuxt-link>
				</nav>
				<div class="text-lg lg:hidden">
					<button @click="drawer" class="cursor-pointer">Menu</button>
				</div>
			</div>
		</container>
	</header>

	<aside class="w-full h-full fixed flex flex-col justify-between py-10 px-8 transform top-0 left-0 bg-purple text-violet mb-10 overflow-auto ease-in-out transition-all duration-500 z-30" :class="isOpen ? 'visible opacity-100' : 'invisible opacity-0'">
		<div>
			<div class="flex items-end justify-between pb-6 leading-[1.2] border-b border-violet md:text-lg">
				<div>
					<p class="font-headline uppercase leading-tight lg:text-lg">
						<nuxt-link to="/" aria-label="Home">Christian<br />Mizon</nuxt-link>
					</p>
				</div>
				<button class="text-lg cursor-pointer" @click="isOpen = false">Close</button>
			</div>

			<nav class="mt-10 flex flex-col text-5xl">
				<nuxt-link to="/" @click="isOpen = false" aria-label="Home" class="mb-4">Home</nuxt-link>
				<nuxt-link to="#highlights" @click="isOpen = false" aria-label="Highlights" class="mb-4">Highlights</nuxt-link>
				<nuxt-link to="#contact" @click="isOpen = false" aria-label="Contact">Contact</nuxt-link>
			</nav>
		</div>

		<div class="flex flex-col justify-end">
			<div class="mt-12 mb-6 text-lg">
				<p>Based in Manchester<br />United Kingdom</p>
			</div>

			<div class="text-lg">
				<p>Say hello<br /><nuxt-link to="mailto:hello@christianmizon.co.uk" aria-label="Email Address" class="border-hover">hello@christianmizon.co.uk</nuxt-link></p>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
		}
	},
	methods: {
		drawer() {
			this.isOpen = !this.isOpen
		},
	},
	watch: {
		isOpen: {
			immediate: true,
			handler(isOpen) {
				if (process.client) {
					if (isOpen) document.body.style.setProperty('overflow', 'hidden')
					else document.body.style.removeProperty('overflow')
				}
			},
		},
	},
	mounted() {
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 27 && this.isOpen) this.isOpen = false
		})
	},
}
</script>
