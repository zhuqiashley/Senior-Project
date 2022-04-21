<template>
  <custom-header :title="titleValue"></custom-header>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 order-2 order-lg-1">
        <h1>Course Chapters</h1>
        <div class="col-lg-12">
          <h4> Course process: </h4> 
          <progress-bar :progress="this.progress">
            <template>
              {{this.progress}} 
            </template>
          </progress-bar>
        </div>
        <br/>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Chapter #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>{{this.chapterData?.chapterDetail1}}</p>
                <iframe width="420" height="315" :src="this.chapterData?.chapter1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapter(20)" :disabled="this.progress > 20"> Complete </button>
              </div>
              
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                :disabled="this.progress < 20"
              >
                Chapter #2
                <p v-if="this.progress < 20"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>{{this.chapterData?.chapterDetail2}}</p>
                <iframe width="420" height="315" :src="this.chapterData?.chapter2"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapter(40)" :disabled="this.progress > 40"> Complete </button>

              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                :disabled="this.progress < 40"
              >
                Chapter #3
                <p v-if="this.progress < 40"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              <p>{{this.chapterData?.chapterDetail3}}</p>
              <iframe width="420" height="315" :src="this.chapterData?.chapter3"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapter(60)" :disabled="this.progress > 60"> Complete </button>

              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                :disabled="this.progress < 60"
              >
                Chapter #4
                <p v-if="this.progress < 60"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
               <p>{{this.chapterData?.chapterDetail4}}</p>
               <iframe width="420" height="315" :src="this.chapterData?.chapter4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapter(80)" :disabled="this.progress > 80"> Complete </button>

              </div>
            </div>
          </div>


          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                :disabled="this.progress < 80"
              >
                Chapter #5
                <p v-if="this.progress < 80"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>{{this.chapterData?.chapterDetail5}}</p>
                <iframe width="420" height="315"  :src="this.chapterData?.chapter5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapter(100)" :disabled="this.progress > 90"> Finish </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from "../components/Header.vue";
import ProgressBar from "../components/ProgressBar.vue";
import axios from 'axios'


export default {
  components: {
    CustomHeader,
    ProgressBar
  },
  data() {
      return {
        progress: 0,
        chapterData: null,
      }
  },
  async mounted () {
    axios.get("http://localhost:3001/api/getcourses/"+this.$route.query.title)
			.then((res) => {
				this.chapterData = res.data[0]
			}).catch(err => {
				console.error(err)
			})
      if (localStorage.getItem('ID')) {
        axios.post("http://localhost:3001/api/getProgress/", { user_id: localStorage.getItem('ID'), course_id: this.$route.query.id})
        .then((res) => {
          this.progress = res.data[0].course_completion
          // this.chapterData = res.data[0]
        }).catch(err => {
          console.error(err)
        });
          // const uEData = await userEnrolledData.json();
      }
  },
  computed: {
		titleValue() {
			return  this.$route.query.title
		}
	},
  methods: {
    async completeChapter (course_completion) {
      console.log(localStorage.getItem('ID'))
      if (localStorage.getItem('ID')) {
        axios.post("http://localhost:3001/api/updateProgress/", {user_id: localStorage.getItem('ID'), course_id: this.$route.query.id, course_completion: course_completion})
        .then(() => {
          this.relodeData()
          // this.chapterData = res.data[0]
        }).catch(err => {
          console.error(err)
        });

        if (course_completion == 100) {
          
          axios.post("http://localhost:3001/api/chapterCompletion/", {user_id: localStorage.getItem('ID'), course_id: this.$route.query.id})
          .then(() => {
            this.relodeData()
            // this.chapterData = res.data[0]
          }).catch(err => {
            console.error(err)
          });
        }
      } else {
        return this.$router.push({ path: 'login', query: ''});
      }
    },
    relodeData () {
      axios.get("http://localhost:3001/api/getcourses/"+this.$route.query.title)
			.then((res) => {
				this.chapterData = res.data[0]
			}).catch(err => {
				console.error(err)
			})
      if (localStorage.getItem('ID')) {
        axios.post("http://localhost:3001/api/getProgress/", { user_id: localStorage.getItem('ID'), course_id: this.$route.query.id})
        .then((res) => {
          console.log(res, 'deeeeet')
          this.progress = res.data[0].course_completion
          // this.chapterData = res.data[0]
        }).catch(err => {
          console.error(err)
        });
          // const uEData = await userEnrolledData.json();
      }
    }
  },
  setup() {},
};
</script>

<!-- ======= STYLE ======= -->
<style scoped>
</style>
