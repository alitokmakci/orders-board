<template>
	<button
		class="transition-all duration-300 text-sm font-medium rounded-md focus:ring-2 focus:outline-none focus:shadow-outline"
		:class="{
			'bg-blue-500 hover:bg-blue-700 text-white focus:ring-blue-500 focus:border-blue-500':
				variant === 'blue',
			'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200':
				variant === 'white',
			'text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-800 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600':
				variant === 'text',
			'px-4 py-2': size === 'md',
			'px-3 py-1': size === 'sm',
			'px-5 py-3': size === 'lg',
		}"
		:type="type"
	>
		<slot />
	</button>
</template>

<script setup>
const { variant, type, size } = defineProps({
	variant: {
		type: String,
		default: 'blue',
	},
	type: {
		type: String,
		default: 'button',
	},
	size: {
		type: String,
		default: 'md',
	},
})
</script>
