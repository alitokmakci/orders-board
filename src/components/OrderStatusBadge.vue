<template>
	<span
		class="text-xs font-medium bg-green-500 text-white px-2 py-1 rounded-md"
		v-if="!status"
		>Completed</span
	>
	<span
		class="text-xs font-medium bg-yellow-500 text-white px-2 py-1 rounded-md"
		v-else-if="status"
		>Pending</span
	>
	<span
		class="text-xs font-medium bg-red-500 text-white px-2 py-1 rounded-md"
		v-else
		>Canceled</span
	>
</template>

<script setup>
const { status } = defineProps({
	status: {
		type: [Boolean, Number],
		default: false,
	},
})
</script>
