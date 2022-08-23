<template>
	<div class="h-screen w-screen flex items-center justify-center">
		<div class="bg-white w-[30rem] rounded-md dark:bg-slate-800">
			<div class="px-6 py-3">
				<h1 class="text-xl font-medium dark:text-gray-50">
					Login to Dashboard
				</h1>
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
					<div class="flex items-center justify-end">
						<Button type="submit" variant="blue">Login</Button>
					</div>
				</Form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import gql from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'
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

const login = () => {
	error.value = ''
	loginMutation()
}

const {
	mutate: loginMutation,
	onDone,
	onError,
} = useMutation(
	gql`
		mutation login($email: String!, $password: String!) {
			login(email: $email, password: $password)
		}
	`,
	() => ({
		variables: {
			email: credentials.email,
			password: credentials.password,
		},
	})
)

onDone((res) => {
	const token = res.data.login
	Cookies.set('token', token)
	userStore.fetchUser(token)

	router.push('/')
})

onError((e) => {
	error.value = JSON.parse(e.message).message
})
</script>
