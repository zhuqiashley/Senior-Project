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
<!-- End About Us Section -->

    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Team 1 Members</h2>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Crystal Atoz</h4>
                <span>Contribution</span>
                <p>Bio Description</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Kayla Garin</h4>
                <span>Contribution</span>
                <p>Bio Description</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Yan Shore</h4>
                <span>Contribution</span>
                <p>Bio Description</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Austin Schrange</h4>
                <span>Contribution</span>
                <p>Bio Description</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Zhuqi You</h4>
                <span>Contribution</span>
                <p>Bio Description</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/advisors.jpeg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Profesors & Advisors</h4>
                <p>Professors: Sergiu Dascalu and Vinh Le</p>
                <p>Advisors: Professor Ben Brown and Dr. Bill Doherty</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <!-- End Team Section -->
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

/*---------------------------
    SECTION PARTITIONING
----------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f3f5fa;
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
.section-title p {
  margin-bottom: 0;
}

.team .member {
  position: relative;
  box-shadow: 0px 2px 5px #7f94b9;
  padding: 25px;
  background: #fff;
}
.team .member .pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.team .member .member-info {
  padding-left: 30px;
}

.team .member p {
  margin: 10px 0 0 0;
  font-size: 14px;
}
</style>