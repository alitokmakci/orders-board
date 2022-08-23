<template>
	<div>
		<slot />
	</div>
</template>

<script setup>
import { computed, watch } from 'vue'
import useTemplateStore from '../store/useTemplateStore'

const templateStore = useTemplateStore()
</script>
