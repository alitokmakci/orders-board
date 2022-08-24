<template>
	<Label v-if="label">
		{{ label }}
	</Label>
	<textarea
		:rows="rows"
		@input="updateValue"
		:disabled="disabled"
		class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>{{ modelValue }}</textarea
	>
</template>

<script setup>
import Label from './Label.vue'
const { label, modelValue, rows, disabled } = defineProps({
	modelValue: '',
	label: {
		type: String,
		default: '',
	},
	rows: {
		type: String,
		default: '5',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits()

const updateValue = (event) => {
	emit('update:modelValue', event.target.value)
}
</script>
