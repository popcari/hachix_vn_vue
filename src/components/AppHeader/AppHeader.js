export default {
	name: "AppHeader",
	data() {
		return {
			pageItems: [
				{
					name: "Home",
					url: "/",
				},
				{
					name: "Info",
					url: "/info",
				},
				{
					name: "Staff",
					url: "/staff",
				},
			],
		};
	},
	methods: {
		goToPage(Name) {
			this.$router.push({ name: Name });
		},
		goToHome() {
			// router.push(path or name): optional
			this.$router.push({ path: "/" });
		},
	},
};
