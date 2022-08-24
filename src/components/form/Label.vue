<template>
	<label
		:for="htmlFor"
		class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
	>
		<slot />
	</label>
</template>

<script setup>
const { htmlFor } = defineProps({
	htmlFor: {
		type: String,
		default: '',
	},
})
</script>
