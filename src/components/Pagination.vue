<template>
	<nav aria-label="Page navigation example">
		<ul class="inline-flex -space-x-px">
			<li>
				<a
					@click="goPrev"
					href="#"
					class="py-2 px-3 ml-0 leading-tight rounded-l-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
					:class="{
						'text-gray-300 bg-gray-100 cursor-default':
							currentPage === 1,
						'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
							currentPage !== 1,
					}"
				>
					Previous
				</a>
			</li>
			<li v-for="page in pages" :key="page">
				<a
					@click="goToPage(page)"
					href="#"
					class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					:class="{
						'text-blue-600 bg-blue-50': page === currentPage,
						'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700':
							page !== currentPage && page !== '...',
						'text-gray-300 cursor-default bg-gray-100':
							page === '...',
					}"
				>
					{{ page }}
				</a>
			</li>
			<li>
				<a
					@click="goNext"
					href="#"
					class="py-2 px-3 leading-tight rounded-r-lg border border-gray-300 dark:border-gray-700"
					:class="{
						'text-gray-300 bg-gray-100 cursor-default':
							currentPage === lastPage,
						'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
							currentPage !== lastPage,
					}"
				>
					Next
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { computed } from 'vue'

const { total, perPage, currentPage } = defineProps({
	total: {
		type: Number,
		required: true,
	},
	perPage: {
		type: Number,
		required: true,
	},
	currentPage: {
		type: Number,
		required: true,
	},
})

const pages = computed(() => {
	const result = []
	let beforeDots = false
	let afterDots = false

	for (let i = 1; i <= lastPage.value; i++) {
		if (i === 1) {
			result.push(i)
			continue
		}

		if (i === lastPage.value) {
			result.push(i)
			continue
		}

		if (i === currentPage) {
			result.push(i)
			continue
		}

		if (i >= currentPage - 3 && i < currentPage) {
			if (!beforeDots && i === currentPage - 3) {
				result.push('...')
				beforeDots = true
			}
			result.push(i)
			continue
		}

		if (i <= currentPage + 3 && i > currentPage) {
			result.push(i)
			if (!afterDots && i === currentPage + 3) {
				result.push('...')
				afterDots = true
			}
			continue
		}
	}

	return result
})

const lastPage = computed(() => Math.floor(total / perPage))

const emit = defineEmits(['changePage'])

const goToPage = (page) => {
	if (page === '...') {
		return
	}

	if (currentPage === page) {
		return
	}

	changePage(page)
}

const goNext = () => {
	if (currentPage === lastPage.value) {
		return
	}

	changePage(currentPage + 1)
}

const goPrev = () => {
	if (currentPage === 1) {
		return
	}

	changePage(currentPage - 1)
}

const changePage = (page) => {
	emit('changePage', page)
}
</script>
