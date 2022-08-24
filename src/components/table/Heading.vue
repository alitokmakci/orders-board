<template>
	<th v-if="!action" class="px-6 py-3" scope="col">
		<slot />
	</th>
	<th v-else class="px-6 py-3" scope="col">
		<i class="text-lg ri-settings-3-line"></i>
	</th>
</template>

<script setup>
const { action } = defineProps({
	action: {
		type: Boolean,
		default: false,
	},
})
</script>
