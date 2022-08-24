<template>
	<Label v-if="label">
		{{ label }}
	</Label>
	<input
		:required="required"
		:type="type"
		:value="modelValue"
		@input="updateValue"
		:placeholder="placeholder"
		:disabled="disabled"
		class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed"
		:class="{
			'border-gray-300': state === '',
			'border-green-400': state === 'success',
			'border-yellow-400': state === 'warning',
			'border-red-400': state === 'danger',
		}"
	/>
</template>

<script setup>
import Label from './Label.vue'
const { label, modelValue, type, placeholder, required, disabled, state } =
	defineProps({
		modelValue: {
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '',
		},
		required: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		state: {
			type: String,
			default: '',
		},
	})

const emit = defineEmits()

const updateValue = (event) => {
	emit('update:modelValue', event.target.value)
}
</script>
