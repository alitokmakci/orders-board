<template>
	<div class="p-4 bg-white dark:bg-slate-800 rounded-md shadow">
		<h1
			v-if="title"
			class="mb-6 font-medium text-lg text-gray-600 dark:text-gray-200"
		>
			{{ title }}
		</h1>
		<slot />
	</div>
</template>

<script setup>
const { title } = defineProps({
	title: {
		type: String,
		default: '',
	},
})
</script>
