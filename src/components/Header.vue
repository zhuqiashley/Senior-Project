<template>
    <div class="page-title"> <h2> {{title}} </h2> </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: 'Title'
        },
    },
    setup() {
        return {

        }
    },
}
</script>

<style scoped>
.page-title {
  text-align: center;
  padding-bottom: 30px;
  padding-top: 100px;
  background: #20ad85;
  width:100%;
  font-weight: bold;
}

.page-title h2 {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #fff;
}
.page-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #fff;
  bottom: 1px;
  left: calc(50% - 60px);
}
.page-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #044c6d;
  bottom: 0;
  left: calc(50% - 20px);
}
</style>
