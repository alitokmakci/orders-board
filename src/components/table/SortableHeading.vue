<template>
	<th class="px-6 py-3" scope="col">
		<div class="flex items-center cursor-pointer" @click="handleSort">
			<slot />
			<div class="flex flex-col">
				<i
					class="ri-arrow-up-s-fill"
					:class="{
						'text-gray-300': !ascending,
						'text-black': ascending,
					}"
				></i>
				<i
					class="ri-arrow-down-s-fill -mt-3"
					:class="{
						'text-gray-300': !descending,
						'text-black': descending,
					}"
				></i>
			</div>
		</div>
	</th>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['sort'])

const { sortKey, sortBy } = defineProps({
	sortKey: {
		type: String,
		required: true,
	},
	sortBy: {
		type: String,
		required: true,
	},
})

const handleSort = () => {
	emit('sort', sortKey)
}

const ascending = computed(() => {
	return sortBy.includes(sortKey) && sortBy.endsWith('ASC')
})

const descending = computed(() => {
	return sortBy.includes(sortKey) && sortBy.endsWith('DESC')
})
</script>
