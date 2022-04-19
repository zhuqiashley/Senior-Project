<!-- ====== TEMPLATE ====== -->
<template>
  <div style="width: 40%;">
    <div class="row">
      <div class="col-md-6">
        <ul>
          <router-link :to="{ path: '/homecourse', query: this.query }">
            <ol class="mt-4">
              <h1>Home</h1>
            </ol>
          </router-link>
          <router-link :to="{ path: '/announcments', query: this.query }">
            <ol class="">
              <h1>Announcements</h1>
            </ol>
          </router-link>
          <router-link :to="{ path: '/chapter', query: this.query }">
            <ol class="">
              <h1>Course Chapters</h1>
            </ol>
          </router-link>
          <router-link :to="{ path: '/Quiz', query: this.query }">
            <ol class="">
              <h1>Quizzes</h1>
            </ol>
          </router-link>
          <router-link :to="{ path: '/syllabus', query: this.query }">
            <ol class="">
              <h1>Syllabus</h1>
            </ol>
          </router-link>
          <router-link :to="{ path: '/forum', query: this.query }">
            <ol class="">
              <h1>Discussion Forum</h1>
            </ol>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>


<!-- ======= SCRIPT ======= -->
<script>
export default {
  components: {},
  props: ['query'],
  data() {
    return {
      toggleEnroll: true
    }
  },
  methods: {
    Enroll() {
      this.toggleEnroll = !this.toggleEnroll
    }
  },
  computed: {
    titleValue() {
      return this.$route.query.title
    }
  },
  setup() {
  },
};
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.enroll {
  float: right;
}

a, a:hover {
  color: #0a0a0a;
  text-decoration: none;
}

ol {
  border: 1px solid;
  border-radius: 10px;
  margin-bottom: 5px;
  font-family: serif;
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
</style>
