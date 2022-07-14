import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../screen/Page1/Page1.vue";
import Page2 from "../screen/Page2/Page2.vue";
import Page3 from "../screen/Page3/Page3.vue";

const routes = [
	// {
	//   path: '/',
	//   name: 'home',
	//   component: HomeView
	// }
	{
		path: "/",
		name: "Home",
		component: Page1,
	},
	{
		path: "/info",
		name: "Info",
		component: Page2,
	},
	{
		path: "/staff",
		name: "Staff",
		component: Page3,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
