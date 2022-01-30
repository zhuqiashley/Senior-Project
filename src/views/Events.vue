<template>
  <div class="Events">
    <custom-header title="Events"></custom-header>

    <template v-for="event in events" v-bind:key="event.id">
      <event-module :title="event.title" :instructors="event.instructors" :date="event.date"></event-module>
	</template>

  </div>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import EventModule from '../components/EventModule.vue'

export default {
  components:
  {
    CustomHeader,
    EventModule
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


<style scoped>

</style>