<!-- ======= TEMPLATE ======= -->
<template>
    <div class="Events">
        <custom-header title="Events"></custom-header>
    
        <div class="container">
            <card class="event-module mt-4 mb-4" v-for="(event, index) in events" v-bind:key="index" >
                <template #body>
                    <div class="d-flex align-items-start">
                        <div class="pic">
                            <img src="../assets/img/team/advisors.jpeg" class="img-fluid" alt="">
                        </div>
                        
                        <div class="info">
                            <h1> {{event.title}} </h1>
                            <p> Instructors: {{event.instructors}} </p>
                            <p> {{event.date}} </p>
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

export default {
  components:
  {
    CustomHeader,
    Card
  },
  setup() {
    const events = [
      {
        title: 'Git & Github',
        instructors: 'Sergiu Dascalu and Vinh Le',
        date: 'January 31st @ 2:00 pm',
      },
      {
        title: 'Event 1',
        instructors: 'Sergiu Dascalu and Vinh Le',
        date: 'January 31st @ 2:00 pm',
      },
    ]
    return {
      events
    }
  },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
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
