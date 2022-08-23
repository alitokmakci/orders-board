<template>
	<button
		class="transition-all duration-300 px-4 py-2 text-sm font-medium rounded-md focus:ring-2 focus:outline-none focus:shadow-outline"
		:class="{
			'bg-blue-500 hover:bg-blue-700 text-white focus:ring-blue-500 focus:border-blue-500':
				variant === 'blue',
			'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200':
				variant === 'white',
			'text-gray-700 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200 focus:ring-2 focus:ring-gray-300':
				variant === 'text',
		}"
		:type="type"
	>
		<slot />
	</button>
</template>

<script setup>
const { variant, type } = defineProps({
	variant: {
		type: String,
		default: 'blue',
	},
	type: {
		type: String,
		default: 'button',
	},
})
</script>
