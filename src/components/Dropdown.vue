<template>
	<div data-el="dropdown" v-on-click-outside="() => open && toggle(false)">
		<slot name="trigger">
			<a
				href="javascript:;"
				@click="toggle()"
				ref="triggerItem"
				:class="
					triggerClass ? triggerClass : 'font-semibold text-blue-500'
				"
			>
				{{ title }}
			</a>
		</slot>
		<ul
			:class="{
				invisible: !open,
			}"
			class="absolute z-10 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 rounded shadow w-44"
			ref="menuItem"
			@click="toggle(false)"
		>
			<slot />
		</ul>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { createPopper } from '@popperjs/core'
import { vOnClickOutside } from '@vueuse/components'

const { title, triggerClass } = defineProps({
	title: {
		type: String,
		default: '',
	},
	triggerClass: {
		type: String,
		default: '',
	},
})

const menuItem = ref(null)
const triggerItem = ref(null)

const open = ref(false)

const toggle = (value = null) => {
	if (value === null) {
		open.value = !open.value
	} else {
		open.value = value
	}
}

const popper = computed(() => {
	return createPopper(triggerItem.value, menuItem.value, {
		placement: 'bottom-start',
		strategy: 'fixed', // To prevent overflow
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 8],
				},
			},
			{
				name: 'preventOverflow',
				options: {
					boundary: 'window',
				},
			},
		],
	})
})

onMounted(() => {
	popper.value.update()
})
</script>
