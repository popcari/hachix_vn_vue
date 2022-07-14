<template>
	<body>
		<AppHeader />
		<AppInfo_table> </AppInfo_table>
		<LightboxModal></LightboxModal>
		<AppFooter />
	</body>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from "../../components/AppHeader/AppHeader.vue";
import AppFooter from "../../components/AppFooter/AppFooter.vue";
import AppInfo_table from "@/components/AppInfo_table/AppInfo_table.vue";
import LightboxModal from "@/components/LightboxModal/LightboxModal.vue";
export default {
	name: "PageThree",
	components: {
		// HelloWorld,
		// eslint-disable-next-line vue/no-unused-components
		AppHeader,
		// eslint-disable-next-line vue/no-unused-components
		AppFooter,
		AppInfo_table,
		LightboxModal,
	},
};
</script>

<style></style>
