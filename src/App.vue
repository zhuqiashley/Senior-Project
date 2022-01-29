<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
	<nav class="navbar" aria-label="navigation">
		<div class="container d-flex align-items-center">
			<router-link to="/">
				<h1 class="logo me-auto">Master CS</h1>
			</router-link>
			<ul> 
				<router-link to="/"> Home </router-link>
				<router-link to="/about"> About </router-link>
				<router-link to="/courses"> Courses </router-link>
				<li><a class="nav-link scrollto" href="./events.html">Events</a></li>
				<li class="dropdown"><a href="#"><span>My Profile</span> <i class="bi-chevron-down"></i></a>
				<ul>
					<li><a href="#">My Profile</a></li>
					<li><a href="./myachievements.html">My Achievements</a></li>
					<li><a href="#">My Courses</a></li>
					<li><a href="#">Log Out</a></li>
				</ul>
				</li>
				<li><a class="getstarted" href="./signup.html">Sign Up</a></li>
			</ul>
		</div>
	</nav><!-- .navbar -->
	<router-view/>
</template>

<style>
.logo {
  font-size: 1.5rem;
  color:white;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.logo a {
  color: #fff;
}
.logo img {
  max-height: 40px;
}
.navbar {
  padding: 15px 0;
  background: rgb(12, 34, 71);
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #47b2e4;
}

/* SIGN UP BUTTON */
.navbar .getstarted, .navbar .getstarted:focus {
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 50px;
  color: #fff;
  font-size: 14px;
  border: 2px solid #47b2e4;
  font-weight: 600;
}
.navbar .getstarted:hover, .navbar .getstarted:focus:hover {
  color: #fff;
  background: #31a9e1;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  padding: 10px 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
  z-index: 99;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  font-weight: 500;
  color: #0c3c53;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #47b2e4;
}
.navbar .dropdown:hover > ul {
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  top: 0;
  left: 100%;
  visibility: visible;
}

</style>
