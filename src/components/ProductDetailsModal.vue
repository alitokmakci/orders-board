<template>
	<Modal
		v-if="product"
		@close="emit('close')"
		title="Product Details"
		no-footer
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<DetailText attribute="ID" :value="product.id" />
			<DetailText attribute="Code" :value="product.code" />
			<DetailText attribute="Price" :value="product.price.price.price" />
			<DetailText attribute="VAT" :value="product.vat" />
			<DetailText attribute="Type" :value="product.itemType" />
			<DetailText attribute="Catalog Code" :value="product.catalogCode" />
			<DetailText attribute="Barcode 1" :value="product.barcode1" />
			<DetailText attribute="Barcode 2" :value="product.barcode2" />
			<DetailText
				attribute="Stock Status"
				:value="
					product.stockStatus.available
						? 'Available'
						: 'Not Available'
				"
			/>
			<DetailText
				attribute="Product Status"
				:value="product.isNew ? 'New' : 'Old'"
			/>
		</div>
	</Modal>
</template>

<script setup>
import Modal from './Modal.vue'
import DetailText from './DetailText.vue'

const { product } = defineProps({
	product: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['close'])
</script>
