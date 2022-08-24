<template>
	<AppLayout title="Orders">
		<Card class="mb-6" title="Options">
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				<div class="mb-6">
					<Input label="End Date:" type="date" v-model="endDate" />
				</div>
			</div>
			<p class="text-sm text-red-500">
				*Default value of the `End Date` is yesterday for listing past
				orders
			</p>
			<div class="flex justify-end">
				<Button variant="blue" @click="fetchOrders"> Filter </Button>
			</div>
		</Card>
		<Table>
			<template #head>
				<Heading>#</Heading>
				<Heading>Name</Heading>
				<Heading>Order Date</Heading>
				<Heading>Delivery Date</Heading>
				<Heading>Sub Total</Heading>
				<Heading>VAT Total</Heading>
				<Heading>Total</Heading>
				<Heading>Status</Heading>
				<Heading action></Heading>
			</template>

			<TRow v-for="order in orders">
				<Cell scoped>
					{{ order.id }}
				</Cell>
				<Cell>
					{{ order.orderName }}
				</Cell>
				<Cell>
					{{ moment(order.orderDate).format('LLLL') }}
				</Cell>
				<Cell>
					{{ moment(order.deliveryDate).format('LLLL') }}
				</Cell>
				<Cell>
					{{ order.subTotal }}
				</Cell>
				<Cell>
					{{ order.vatTotal }}
				</Cell>
				<Cell>
					<b>{{ order.total }}</b>
				</Cell>
				<Cell>
					<OrderStatusBadge :status="order.status" />
				</Cell>
				<Cell>
					<Dropdown title="Options">
						<DropdownItem @click="showNotImplemented">
							Show Details
						</DropdownItem>
						<DropdownItem @click="showNotImplemented">
							Change Status
						</DropdownItem>
						<DropdownItem @click="showNotImplemented">
							Delete Order
						</DropdownItem>
					</Dropdown>
				</Cell>
			</TRow>
		</Table>
	</AppLayout>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import moment from 'moment'
import useOrderStore from '../store/useOrdersStore'
import AppLayout from '../layouts/AppLayout.vue'
import Card from '../components/Card.vue'
import Table from '../components/table/Table.vue'
import TRow from '../components/table/Row.vue'
import Heading from '../components/table/Heading.vue'
import Cell from '../components/table/Cell.vue'
import toaster from '../utils/toaster'
import Dropdown from '../components/Dropdown.vue'
import DropdownItem from '../components/DropdownItem.vue'
import Input from '../components/form/Input.vue'
import Button from '../components/Button.vue'
import OrderStatusBadge from '../components/OrderStatusBadge.vue'

const orderStore = useOrderStore()

const yesterday = computed(() => {
	let date = new Date()

	date.setDate(date.getDate() - 1)
	return date
})

const endDate = ref('')

const orders = computed(() => orderStore.orders)

const showNotImplemented = () => {
	toaster.warning('This action is not implemented yet!')
}

const fetchOrders = async () => {
	await orderStore.fetchOrders({
		endDate: endDate.value,
	})
}

onBeforeMount(async () => {
	endDate.value = yesterday.value.toISOString().split('T')[0]

	await fetchOrders()
})
</script>
