<template>
	<Modal
		v-if="product"
		@close="emit('close')"
		title="Product Details"
		no-footer
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<ProductDetailAttribute attribute="ID" :value="product.id" />
			<ProductDetailAttribute attribute="Code" :value="product.code" />
			<ProductDetailAttribute
				attribute="Price"
				:value="product.price.price.price"
			/>
			<ProductDetailAttribute attribute="VAT" :value="product.vat" />
			<ProductDetailAttribute
				attribute="Type"
				:value="product.itemType"
			/>
			<ProductDetailAttribute
				attribute="Catalog Code"
				:value="product.catalogCode"
			/>
			<ProductDetailAttribute
				attribute="Barcode 1"
				:value="product.barcode1"
			/>
			<ProductDetailAttribute
				attribute="Barcode 2"
				:value="product.barcode2"
			/>
			<ProductDetailAttribute
				attribute="Stock Status"
				:value="
					product.stockStatus.available
						? 'Available'
						: 'Not Available'
				"
			/>
			<ProductDetailAttribute
				attribute="Product Status"
				:value="product.isNew ? 'New' : 'Old'"
			/>
		</div>
	</Modal>
</template>

<script setup>
import Modal from './Modal.vue'
import ProductDetailAttribute from './ProductDetailAttribute.vue'

const { product } = defineProps({
	product: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['close'])
</script>
