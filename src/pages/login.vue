<template>
	<div
		class="h-screen w-screen flex flex-col items-center justify-center px-8"
	>
		<div class="mb-8 text-center">
			<h1 class="font-medium text-2xl text-gray-500 text-center">
				Welcome to OrdersBoard
			</h1>
			<p class="font-extralight">
				You can list your orders and products with this panel.
			</p>
		</div>
		<div class="bg-white w-full md:w-[30rem] rounded-md">
			<div class="px-6 py-4">
				<h1 class="text-xl text-center">Login with Credentials</h1>
			</div>
			<div class="p-6">
				<Alert v-if="error" :message="error" />
				<Form id="login-form" :onSubmit="login">
					<div class="mb-6">
						<Input
							required
							label="E-mail:"
							type="email"
							placeholder="oliverjones@gmail.com"
							v-model="credentials.email"
						/>
					</div>
					<div class="mb-6">
						<Input
							required
							label="Password:"
							type="password"
							placeholder="123123"
							v-model="credentials.password"
						/>
					</div>
					<div class="mb-6 flex justify-end">
						<a href="#" class="font-medium text-blue-500 text-sm">
							Forgot Password?
						</a>
					</div>
					<div>
						<Button
							type="submit"
							variant="blue"
							class="block w-full"
						>
							Login Dashboard
						</Button>
					</div>
				</Form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '../store/useUserStore'
import Input from '../components/form/Input.vue'
import Form from '../components/form/Form.vue'
import Button from '../components/Button.vue'
import Alert from '../components/Alert.vue'

const router = useRouter()

const userStore = useUserStore()

const credentials = reactive({
	email: '',
	password: '',
})

const error = ref('')

const login = async () => {
	error.value = ''
	try {
		const result = await userStore.login(credentials)
		if (result) {
			await userStore.fetchUser()
			router.push('/')
		}
	} catch (e) {
		error.value = e
	}
}
</script>
