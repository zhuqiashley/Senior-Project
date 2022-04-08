<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>

    <!--Alert notification -->
    
    <!--End Alert notification -->

    <div class="container mt-4">
        <progress-bar :progress="(unlocked.length / (locked.length + unlocked.length)) * 100" /> 

        <div class="parent">
            <div v-for="(achievement, index) in achievements" v-bind:key="index">
                <card :horizontal="true" :image="achievement.BadgeImage" :class="['mt-4', achievement.unlocked ? '' : 'locked']"> 
                    <template #title>
                        {{achievement.AchievementTitle}}
                    </template>
                    <template #body>
                        {{achievement.AchievementDescription}}
                    </template>
                </card> 
            </div>
        </div>
    </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import { computed } from 'vue';
import CustomHeader from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import ProgressBar from '@/components/ProgressBar.vue';
import axios from 'axios';
import { ref, onBeforeMount } from "vue";
//import { notify } from "@kyvg/vue3-notification";


let achievementsDB = 'http://localhost:3001/api/achievements'
let userDB = 'http://localhost:3001/api/user'
let userAchievementsDB = 'http://localhost:3001/api/userachievements'

export default {
  components:
    {
        CustomHeader,
        Card,
        ProgressBar,
    },
    setup() {

        const id = localStorage.getItem('ID');

        const AchievementTitle = ref('')
        const AchievementDescription = ref('')
        const achievements = ref([])
        const BadgeID = ref('')
        const users = ref('')
        const userAchievements = ref('')

        //get achievementsDB
        onBeforeMount(async () => {
            await axios.get(achievementsDB)
                .then(response => {
                    achievements.value = response.data;

                }).catch(err => {
                    console.error(err);
                 });})

        //get userDB
        onBeforeMount(async () => {
            await axios.get(userDB)
                .then(response => {
                    users.value = response.data;

                }).catch(err => {
                    console.error(err);
                 });})

        //get userAchievementsDB
        onBeforeMount(async () => {
            await axios.get(userAchievementsDB)
                .then(response => {
                    userAchievements.value = response.data;

                }).catch(err => {
                    console.error(err);
                 });})

        const unlocked = computed(() => {
            return achievements.filter(achievement => achievement.unlocked);
        });

        const locked = computed(() => {
            return achievements.filter(achievement => !achievement.unlocked);
        });

        
        //Functions for checking for Achievement Requirements 
        //If requirements are satisfied, post to database, display notification, update achievements page

        //BadgeID 1 
        /*
        if user new 
        award badgeID 1
        unlocked()
        */

        //BadgeID 2
        /*
        if user lessons completed = 0 
        if user lessons completed = 1 
        award badgeID 2 
        unlocked()
        */

        //BadgeID 3
        /*
        check user quiz scores for 100 
        if user quiz score = 100 and not others
        award badgeID 3
        unlocked()
        */

        //BadgeID 4
        /*
        if user posts = 0 
        if user posts = 1
        award badgeID 4
        unlocked()
        */

        //BadgeID 5
        /*
        if user courses completed = 0 
        if user courses completed = 1 
        award badgeID 5
        unlocked()
        */

        //BadgeID 6
        /*
        if user lessons completed == 10 
        award badgeID 6
        unlocked()
        */

        //BadgeID 7
        /*
        if user streaks = 3 days 
        award badgeID 7 
        unlocked()
        */

        //BadgeID 8
        /*
        if user completes all courses 
        award badgeID 8 
        unlocked()
        */

        //test notification
        //notify({
            //title: "Vue 3 notification",
        //});
        

        return {
            achievements, unlocked, locked, AchievementTitle, AchievementDescription, BadgeID
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