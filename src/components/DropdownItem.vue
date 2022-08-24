<template>
	<li>
		<a
			v-if="as === 'a'"
			href="#"
			class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
		>
			<slot />
		</a>
		<router-link
			v-if="as === 'link'"
			:to="to"
			class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
		>
			<slot />
		</router-link>
	</li>
</template>

<script setup>
const { as, to } = defineProps({
	as: {
		type: String,
		default: 'a', // a or link
	},
	to: {
		type: String,
		default: '/',
	},
})
</script>
