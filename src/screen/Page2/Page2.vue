<template>
	<body>
		<AppHeader />
		<AppWallpaper />
		<AppFooter />
		<!-- <ButtonModal
			@on-click-1="onClick1"
			@on-click-2="onClick2"
			:buttonName="buttonName"
		></ButtonModal> -->
	</body>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from "../../components/AppHeader/AppHeader.vue";
import AppWallpaper from "../../components/AppWallpaper/AppWallpaper.vue";
import AppFooter from "../../components/AppFooter/AppFooter.vue";
// import ButtonModal from "../../components/button/button.vue";
export default {
	name: "PageTwo",
	components: {
		// HelloWorld,
		// eslint-disable-next-line vue/no-unused-components
		AppHeader,
		// eslint-disable-next-line vue/no-unused-components
		AppWallpaper,
		AppFooter,
		// ButtonModal,
	},
	data() {
		return {
			buttonName: "Tue deptrai",
		};
	},
	methods: {
		onClick1(transferData) {
			console.log("hello world", transferData);
		},
		onClick2(transferQoute) {
			console.log("thay huan:", transferQoute);
		},
	},
};
</script>

<style></style>
