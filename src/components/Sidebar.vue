<template>
	<div
		class="h-screen transition-all border-r border-gray-300 dark:border-slate-700"
		:class="{
			'min-w-[16rem] translate-x-0': open,
			'min-w-[0] w-0 -translate-x-64': !open,
		}"
	>
		<div class="flex items-center h-16">
			<h1
				class="ml-6 text-xl font-semibold tracking-wider text-gray-600 dark:text-gray-200"
			>
				OrderHUB
			</h1>
		</div>
		<div class="p-5">
			<ul class="space-y-2">
				<slot />
			</ul>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import useTemplateStore from '../store/useTemplateStore'

const templateStore = useTemplateStore()

const open = computed(() => templateStore.isSidebarOpen)
</script>
