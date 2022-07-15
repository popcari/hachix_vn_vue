<template>
	<body>
		<div>
			<AppHeader />
			<AppInfo_table
				@figureclick1="figureclick1"
				@figureclick2="figureclick2"
				@figureclick3="figureclick3"
				@figureclick4="figureclick4"
				@figureclick5="figureclick5"
			>
			</AppInfo_table>

			<!-- <ButtonModal :buttonName="buttonName"></ButtonModal> -->
			<AppFooter />
		</div>
	</body>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from "../../components/AppHeader/AppHeader.vue";
import AppFooter from "../../components/AppFooter/AppFooter.vue";
import AppInfo_table from "@/components/AppInfo_table/AppInfo_table.vue";

// import ButtonModal from "@/components/button/button.vue";
export default {
	name: "PageThree",
	components: {
		AppHeader,
		AppFooter,
		AppInfo_table,
		// ButtonModal,
	},
	data() {
		return {
			buttonName: "button1",
		};
	},
	methods: {
		lightboxClose() {
			this.show = false;
		},
		figureclick1() {
			this.show = true;
		},
		figureclick2() {
			this.show = true;
		},
		figureclick3() {
			this.show = true;
		},
		figureclick4() {
			this.show = true;
		},
		figureclick5() {
			this.show = true;
		},
	},
};
</script>

<style></style>
