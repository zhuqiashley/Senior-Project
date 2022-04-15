<template>
  <custom-header title="Logout"></custom-header>
  <div style="text-align: center">
    <p>


    </p>
  </div>
    <div style="text-align: center">
      <p>User Logged Out Successfully</p>
    </div>
  <div style="text-align: center">
    <p>


    </p>
  </div>
  <div style="text-align: center">
          <span>
            <a class="text-link" @click="redirect">Return to Home</a>
          </span>
  </div>

</template>

<script>
export default {
  name: "AccountCreationSuccess",

  setup(){
      localStorage.clear();
  },
  methods:{
  redirect: async function () {
    await this.$router.push('/');
  },
}}
</script>

<style scoped>

</style>