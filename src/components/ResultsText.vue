<template>
	<span class="text-sm text-gray-800 dark:text-gray-200 mb-10 md:mb-0">
		Showing {{ (page - 1) * perPage + 1 }} - {{ page * perPage }} of
		{{ total }} results.
	</span>
</template>

<script setup>
const { page, perPage, total } = defineProps({
	total: {
		type: Number,
		required: true,
	},
	perPage: {
		type: Number,
		required: true,
	},
	page: {
		type: Number,
		required: true,
	},
})
</script>
