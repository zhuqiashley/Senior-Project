<!-- ======= TEMPLATE ======= -->
<template>
    <div class="Events">
        <custom-header title="Events"></custom-header>

        <div class="container mt-4 d-flex justify-content-end">
          <button class="btn btn-success" type="button" @click="addcourse">+ Add Course</button>
        </div>
    
        <div class="container">
            <card class="event-module mt-4 mb-4" v-for="(event, index) in events" v-bind:key="index" >
                <template #body>
                    <div class="d-flex align-items-start">
                        <div class="pic">
                            <img src="../assets/img/team/advisors.jpeg" class="img-fluid" alt="">
                        </div>
                        
                        <div class="info">
                            <h1> {{event.EventTitle}} </h1>
                            <p> Date: {{formatDate(event.EventDate)}} </p>
                            <p> Instructors: {{event.EventInstructor}} </p>
                            <p> Description: {{event.EventDescription}} </p>
                            <p> Spots Left: {{event.EventSpots}} </p>
                            <p><button class="btn btn-success" type="button" @click="register">Register</button></p>
                        </div>
                    </div>
                </template>
            </card>
        </div>
    </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import { ref, onBeforeMount } from "vue";
import axios from 'axios';

let eventDB = 'http://localhost:3001/api/event'
//let eventDB = 'http://192.168.1.3:8080/'
// let userDB = 'http://localhost:3001/api/user'

export default {

  components:
  {
    CustomHeader,
    Card
  },

  methods: {
    addcourse(){
      alert('adding course')
    }
  },

  setup() {
    
    // const events = [
    //   {
    //     title: 'Git & Github',
    //     instructors: 'Sergiu Dascalu and Vinh Le',
    //     date: 'January 31st @ 2:00 pm',
    //   },
    //   {
    //     title: 'Event 1',
    //     instructors: 'Sergiu Dascalu and Vinh Le',
    //     date: 'January 31st @ 2:00 pm',
    //   },
    // ]

    const events = ref([])

    function formatDate(d){
      const date = new Date(d)
      return date.toLocaleString()
    }
  
    onBeforeMount(async () => {
      await axios.get(eventDB)
            .then(response => {
                events.value = response.data;

            }).catch(err => {
                console.error(err);
            });
    })
    return {
      formatDate,
      events
    }
  },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.event-manager{
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
}

.divider{
    width:1.5rem;
    height:auto;
    display:inline-block;
}

.event-module {
  width: 100%;
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
