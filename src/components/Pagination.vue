<template>
	<nav aria-label="Page navigation example">
		<ul class="flex -space-x-px">
			<li class="block">
				<a
					@click="goPrev"
					href="#"
					class="block py-2 px-2 leading-tight rounded-l-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
					:class="{
						'text-gray-300 bg-gray-100 cursor-default':
							currentPage === 1,
						'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
							currentPage !== 1,
					}"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
			</li>
			<li v-for="page in pages" :key="page" class="block">
				<a
					@click="goToPage(page)"
					href="#"
					class="py-2 px-4 md:px-3 items-center justify-center leading-tight border border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					:class="{
						'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-700 flex':
							page === currentPage,
						'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 hidden md:block':
							page !== currentPage && page !== '...',
						'text-gray-300 cursor-default bg-gray-100 dark:bg-gray-800 hidden md:block':
							page === '...',
					}"
				>
					{{ page }}
				</a>
			</li>
			<li class="block">
				<a
					@click="goNext"
					href="#"
					class="block py-2 px-2 leading-tight rounded-r-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
					:class="{
						'text-gray-300 bg-gray-100 cursor-default':
							currentPage === lastPage,
						'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
							currentPage !== lastPage,
					}"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
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
