<template>
	<div
		class="h-screen transition-all border-r border-gray-300 dark:border-slate-700"
		:class="{
			'md:min-w-[16rem] translate-x-0 min-w-[-webkit-fill-available]':
				open,
			'min-w-[0] w-0 md:-translate-x-64 -translate-x-[100rem]': !open,
		}"
	>
		<div class="flex items-center h-16 justify-between">
			<h1
				class="ml-6 text-xl font-semibold tracking-wider text-gray-600 dark:text-gray-200"
			>
				OrderHUB
			</h1>
			<Button
				@click="handleToggle"
				variant="text"
				size="sm"
				class="text-lg md:hidden mr-4"
			>
				<i class="ri-menu-line"></i>
			</Button>
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
import Button from './Button.vue'

const templateStore = useTemplateStore()

const open = computed(() => templateStore.isSidebarOpen)

const handleToggle = () => {
	templateStore.toggleSidebar()
}
</script>
