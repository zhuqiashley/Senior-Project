<template>
  <custom-header title="Account Creation"></custom-header>
  <div style="text-align: center">
    <p>


    </p>
  </div>
    <div style="text-align: center">
      <p>Account Created Successfully</p>
    </div>
  <div style="text-align: center">
    <p>


    </p>
  </div>
  <div style="text-align: center">
          <span>
            <a class="text-link" @click="redirect">Login</a>
          </span>
  </div>

</template>

<script>
export default {
  name: "AccountCreationSuccess",

  setup(){

  },
  methods:{
  redirect: async function () {
    await this.$router.push('Login');
  },
}}
</script>

<style scoped>

</style>