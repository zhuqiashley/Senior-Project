<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>

    <!--Alert notification -->
    
    <!--End Alert notification -->

    
    <div class="container mt-4">
        <div class="parent">
            <div v-for="(achievement, index) in achievement" v-bind:key="index">
                <Card :horizontal="true" :image="achievement.BadgeImage" > 
                    <template #title>
                        {{achievement.AchievementTitle}}
                    </template>
                    <template #body>
                        {{achievement.AchievementDescription}}
                    </template>
                </Card> 
            </div>
        </div>
    </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
//import { computed } from 'vue';
import CustomHeader from '@/components/Header.vue'
import Card from '@/components/Card.vue'
//import ProgressBar from '@/components/ProgressBar.vue';
import axios from 'axios';
import { ref, onBeforeMount } from "vue";
//import { notify } from "@kyvg/vue3-notification";


let achievementDB = 'http://localhost:3001/api/achievement'
//let userDB = 'http://localhost:3001/api/user'
//let UserAchievementsDB = 'http://localhost:3001/api/userachievements'

export default {
  components:
    {
        CustomHeader,
        Card,
        //ProgressBar,
    },
    setup() {
        
        //const id = localStorage.getItem('ID');

        //Event Data to insert into database
        const AchievementTitle = ref('')
        const AchievementDescription = ref('')
        const achievements = ref([])
        //const BadgeID = ref('')

        //get achievementsDB
        onBeforeMount(async () => {
            await axios.get(achievementDB)
                .then(response => {
                    response.data;
                }).catch(err => {
                    console.error(err);
                 });})
        
        /*
        const unlocked = computed(() => {
            return achievements.value.filter(achievement => achievement.unlocked);
        });

        const locked = computed(() => {
            return achievements.value.filter(achievement => !achievement.unlocked);
        });
        */
        
        //Functions for checking for Achievement Requirements 
        //If requirements are satisfied, post to database, display notification, update achievements page

        //BadgeID 1 
        /*
        if user new 
        award badgeID 1
        achievement.unlocked = true
        */

        //BadgeID 2
        /*
        if user lessons completed = 0 
        if user lessons completed = 1 
        award badgeID 2 
        achievement.unlocked = true
        */

        //BadgeID 3
        /*
        check user quiz scores for 100 
        if user quiz score = 100 and not others
        award badgeID 3
        achievement.unlocked = true
        */

        //BadgeID 4
        /*
        if user posts = 0 
        if user posts = 1
        award badgeID 4
        achievement.unlocked = true
        */

        //BadgeID 5
        /*
        if user courses completed = 0 
        if user courses completed = 1 
        award badgeID 5
        achievement.unlocked = true
        */

        //BadgeID 6
        /*
        if user lessons completed == 10 
        award badgeID 6
        achievement.unlocked = true
        */

        //BadgeID 7
        /*
        if user streaks = 3 days 
        award badgeID 7 
        achievement.unlocked = true
        */

        //BadgeID 8
        /*
        if user completes all courses 
        award badgeID 8 
        achievement.unlocked = true
        */

        //test notification
        //notify({
            //title: "Vue 3 notification",
        //});
        

        return {
            achievements, 
            AchievementTitle, 
            AchievementDescription, 
            //BadgeID, 
            //unlocked, 
            //locked,
            //id
        }
    },

}
</script>

<!-- ======= STYLE ======= -->
<style>
    .card {
        width: 25rem;
    }
    .parent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 33%;
    }
</style>