<template>
	<router-view />

	<div class="toast-container"></div>

	<div
		v-show="loading"
		class="fixed inset-0 flex items-center justify-center z-[999]"
	>
		<div class="absolute inset-0 bg-[rgba(0,0,0,.3)]"></div>
		<div
			class="bg-white p-8 rounded-lg shadow z-10 flex flex-col items-center"
		>
			<div
				class="rounded-full border-4 border-white border-t-gray-700 w-10 h-10 animate-spin"
			></div>
			<h1 class="font-medium text-gray-600 text-sm mt-4">Loading</h1>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import useTemplateStore from './store/useTemplateStore'

const templateStore = useTemplateStore()

const loading = computed(() => templateStore.loading)
</script>
