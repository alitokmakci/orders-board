<template>
	<span class="text-sm font-medium text-green-500" v-if="status">New</span>
	<span class="text-sm font-medium text-red-500" v-else>Old</span>
</template>

<script setup>
const { status } = defineProps({
	status: {
		type: [Boolean, Number],
		default: false,
	},
})
</script>
