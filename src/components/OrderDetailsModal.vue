<template>
	<Modal v-if="order" @close="emit('close')" title="Order Details" no-footer>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
			v-for="(detail, index) in order.details"
			:key="index"
		>
			<DetailText attribute="ID" :value="detail.id" />
			<DetailText attribute="Unit" :value="detail.unit" />
			<DetailText attribute="Quantity" :value="detail.quantity" />
			<DetailText attribute="Price" :value="detail.price" />
			<DetailText attribute="VAT Rate" :value="detail.vatRate" />
			<DetailText attribute="Sub Total" :value="detail.subTotal" />
			<DetailText
				attribute="Discount Total"
				:value="detail.discountTotal"
			/>
			<DetailText attribute="VAT Total" :value="detail.vatTotal" />
			<DetailText attribute="Total" :value="detail.total" />
			<DetailText
				v-if="detail.product"
				attribute="Product ID"
				:value="detail.product.id"
			/>
			<DetailText
				v-if="detail.product"
				attribute="Product Code"
				:value="detail.product.code"
			/>
			<DetailText
				v-if="detail.product"
				attribute="Stock Status"
				:value="
					detail.product.stockStatus.available
						? 'Available'
						: 'Not Available'
				"
			/>
			<hr class="md:col-span-2 lg:col-span-4" />
		</div>
	</Modal>
</template>

<script setup>
import Modal from './Modal.vue'
import DetailText from './DetailText.vue'

const { order } = defineProps({
	order: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['close'])
</script>
