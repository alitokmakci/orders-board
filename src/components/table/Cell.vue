<template>
	<td
		class="px-6 py-4 dark:text-white"
		:class="{
			'font-medium text-gray-900 whitespace-nowrap': scoped,
		}"
	>
		<slot />
	</td>
</template>

<script setup>
const { scoped } = defineProps({
	scoped: {
		type: Boolean,
		default: false,
	},
})
</script>
