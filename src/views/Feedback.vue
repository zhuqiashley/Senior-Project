<template>
  <div>
    <custom-header :title="this.course+' Feedback'"></custom-header>
    <div style="height: 30px;"></div>
    <div class="center item">
      Congratulations on completing the course!
    </div>
    <div class="center item">
      Please leave feedback bothpositive and negitive so we can
    </div>
    <div class="center item">
      improve the user experience for future students who take this class.
    </div>
    <div style="height: 30px;"></div>
    <div style="margin-left: 20%;margin-right: 20%;">
      <div class="input-group">
        <input type="text" class="form-control" v-model="feedback" placeholder="Please write your feedback:">
      </div>
      <button type="button" class="btn btn-dark m-4 enroll" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../components/Header";
import {submitFeedback} from "../api/api";

export default {
  name: "Feedback",
  props: ['title', 'id'],
  components: {
    CustomHeader,
  },
  data() {
    return {
      chapter: [],
      course: this.$store.state.courses[this.id].title,
      feedback: '',
    }
  },
  methods: {
    submit() {
      submitFeedback(20220405, this.id + 1, this.feedback).then(res => {
        if (res.data === 'ok') {
          alert("submit success")
        } else {
          alert("submit failed")
        }
      })
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px;
  width: 100%;
}

.item {
  font-size: 20px;
  height: 40px;
}
</style>