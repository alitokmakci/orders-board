<template>
	<div class="text-sm text-gray-900 dark:text-gray-200">
		<span class="font-medium capitalize"> {{ attribute }}: </span>
		<span>{{ value }}</span>
	</div>
</template>

<script setup>
const { attribute, value } = defineProps({
	attribute: {
		type: [String, Number],
		required: true,
	},
	value: {
		type: [String, Number],
		required: true,
	},
})
</script>
