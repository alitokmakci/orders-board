<template>
	<label
		v-if="label"
		class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
	>
		{{ label }}
	</label>
	<select
		:disabled="disabled"
		:value="modelValue"
		@change="updateValue"
		class="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none disabled:cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	>
		<slot />
	</select>
</template>

<script setup>
const { label, modelValue, disabled, onChange } = defineProps({
	modelValue: '',
	label: {
		type: String,
		default: '',
	},
	disabled: {
		default: false,
		type: Boolean,
	},
	onChange: {
		type: Function,
		default: () => {},
	},
})

const emit = defineEmits()

const updateValue = (event) => {
	emit('update:modelValue', event.target.value)
	onChange()
}
</script>
