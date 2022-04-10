<template>
  <h1 style="margin-left: 100px;margin-top: 500px;">Feedback</h1>
</template>

<script>
export default {
  name: "Feedback",
  props: ['title', 'id'],
  mounted() {
    console.log(this.title)
    console.log(this.id)
  }
}
</script>

<style scoped>

</style>