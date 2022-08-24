<template>
	<AppLayout title="Dashboard">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
			<Card>
				<div class="grid grid-cols-4 gap-6">
					<div class="p-2">
						<div
							class="bg-indigo-50 flex items-center justify-center w-12 h-12 rounded-full"
						>
							<i
								class="ri-barcode-line text-2xl text-indigo-600"
							></i>
						</div>
					</div>
					<div class="col-span-3 flex flex-col justify-center">
						<h1
							class="text-black text-lg font-bold dark:text-gray-100"
						>
							4589
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light"
						>
							Products
						</span>
					</div>
				</div>
			</Card>
			<Card>
				<div class="grid grid-cols-4 gap-6">
					<div class="p-2">
						<div
							class="bg-green-50 flex items-center justify-center w-12 h-12 rounded-full"
						>
							<i
								class="ri-money-pound-circle-line text-2xl text-green-600"
							></i>
						</div>
					</div>
					<div class="col-span-3 flex flex-col justify-center">
						<h1
							class="text-black text-lg font-bold dark:text-gray-100"
						>
							£ 56987
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light"
						>
							Total Sales
						</span>
					</div>
				</div>
			</Card>
			<Card>
				<div class="grid grid-cols-4 gap-6">
					<div class="p-2">
						<div
							class="bg-yellow-50 flex items-center justify-center w-12 h-12 rounded-full"
						>
							<i
								class="ri-truck-line text-2xl text-yellow-600"
							></i>
						</div>
					</div>
					<div class="col-span-3 flex flex-col justify-center">
						<h1
							class="text-black text-lg font-bold dark:text-gray-100"
						>
							8920
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light"
						>
							Delivered Orders
						</span>
					</div>
				</div>
			</Card>
			<Card>
				<div class="grid grid-cols-4 gap-6">
					<div class="p-2">
						<div
							class="bg-blue-50 flex items-center justify-center w-12 h-12 rounded-full"
						>
							<i
								class="ri-shopping-basket-line text-2xl text-blue-600"
							></i>
						</div>
					</div>
					<div class="col-span-3 flex flex-col justify-center">
						<h1
							class="text-black text-lg font-bold dark:text-gray-100"
						>
							128
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light"
						>
							Pending Orders
						</span>
					</div>
				</div>
			</Card>
		</div>
	</AppLayout>
</template>

<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import Card from '../components/Card.vue'
</script>
