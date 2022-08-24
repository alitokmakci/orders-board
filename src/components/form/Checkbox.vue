<template>
	<div class="flex items-center mr-4">
		<input
			:id="id"
			@input="updateValue"
			type="checkbox"
			:value="value"
			:checked="isChecked"
			:disabled="disabled"
			class="w-4 h-4 accent-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500"
		/>
		<label
			:for="id"
			class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
		>
			{{ label }}
		</label>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const { label, value, modelValue, trueValue, falseValue, disabled } =
	defineProps({
		modelValue: {
			default: '',
		},
		label: {
			type: String,
			required: true,
		},
		value: {
			type: [String, Number],
		},
		trueValue: { default: true },
		falseValue: { default: false },
		disabled: {
			type: Boolean,
			default: false,
		},
		id: {
			type: String,
			required: true,
		},
	})

const emit = defineEmits()

const isChecked = computed(() => {
	if (modelValue instanceof Array) {
		return modelValue.includes(value)
	}
	return modelValue === trueValue
})

const updateValue = (event) => {
	let isChecked = event.target.checked
	if (modelValue instanceof Array) {
		let newValue = [...modelValue]
		console.log(newValue)
		if (isChecked) {
			newValue.push(value)
		} else {
			newValue.splice(newValue.indexOf(value), 1)
		}
		emit('update:modelValue', newValue)
	} else {
		emit('update:modelValue', isChecked ? trueValue : falseValue)
	}
}
</script>
