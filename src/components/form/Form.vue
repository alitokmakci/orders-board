<template>
	<form :id="id" @submit.prevent="onSubmit">
		<slot />
	</form>
</template>

<script setup>
const { onSubmit, id } = defineProps({
	onSubmit: {
		type: Function,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
})
</script>
