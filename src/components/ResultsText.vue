<template>
	<span class="text-sm">
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
