<template>
	<div>
		<div class="container__header">
			<h1>Staffs</h1>
		</div>
		<!-- main content section -->
		<div class="staff__table">
			<!-- Pham duc trung details -->
			<div class="staff__box__image">
				<div class="avatar__image" @click="showLightbox">
					<img index="0" src="../../assets/phamductrung.jpg" alt="" />
				</div>
				<div class="avatar__name">{{ staffs[0].name }}</div>
			</div>
			<!-- Nguyen hoang tue details -->
			<div class="staff__box__image">
				<div class="avatar__image">
					<img index="1" src="../../assets/nguyenhoangtue.jpg" alt="" />
				</div>
				<div class="avatar__name">{{ staffs[1].name }}</div>
			</div>
			<!-- Linh the duc details -->
			<div class="staff__box__image">
				<div class="avatar__image">
					<img index="2" src="../../assets/linhtheduc.jpg" alt="" />
				</div>
				<div class="avatar__name">{{ staffs[2].name }}</div>
			</div>
			<!-- Nguyen thanh duy deatils -->
			<div class="staff__box__image">
				<div class="avatar__image">
					<img index="3" src="../../assets/nguyenthanhduy.jpg" alt="" />
				</div>
				<div class="avatar__name">{{ staffs[3].name }}</div>
			</div>
			<!-- Nguyen khac dung details -->
			<div class="staff__box__image">
				<div class="avatar__image">
					<img index="4" src="../../assets/nguyenkhacdung.jpg" alt="" />
				</div>
				<div class="avatar__name">{{ staffs[4].name }}</div>
			</div>
		</div>
	</div>
</template>

<script src="./AppInfo_table.js"></script>

<style src="./AppInfo_table.css"></style>
