<template>
	<div @click="click" class="red">test {{ msg }}...</div>
</template>

<script>
export default {
	name: 'test',
	props: {
		msg: {
			type: String,
			default: 'test msg'
		}
	},
	methods: {
		click: function() {
			alert('click!' + this.msg);
		}
	}
};
</script>

<style>
	.red {
		color: red;
	}
</style>
