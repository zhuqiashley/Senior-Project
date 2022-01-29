<template>
  <div class="home">
    <!-- ======= HomePage Section ======= -->
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
  <!-- End HomePage -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

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
</style>