<template>
	<button @click="onClick1">{{ buttonName }}</button>
	<button @click="onClick2">ashdjaskhd</button>
</template>

<script>
export default {
	name: "ButtonModal",
	props: {
		buttonName: {
			type: String,
		},
	},
	data() {},
	methods: {
		onClick1() {
			console.log("hello");
			this.$emit("on-click-1", "chao anh tue");
		},
		onClick2() {
			console.log("CAC");
			this.$emit("on-click-2", "oi doi oi");
		},
	},
};
</script>

<style>
button {
	height: 50px;
	width: 200px;
}
</style>
