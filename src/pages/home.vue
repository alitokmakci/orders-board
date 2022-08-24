<template>
	<AppLayout title="Dashboard">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
			<Card class="hover:scale-105 transition-all">
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
							class="text-black text-lg font-bold dark:text-gray-100 select-none"
						>
							4589
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light select-none"
						>
							Products
						</span>
					</div>
				</div>
			</Card>
			<Card class="hover:scale-105 transition-all">
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
							class="text-black text-lg font-bold dark:text-gray-100 select-none"
						>
							£ 56987
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light select-none"
						>
							Total Sales
						</span>
					</div>
				</div>
			</Card>
			<Card class="hover:scale-105 transition-all">
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
							class="text-black text-lg font-bold dark:text-gray-100 select-none"
						>
							8920
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light select-none"
						>
							Delivered Orders
						</span>
					</div>
				</div>
			</Card>
			<Card class="hover:scale-105 transition-all">
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
							class="text-black text-lg font-bold dark:text-gray-100 select-none"
						>
							128
						</h1>
						<span
							class="text-sm text-gray-600 dark:text-gray-300 font-light select-none"
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
