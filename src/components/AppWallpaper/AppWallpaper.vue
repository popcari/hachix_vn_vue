<template>
  <div class="bgcWallpaper">
    <img src="../../assets/hachix_vn.jpeg" alt="">
    <h1>{{qoutr}}</h1>
    <h3>{{qouteLine}}</h3>
    <h4>{{qouteName}}</h4>
    </div>
    <div class="container">
			<div class="container__infotable">
				<table>
					<tr>
						<th>Company name</th>
						<td>HACHIX Co., Ltd.</td>
					</tr>
					<tr>
						<th>Vietnam branch</th>
						<td>TH building, 3/78 Duy Tan Street, Cau Giay, Ha Noi</td>
					</tr>
					<tr>
						<th>Established</th>
						<td>July 21 2021</td>
					</tr>
					<tr>
						<th>Capital</th>
						<td>5 million yen</td>
					</tr>
					<tr>
						<th>Business content</th>
						<td class="hello">
							<li v-for="service in services" :key="service">{{service}}
                            </li>
							

							<!-- <p>Artificial intelligence development</p>
							<p>Factory Monitoring System Development</p>
							<p>ROS/ROS2 Development and Support Services</p>
							<p>Python Development</p> -->
						</td>
					</tr>
				</table>
			</div>
		</div>
        <div class="company-greeting">
			<p>Greeting</p>
		</div>
        <div class="greeting__main">
			<div class="greeting__paragraph">
				<h1>{{greetingLine}}</h1>
				<P>{{contentOne}}</P>
				<p>{{contentTwo}}</P>
				<P>{{contentThree}}</P>
			</div>
			<div class="greeting__image">
					<img src="../../assets/ceo.webp" alt="CEO">
					<div>
						<h3>President and CEO</h3>
						<p>Nguyen Cong Thanh</p>
					</div>
			</div>
		</div>
        <div class="company-services">
			<p>Services</p>
		</div>
        <div class="services">
			<!-- <div class="tech1">
				<img src="/img/" alt="">
			</div> -->
			<div class="tech2">
				<img src="../../assets/tech2.webp" alt="AI">
				<div class="tech2__paragraph">We can provide flexible solutions by combining a wide variety of cloud technologies, mobile technologies, web system technologies with machine learning and deep learning technologies.</div>
				<div class="tech2__technology">
					<img src="../../assets/Python-Logo-PNG-Image.webp" alt="">
					<img src="../../assets/Pytorch_logo.webp" alt="">
					<img src="../../assets/scikit-learn-logo.webp" alt="">
					<img src="../../assets/tensorflow-logo.webp" alt="">
					<img src="../../assets/logo.webp" alt="">
				</div>
			</div>
			<div class="tech3">
				<img src="../../assets/tech3.webp" alt="Iot">
				<div class="tech2__paragraph">We will realize visualization of goods, people, and money, and support on-site improvement and productivity improvement.</div>
			</div>
			<div class="tech4">
				<img src="../../assets/tech4.jpg" alt="Python">
				<div class="tech2__paragraph">HACHIX has been engaged in research and development using
					ROS / ROS 2 since 2018, and has begun to support it. We will support various developments that meet the needs of our customers.</div>
			</div>

		</div>
</template>

<script src="./AppWallpaper.js" >

</script>

<style src="./AppWallpaper.css">

</style>