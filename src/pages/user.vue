<template>
	<AppLayout title="Account Information">
		<template #title-right>
			<h1 class="text-sm font-light dark:text-gray-200">
				Account identity:
				<span class="bg-green-500 text-white px-2 py-1 rounded ml-2">
					{{ user.userCode }}
				</span>
			</h1>
		</template>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<Card title="General Information">
				<div class="mb-6">
					<Input label="Name:" v-model="user.name" disabled />
				</div>
				<div class="mb-6">
					<Input
						label="Company Name:"
						v-model="user.companyName"
						disabled
					/>
				</div>
				<div class="mb-6">
					<Input
						label="Credit Limit:"
						v-model="user.creditLimit"
						type="number"
						disabled
					/>
				</div>
			</Card>
			<Card title="Marketing Settings">
				<div class="mb-6">
					<Checkbox
						label="Marketing Emails"
						v-model="user.marketingEmailEnabled"
						disabled
						id="marketing-emails"
					/>
				</div>
				<div class="mb-6">
					<Checkbox
						label="Marketing Notifications"
						v-model="user.marketingNotificationEnabled"
						disabled
						id="marketing-notifications"
					/>
				</div>
				<div class="mb-6">
					<Checkbox
						label="Marketing SMS"
						v-model="user.marketingSmsEnabled"
						disabled
						id="marketing-sms"
					/>
				</div>
				<div class="mb-6">
					<Checkbox
						label="Show All Prices Including Vat:"
						v-model="user.showAllPricesIncludingVat"
						disabled
						id="price-including-vat"
					/>
				</div>
			</Card>
			<Card title="Address Information">
				<div class="mb-6">
					<Input label="City:" v-model="user.city" disabled />
				</div>
				<div class="mb-6">
					<Input label="Country:" v-model="user.country" disabled />
				</div>
				<div class="mb-6">
					<Input
						label="Post Code:"
						v-model="user.postCode"
						disabled
					/>
				</div>
				<div class="mb-6">
					<Textarea
						label="Address 1:"
						v-model="user.address1"
						disabled
					/>
				</div>
				<div class="mb-6">
					<Textarea
						label="Address 2:"
						v-model="user.address2"
						disabled
					/>
				</div>
				<div class="mb-6">
					<Textarea
						label="Address 3:"
						v-model="user.address3"
						disabled
					/>
				</div>
			</Card>
			<div class="space-y-6">
				<Card title="Contact Information">
					<div class="mb-6">
						<Input
							label="Email:"
							v-model="user.email"
							type="email"
							disabled
						/>
					</div>
					<div class="mb-6">
						<Input label="Mobile:" v-model="user.mobile" disabled />
					</div>
					<div class="mb-6">
						<Input
							label="Telephone:"
							v-model="user.telephone"
							disabled
						/>
					</div>
					<div class="mb-6">
						<Input
							label="Telephone 2:"
							v-model="user.telephone2"
							disabled
						/>
					</div>
					<div class="mb-6">
						<Input label="Fax:" v-model="user.fax" disabled />
					</div>
				</Card>
				<Card title="Contact Settings">
					<div class="mb-6">
						<Input
							:state="user.contact ? 'success' : 'warning'"
							label="Contact:"
							v-model="user.contact"
							disabled
						/>
					</div>
					<div class="mb-6">
						<Input
							:state="user.contactName ? 'success' : 'warning'"
							label="Contact Name:"
							v-model="user.contactName"
							disabled
						/>
					</div>
					<div class="mb-6">
						<Input
							:state="user.contactEmail ? 'success' : 'warning'"
							label="Contact Email:"
							v-model="user.contactEmail"
							type="email"
							disabled
						/>
					</div>
				</Card>
			</div>
		</div>
	</AppLayout>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import AppLayout from '../layouts/AppLayout.vue'
import useUserStore from '../store/useUserStore'
import Card from '../components/Card.vue'
import Input from '../components/form/Input.vue'
import Checkbox from '../components/form/Checkbox.vue'
import Textarea from '../components/form/Textarea.vue'

const userStore = useUserStore()

const baseUser = computed(() => userStore.user)

const user = ref({})

onBeforeMount(() => {
	user.value = { ...baseUser.value }
})
</script>
