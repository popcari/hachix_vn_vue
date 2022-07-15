import AppInfo_table from "../AppInfo_table/AppInfo_table";
export default {
	name: "Lightbox",
	component: { AppInfo_table },
	props: {
		staff: {
			type: Object,
		},
		
	},
	data() {
		return {};
	},
	methods: {
		showInfo() {},
		close() {
			this.$emit("close");
		},
	},
};
