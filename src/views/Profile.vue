<template>
    <custom-header title="Profile"></custom-header>
    <p> Name: {{ user.name }} </p>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import axios from "axios"
import router from "../router"
export default {
    components:
    {
        CustomHeader,
    },
  name: "Login",
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
  }
}
</script>

<style scoped>

</style>