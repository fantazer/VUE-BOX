<template>
	<div class="main-cont">
		<svg-icon name="star"></svg-icon>
		
	</div>
</template>

<script>


export default {
	name: 'App',
	components: {
	},
	data() {
		return {
			activeModal: ''
		}
	},
	methods: {
		initModal(el) {
			return this.activeModal = el;
		},
	},
}
</script>

<style lang="stylus">
</style>