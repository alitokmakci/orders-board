<template>
	<label
		v-if="label"
		class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
	>
		{{ label }}
	</label>
	<input
		:required="required"
		:type="type"
		:value="modelValue"
		@input="updateValue"
		:placeholder="placeholder"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	/>
</template>

<script setup>
const { label, modelValue, type, placeholder, required } = defineProps({
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
})

const emit = defineEmits()

const updateValue = (event) => {
	emit('update:modelValue', event.target.value)
}
</script>
