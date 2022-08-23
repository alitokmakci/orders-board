<template>
	<li>
		<router-link
			:to="to"
			class="sidebar-item flex items-center px-3 py-2 transition-all rounded hover:text-gray-700 dark:hover:text-white"
		>
			<i
				v-if="icon"
				class="mr-2 text-blue-600 dark:text-blue-500"
				:class="icon"
			></i>
			<span class="text-sm font-semibold">
				<slot />
			</span>
		</router-link>
	</li>
</template>

<script setup>
const { to, title, icon, group, subPaths } = defineProps({
	to: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
	icon: {
		type: String,
		default: '',
	},
})
</script>
