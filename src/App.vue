<!-- Navbar -->

<template>
	<nav class="navbar" aria-label="navigation">
		<div class="container d-flex align-items-center">
			<router-link to="/">
				<h1 class="logo me-auto">Master CS</h1>
			</router-link>
			<ul> 
				<router-link to="/"> Home </router-link>
				<router-link to="/courses"> Courses </router-link>
				<router-link to="/events"> Events </router-link>
				<li v-if="signedIn" class="dropdown">My Profile <i class="bi-chevron-down"></i>
				<ul>
					<router-link to="/profile"> Profile </router-link>
					<router-link to="/achievements"> Achievements </router-link>
					<router-link to=/MyCourses> My Courses </router-link>
					<router-link to=/Introduction> Introduction Quiz </router-link>
          <router-link to="/Statistics">Statistics</router-link>
				</ul>
				</li>
        <li class="dropdown">Account<i class="bi-chevron-down"></i>
          <ul>
            <router-link v-if="signedOut" to="Login">Login</router-link>
            <router-link v-if="signedIn" to="/LogoutSuccess">Logout</router-link>
            <router-link v-if="signedOut" to="Signup">Signup</router-link>
          </ul>
        </li>
			</ul>
		</div>
	</nav>
	<router-view/>
</template>

<script>
//import CustomButton from './components/Button.vue'
export default {
	components: {
		//CustomButton
	},
	setup() {
    let signedIn = false;
    let signedOut = true;
    console.log("signedIn = " + localStorage.getItem('signedIn'));
    console.log("ID = " + localStorage.getItem('ID'));
    if(localStorage.getItem('signedIn') > 0)
    {
      signedIn = true;
      signedOut = false;
    }
		return {
			signedIn, signedOut
		}
	},
}
</script>

<style>
.logo {
  font-size: 1.75rem;
  color:white;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
}

.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #47b2e4;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 0;
  top: calc(100% + 30px);
  padding: .75rem 0;
  visibility: hidden;
  background: white;
  transition: 0.3s;
  border-radius: 4px;
  z-index: 99;
}

.navbar .dropdown ul a {
  padding: 10px 3rem;
  font-size: 14px;
  text-transform: none;
  font-weight: 500;
  color: #0c3c53;
}

.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #47b2e4;
}
.navbar .dropdown:hover > ul {
  top: 100%;
  visibility: visible;
}


</style>
