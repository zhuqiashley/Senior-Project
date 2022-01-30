<template>
<br>
  <div class="event-module d-flex align-items-start">
  <!-- <div class="pic"><img src="assets/img/team/advisors.jpeg" class="img-fluid" alt=""></div> -->
    <div class="info">
        <h1> {{title}} </h1>
        <p> Instructors: {{instructors}} </p>
        <p> {{date}} </p>
    </div>
  </div>
  <br>
</template>

<script>
export default {
  props: {
      title: {
          type: String,
          required: false, 
          default: 'Event Title'
      },
      instructors: {
          type: String,
          required: false, 
          default: 'Instructor Name'
      },
      date: {
          type: String,
          required: false, 
          default: 'Date'
      },
  },
  setup() {
      
  },
}
</script>

<style scoped>
.event-module {
  position: relative;
  margin: auto;
  box-shadow: 1px 2px 5px #7f94b9;
  padding: 25px;
  background: #fff;
  width: 90%;
}
.event-module .pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.event-module .info {
  padding-left: 30px;
}

.event-module h1 {
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
}
.event-module p {
  font-family: "Open Sans", sans-serif;
  margin: 10px 0 0 0;
  font-size: 1rem;
}

</style>
