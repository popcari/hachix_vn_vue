<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
// import PageThree from './screen/Page3/Page3.vue';
// import PageTwo from "./screen/Page2/Page2.vue"
// import PageOne from './screen/Page1/Page1.vue';

export default {
	name: "App",
	components: {
		// eslint-disable-next-line vue/no-unused-components
		// PageThree,
		// PageTwo,
		// PageOne
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
body {
	margin: 0;
}
</style>
