<template>
	<div>
		<div class="container__header">
			<h1>Staffs</h1>
		</div>

		<!-- main content section -->
			<LightboxModal
				:staff="selectedStaff"
				v-show="show"
				@close="lightboxClose"
			></LightboxModal>
		<div class="staff__container">
			<div class="staff__table" v-for="(staff, index) in staffs" :key="index">
				<!-- Pham duc trung details -->
				<div class="staff__box__image">
					<div class="avatar__image" @click="onClick(index)">
						<img index="0" :src="require(`../../${staff.img}`)" alt="" />
					</div>
					<div class="avatar__name">{{ staff.name }}</div>
				</div>
				<!-- Nguyen hoang tue details -->
			</div>
		</div>
	</div>
</template>

<script src="./AppInfo_table.js"></script>

<style src="./AppInfo_table.css"></style>
