<template>
	<AppLayout title="Products">
		<Card class="mb-6" title="Options">
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				<div class="mb-6">
					<Select
						label="Sayfa Başına Veri:"
						v-model="perPage"
						:onChange="fetchProducts"
					>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</Select>
				</div>
			</div>
		</Card>
		<Table>
			<template #head>
				<Heading>#</Heading>
				<Heading>Code</Heading>
				<Heading>Type</Heading>
				<Heading>Stock Status</Heading>
				<SortableHeading
					:key="sortBy"
					:sort-by="sortBy"
					sort-key="PRICE"
					@sort="handleSort('PRICE')"
				>
					Price
				</SortableHeading>
				<Heading>VAT</Heading>
				<Heading>New Product</Heading>
				<Heading action></Heading>
			</template>

			<TRow v-for="product in products">
				<Cell scoped>
					{{ product.id }}
				</Cell>
				<Cell>
					{{ product.code }}
				</Cell>
				<Cell>
					{{ product.itemType }}
				</Cell>
				<Cell>
					<StockStatusBadge :status="product.stockStatus.available" />
				</Cell>
				<Cell>
					{{ product.price.price.price }}
				</Cell>
				<Cell>
					{{ product.vat }}
				</Cell>
				<Cell>
					<NewProductBadge :status="product.isNew" />
				</Cell>
				<Cell>
					<Dropdown title="Options">
						<DropdownItem @click="showNotImplemented">
							Show Details
						</DropdownItem>
						<DropdownItem @click="showNotImplemented">
							Delete Product
						</DropdownItem>
					</Dropdown>
				</Cell>
			</TRow>
		</Table>
		<div
			class="mt-6 flex lg:flex-row flex-col items-center justify-between"
		>
			<ResultsText
				:page="page"
				:per-page="perPage"
				:total="totalProducts"
			/>

			<Pagination
				v-if="products.length"
				:total="totalProducts"
				:current-page="page"
				:per-page="perPage"
				:key="page"
				@changePage="handlePageChange"
			/>
		</div>
	</AppLayout>
</template>

<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import Table from '../components/table/Table.vue'
import Heading from '../components/table/Heading.vue'
import useProductStore from '../store/useProductsStore'
import { computed, onBeforeMount, ref, watch } from 'vue'
import TRow from '../components/table/Row.vue'
import Cell from '../components/table/Cell.vue'
import Dropdown from '../components/Dropdown.vue'
import DropdownItem from '../components/DropdownItem.vue'
import StockStatusBadge from '../components/StockStatusBadge.vue'
import toaster from '../utils/toaster'
import Pagination from '../components/Pagination.vue'
import ResultsText from '../components/ResultsText.vue'
import Card from '../components/Card.vue'
import Select from '../components/form/Select.vue'
import SortableHeading from '../components/table/SortableHeading.vue'
import NewProductBadge from '../components/NewProductBadge.vue'

const productStore = useProductStore()

const page = ref(1)
const perPage = ref(10)
const sortBy = ref('')

const products = computed(() => productStore.products)

const totalProducts = computed(() => productStore.count)

const showNotImplemented = () => {
	toaster.warning('This action is not implemented yet!')
}

const fetchProducts = async () => {
	await productStore.fetchProducts({
		index: page.value * perPage.value,
		limit: perPage.value,
		sortBy: sortBy.value,
	})
}

const handlePageChange = async (_page) => {
	page.value = _page

	await fetchProducts()
}

const handleSort = (sortKey) => {
	if (!sortBy.value.includes(sortKey)) {
		sortBy.value = `${sortKey}_ASC`

		return
	}

	if (sortBy.value.endsWith('ASC')) {
		sortBy.value = `${sortKey}_DESC`

		return
	}

	sortBy.value = ''

	return
}

onBeforeMount(async () => {
	await fetchProducts()
})

watch(
	() => sortBy.value,
	async () => {
		await fetchProducts()
	}
)
</script>
