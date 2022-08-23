<template>
	<div class="flex items-center h-16">
		<div class="container px-6 mx-auto">
			<div
				class="flex items-center justify-between text-sm font-medium text-gray-700"
			>
				<Button
					@click="handleToggle"
					variant="text"
					size="sm"
					class="text-lg"
				>
					<i class="ri-menu-line"></i>
				</Button>

				<div class="flex items-center">
					<Button
						@click="handleSwitchTheme"
						variant="text"
						size="sm"
						class="text-lg"
					>
						<i :class="darkModeIcon"></i>
					</Button>
					Kullanıcı Adı
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import useTemplateStore from '../store/useTemplateStore'
import Button from './Button.vue'

const templateStore = useTemplateStore()

const handleToggle = () => {
	templateStore.toggleSidebar()
}

const handleSwitchTheme = () => {
	templateStore.setDarkMode()
}

const darkModeIcon = computed(() => {
	return templateStore.isDarkModeEnabled ? 'ri-moon-line' : 'ri-sun-line'
})
</script>
