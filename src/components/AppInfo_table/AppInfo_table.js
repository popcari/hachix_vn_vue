import LightboxModal from "@/components/LightboxModal/LightboxModal.vue";
export default {
	name: "AppInfo_table",
	components: { LightboxModal },
	data() {
		return {
			show: false,
			staffs: [
				{
					img: "assets/phamductrung.jpg",
					name: "Pham Duc Trung",
					age: 26,
					position: "Fullstack Developer",
					phone: "0123 aaa aaa",
					qoute:
						"Make the pressure to be motivation, don't let them drown you ",
				},
				{
					img: "assets/nguyenhoangtue.jpg",
					name: "Nguyen Hoang Tue",
					age: 25,
					position: "Fullstack Developer",
					phone: "0123 bbb bbb",
					qoute:
						"Find three hobbies you love: one to make you money, one to keep you in shape, and the last one to be creative",
				},
				{
					img: "assets/linhtheduc.jpg",
					name: "Linh The Duc",
					age: 24,
					position: "Android/Ios developer",
					phone: "0123 ccc ccc",
					qoute: "In order to SUCCEED, we must believe that we can",
				},
				{
					img: "assets/nguyenthanhduy.jpg",
					name: "Nguyen Thanh Duy",
					age: 24,
					position: "Trainee",
					phone: "0123 ddd ddd",
					qoute:
						"When you think it's too late for something new, it's time to start it",
				},
				{
					img: "assets/nguyenkhacdung.jpg",
					name: "Nguyen Khac Dung",
					age: 21,
					position: "Part-time",
					phone: "0123 eee eee",
					qoute:
						"Over-thinking ruins you. Ruins the situation, twists things around, makes you worry and just makes everything much worse than it actually is",
				},
			],
			selectedStaff: {},
		};
	},
	methods: {
		onClick(index) {
			this.show = true;
			this.selectedStaff = this.staffs[index];
		},
		lightboxClose() {
			this.show = false;
		},
	},
};
