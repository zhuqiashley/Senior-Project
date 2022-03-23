<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Profile"></custom-header>
  <!-- ======= UserProfilePage Section ======= -->
  <section id="UserPage" class="d-flex align-items-center">
    <div class="section-title">
      <h1>Welcome {{this.userid}}!</h1>
    </div>
  </section>


</template>

<script>
import CustomHeader from '../components/Header.vue'
//import axios from "axios"
//import router from "../router"
export default {
    components:
    {
        CustomHeader,
    },
  setup(){
      let userid = 100;
      let length = 100;
      userid = localStorage.getItem('ID');
      length = localStorage.length;
      console.log(userid);
      console.log(length);

      return{
        userid
      }
  }
  /*name: "Login",
  data() {
    return {
      user: {
        name: ""
      }
    }
  },
  methods: {
    getUserData: function() {
      let self = this
      axios.get("/api/user")
          .then((response) => {
            console.log(response)
            self.$set(this, "user", response.data.user)
          })
          .catch((errors) => {
            console.log(errors)
            router.push("/")
          })
    }
  },
  mounted() {
    this.getUserData()
  }*/
}
</script>

<style scoped>

</style>