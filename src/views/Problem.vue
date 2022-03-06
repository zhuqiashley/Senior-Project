<template>
  <div style="margin-left: 20%;margin-right: 20%;">
    <h1>ch{{ Number(index) + 1 }}</h1>
    <div v-for="(pro,idx) in this.$store.state.current" :key="pro.id">
      <p class="content">{{ idx + 1 }}. {{ pro.content }}</p>
      <label>
        <div class="item">
          <input style="margin-right: 8px;" type="radio" :name="pro.id" :value=0 v-model="checkedValue[idx]">
          A. {{ pro.A }}
        </div>
      </label>
      <br>
      <label>
        <div class="item">
          <input style="margin-right: 8px;" type="radio" :name="pro.id" :value=1 v-model="checkedValue[idx]">
          B. {{ pro.B }}
        </div>
      </label>
      <br>
      <label>
        <div class="item">
          <input style="margin-right: 8px;" type="radio" :name="pro.id" :value=2 v-model="checkedValue[idx]">
          C. {{ pro.C }}
        </div>
      </label>
      <br>
      <label>
        <div class="item">
          <input style="margin-right: 8px;" type="radio" :name="pro.id" :value=3 v-model="checkedValue[idx]">
          D. {{ pro.D }}
        </div>
      </label>
      <br>
      <div v-if="this.$store.state.isSubmit">
        <div class="explain">
            Correct Answer：{{ pro.answer }}
        </div>
        <div class="explain">
          Explanation：{{ pro.explanation }}
        </div>
      </div>
      <hr>
    </div>
  </div>
  <div style="margin-left: 20%;margin-right: 20%;">
    <button v-if="!this.$store.state.isSubmit" type="button" class="btn btn-primary" style="margin-bottom: 20px;"
            @click="submit">Submit
    </button>
    <button v-if="this.$store.state.isSubmit" style="margin-bottom: 15px;" type="button" class="btn btn-success"
            @click="getMore">More
      Problems
    </button>
    <div v-if="this.$store.state.isSubmit">
      <p>Your score: {{score}}</p>
      <p>reference:<a :href="this.$store.state.url[this.id][this.index]">1</a></p>
      <p>watch this chapter video again:<a :href="this.$store.state.video[this.id][this.index]">video</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Problem",
  props: ['index', 'id', 'isSubmit'],
  methods: {
    submit() {
      for (let i = 0; i < this.checkedValue.length; i++) {
        if (this.checkedValue[i] === 4) {
          alert("Please complete all questions!")
          return
        }
      }
      let score = 0
      for (let i = 0; i < this.checkedValue.length; i++) {
        if (this.map[this.checkedValue[i]] === (this.$store.state.current[i].answer)) {
          score += 20
        }
      }
      this.score=score
      this.$store.state.isSubmit = true
      alert("submit success")
    },
    getMore() {
      this.$store.state.isSubmit = false
      let list = this.getRandomArrayElements(this.$store.state.problems[this.id][this.index], 5)
      this.$store.commit('setCurrent', list)
      for (let i = 0; i < this.checkedValue.length; i++) {
        this.checkedValue[i] = 4
      }
      // this.$root.reload()
    },
    getRandomArrayElements(arr, count) {
      let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random())
        temp = shuffled[index]
        shuffled[index] = shuffled[i]
        shuffled[i] = temp
      }
      return shuffled.slice(min);
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  },
  data() {
    return {
      checkedValue: [
          4,
          4,
          4,
          4,
          4,
      ],
      map:['A','B','C','D'],
      score:0,
    }
  },
}
</script>

<style scoped>
.content {
  font-size: 15px;
  line-height: 25px;
  margin-left: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.item {
  padding-left: 15px;
  line-height: 40px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.item:hover {
  cursor: default;
  background-color: #f4f4f5;
}

.explain {
  padding-left: 15px;
  line-height: 40px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
