<!-- ======= TEMPLATE ======= -->
<template>
<!-- ======= HomePage Section ======= -->
	<div class="home">
		<section id="HomePage" class="d-flex align-items-center">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
						<h1>Master CS</h1>
						<h2>Learn at your own pace with courses tailored to you.</h2>
					</div>
				<div class="col-lg-6 order-1 order-lg-2 HomePage-img">
					<img src="../assets/img/hp-img.png" class="img-fluid animated" alt="">
				</div>
				</div>
			</div>
		</section>
	</div>

<!-- ======= About Section ======= -->
<section id="about">
	<div class="container">

		<div class="section-title">
			<h2>About</h2>
		</div>

		<div class="row content">
			<div class="col-lg-6">
				<p>
					Generate your own personalized learning plan with our courses.
				</p>
				<ul>
					<li><i class="ri-check-double-line"></i> Compete with other users while learning </li>
					<li><i class="ri-check-double-line"></i> Choose to learn topics online or in person </li>
					<li><i class="ri-check-double-line"></i> Take an introductory quiz to personalize your experience</li>
				</ul>
				</div>
				<div class="col-lg-6 pt-4 pt-lg-0">
				<p>
				Master CS is a platform dedicated to helping users learn. 
				Course layouts are designed to fit with your schedule and learning style.
				We made learning fun and competitive through educational games and achievements you can earn and show off.
				Have fun learning with Master CS!
				</p>
				</div>
		</div>

	</div>
</section>


<!-- ======= Team Section ======= -->
<section class="team section-bg">
	<div class="section-title">
	<h2>Team 1 Members</h2>
	</div>

	<div class="container">
		<div class="parent">
			<div v-for="(member, index) in team" v-bind:key="index">
				<card :horizontal="true" :image="member.image" class="mb-4">
					<template #title>
						{{member.name}}
					</template>
					<template #body>
						{{member.description}}
					</template>
				</card>
			</div>
		</div>
	</div>

</section>

</template>

<!-- ======= SCRIPT ======= -->
<script>
import Card from '../components/Card.vue'

export default {
	components: {
	Card
	},
	setup() {
		const team = [
			{
				name: 'Crystal Atoz',
				description: 'She will be graduating December 2022 with a B.S. in Computer Science & Engineering with a minor in Mathematics.',
				image: {
					src: 'img/team/advisors.jpeg',
					alt: 'Crystal Atoz',
				},
			},
			{
				name: 'Kayla Garin',
				description: 'test',
				image: {
					src: 'img/team/advisors.jpeg',
					alt: 'Kayla Garin',
				},
			},
			{
				name: 'Austin Schrage',
				description: 'test',
				image: {
					src: 'img/team/advisors.jpeg',
					alt: 'Austin Schrage',
				},
			},
			{
				name: 'Yan Shore',
				description: 'test',
				image: {
					src: 'img/team/advisors.jpeg',
					alt: 'Yan Shore',
				},
			},
			{
				name: 'Zhuqi You',
				description: 'test',
				image: {
					src: 'img/team/advisors.jpeg',
					alt: 'Zhuqi You',
				},
			},
			{
				name: 'Advisors',
				description: 'test',
				image: {
					src: 'img/team/advisors.jpeg',
					alt: 'Advisors'
				},
			}
		]
		return {
			team
		}
	},
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
	#HomePage {
	width: 100%;
	height: 80vh;
	background: #20ad85;
	}
	#HomePage .container {
	padding-top: 72px;
	}
	#HomePage h1 {
	margin: 0 0 10px 0;
	font-size: 48px;
	font-weight: 700;
	line-height: 56px;
	color: #fff;
	}
	#HomePage h2 {
	color: rgba(255, 255, 255, 0.6);
	margin-bottom: 50px;
	font-size: 24px;
	}
	#HomePage .HomePage-img {
	text-align: center;
	width: 50%;
	}

	/*---------------------------
		SECTION PARTITIONING
	----------------------------*/
	section {
	padding: 60px 0;
	overflow: hidden;
	}

	.section-title {
	text-align: center;
	padding-bottom: 30px;
	}

	.section-title h2 {
	font-size: 32px;
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 20px;
	padding-bottom: 20px;
	position: relative;
	color: #37517e;
	}

	/*section before and after - lines underneath title*/
	.section-title h2::before {
	content: "";
	position: absolute;
	display: block;
	width: 120px;
	height: 1px;
	background: #ddd;
	bottom: 1px;
	left: calc(50% - 60px);
	}
	.section-title h2::after {
	content: "";
	position: absolute;
	display: block;
	width: 40px;
	height: 3px;
	background: #47b2e4;
	bottom: 0;
	left: calc(50% - 20px);
	}

	#about {
	background-color: white;
	}

    .card {
        width: 25rem;
    }

    .parent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 33%;
    }
</style>
