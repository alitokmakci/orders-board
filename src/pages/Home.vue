<template>
	<AppLayout title="Dashboard">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<Card>
				<h1>Products</h1>
			</Card>
			<Card><h1>Orders</h1></Card>
			<Card><h1>Passed Orders</h1></Card>
			<Card><h1>Today's Orders</h1></Card>
		</div>
	</AppLayout>
</template>

<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import Card from '../components/Card.vue'
</script>
