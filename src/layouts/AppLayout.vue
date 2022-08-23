<template>
	<div class="flex w-screen h-screen overflow-hidden">
		<Sidebar>
			<SidebarItem to="/" icon="ri-dashboard-fill">Dashboard</SidebarItem>
			<SidebarItem to="/orders" icon="ri-shopping-basket-fill">
				Orders
			</SidebarItem>
			<SidebarItem to="/products" icon="ri-barcode-fill">
				Products
			</SidebarItem>
		</Sidebar>

		<div class="w-full overflow-y-scroll">
			<Header />
			<div class="container px-6 py-4 mx-auto mb-10">
				<div class="flex items-center justify-between mb-8">
					<h1
						class="text-2xl font-semibold text-gray-600 dark:text-gray-300"
					>
						{{ title }}
					</h1>

					<slot name="title-button" />
				</div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import SidebarItem from '../components/SidebarItem.vue'
const { title } = defineProps({
	title: {
		type: String,
		default: '',
	},
})
</script>
