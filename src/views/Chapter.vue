<template>
  <custom-header :title="titleValue"></custom-header>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 order-2 order-lg-1">
        <h1>Course Chapters</h1>
        <div class="col-lg-12">
          <h4> Course process: </h4> 
          <progress-bar :progress="this.$route.query.course_complete">
            <template>
              {{this.$route.query.course_complete}} 
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
              >
                Chapter #2
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
              >
                Chapter #3
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
              >
                Chapter #4
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
              >
                Chapter #5
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
        progress: this.$route.query.course_complete,
        chapterData: null,
      }
  },
  mounted () {
    axios.get("http://localhost:3001/api/getcourses/"+this.$route.query.title)
			.then((res) => {
				this.chapterData = res.data[0]
			}).catch(err => {
				console.error(err)
			})
  },
  computed: {
		titleValue() {
			return  this.$route.query.title
		}
	},
  setup() {},
};
</script>

<!-- ======= STYLE ======= -->
<style scoped>
</style>
