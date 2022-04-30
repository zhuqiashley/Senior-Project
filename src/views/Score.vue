<template>
  <div>
    <custom-header :title="titleValue"></custom-header>
    <div class="center">
      <div v-for="(c, index) in chapter" v-bind:key="index">
        <div class="item">{{ c.ChapterName }} : {{ c.Score }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../components/Header";
import {getScores} from "../api/api";

export default {
  name: "Score",
  props: ['title', 'id'],
  components: {
    CustomHeader,
  },
  data() {
    return {
      chapter: [],
    }
  },
  computed: {
    titleValue() {
      return  this.$route.query.title
    }
  },
  mounted() {
    // Get user's score for display
    getScores(localStorage.getItem('ID'), this.id).then(res => {
      this.chapter = res.data
    })
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-bottom: 30px;
  padding-top: 100px;
  width: 100%;
}

.item {
  font-size: 40px;
  height: 80px;
}
</style>