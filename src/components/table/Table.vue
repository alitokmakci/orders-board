<template>
	<div
		class="relative overflow-x-auto overflow-y-hidden shadow sm:rounded-lg"
	>
		<table
			class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
		>
			<thead
				class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
			>
				<tr>
					<slot name="head" />
				</tr>
			</thead>
			<tbody>
				<slot />
			</tbody>
		</table>
	</div>
</template>
