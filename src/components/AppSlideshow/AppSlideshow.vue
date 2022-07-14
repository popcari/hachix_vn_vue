<template>
  <div class="slideshow middle">
		<div class="slides">
				<input type="radio" name="r" id="0" checked />
				<input type="radio" name="r" id="1" />
				<input type="radio" name="r" id="2" />
				<input type="radio" name="r" id="3" />

				<!-- <div class="slide s1" @click="onClick">
					<img src="/img/6539d6faf8d33b8d62c22.jpg" alt="" />
				</div>
				<div class="slide">
					<img src="/img/06bbbbfd9ad4598a00c54.jpg" alt="" />
				</div>
				<div class="slide">
					<img src="/img/8acf45f764dea780fecf3.jpg" alt="" />
				</div>
				<div class="slide">
					<img src="/img/ea886dac4c858fdbd6941.jpg" alt="" />
				</div> -->
   
                <!-- <img :src="'../../assets' + image" alt="">` -->
        </div>
        <div class="image_container">
            <img :src="require('../../assets/'+image)"/>
            <div class="nav_buttons_container">   
                <div class="nav_button" v-for="btn in buttons" @click="onClick(btn)" :key="btn.id">                  
                    <label :for="btn.id"  class="btn" ></label>
			</div>
         </div>
        </div>
			<!-- navigation button container -->
	</div>
    <div class="contact">
			<div class="contact__header">
				<h1>--- Contact ---</h1>
			</div>
		</div>

		<div class="main">
			<div class="main__info">
				<img src="../../assets/th_building.jpg" alt="" />
				<ul >
					<li>Hachi-x Technology joint stock company</li>
					<li v-for="(value, key) in infoObject" :key="key">
						<span>{{key}}</span> {{value}}
					</li>
					
				</ul>
			</div>
			<div class="main__map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.0192614688387!2d105.78319760819062!3d21.031144550035464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8990297487%3A0x706a94b09d96cedb!2sTH%20OFFICE%20TOWER%2016%20-%20DUY%20T%C3%82N!5e0!3m2!1sen!2sus!4v1656314231098!5m2!1sen!2sus"
					width="600"
					height="450"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				>
				</iframe>
			</div>
		</div> 
</template>

<script src="./AppSlideshow.js">
</script>

<style src="./AppSlideshow.css">

</style>