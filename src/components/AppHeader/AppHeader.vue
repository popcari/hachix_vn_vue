<template>
	<div class="header">
		<div class="header__logo">
			<img @click="goToHome()" src="../../assets/logo-8X.webp" alt="" />
		</div>
		<div class="header__slogan">
			<h3>Your Partner In Digital Transformation</h3>
		</div>
		<div class="header__list">
			<ul>
				<li
					v-for="item in pageItems"
					:key="item.name"
					@click="goToPage(item.name)"
				>
					{{ item.name }}
				</li>
				<!-- <li><a href="page2.html">Intro</a></li>
					<li><a href="page3.html">Staff</a></li> -->
			</ul>
		</div>
	</div>
</template>

<script src="./AppHeader.js"></script>

<style src="./AppHeader.css" scoped></style>
