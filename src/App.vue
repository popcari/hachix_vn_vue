<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>


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
