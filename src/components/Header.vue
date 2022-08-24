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
						class="text-lg mr-4"
					>
						<i :class="darkModeIcon"></i>
					</Button>
					<Dropdown :title="user.name">
						<DropdownItem as="link" to="/user">
							Account
						</DropdownItem>
						<DropdownItem> Logout </DropdownItem>
					</Dropdown>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import useTemplateStore from '../store/useTemplateStore'
import useUserStore from '../store/useUserStore'
import Button from './Button.vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

const templateStore = useTemplateStore()
const userStore = useUserStore()

const handleToggle = () => {
	templateStore.toggleSidebar()
}

const handleSwitchTheme = () => {
	templateStore.setDarkMode()
}

const darkModeIcon = computed(() => {
	return templateStore.isDarkModeEnabled ? 'ri-moon-line' : 'ri-sun-line'
})

const user = computed(() => userStore.user)
</script>
