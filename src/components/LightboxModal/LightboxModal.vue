<template>
	<div class="lightbox">
		<div class="lightbox__content">
			<img :src="staff.img ? require(`../../${staff.img}`) : ''" alt="" />
			<div class="text">
				<h3>Name:{{ staff.name }}</h3>
				<p>Age: {{ staff.age }}</p>
				<p>Position:{{ staff.position }}</p>
				<p>Phone:{{ staff.phone }}</p>
				<p>Quote:{{ staff.qoute }}</p>
			</div>
			<button @click="close">X</button>
		</div>
	</div>
</template>

<script src="./LightboxModal.js"></script>

<style src="./LightboxModal.css" scoped></style>
