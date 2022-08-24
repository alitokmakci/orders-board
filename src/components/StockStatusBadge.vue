<template>
	<span class="text-sm font-medium text-green-500" v-if="status">
		Available
	</span>

	<span class="text-sm font-medium text-red-500" v-else> Not Available </span>
</template>

<script setup>
const { status } = defineProps({
	status: {
		type: [Boolean, Number],
		default: false,
	},
})
</script>
