<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>

    <!--Alert notification -->
    
    <!--End Alert notification -->

    <div class="container mt-4">
        <progress-bar :progress="(unlocked.length / (locked.length + unlocked.length)) * 100" />

        <div class="parent">
            <div v-for="(badge, index) in badges" v-bind:key="index">
                <card :horizontal="true" :image="badge.image" :class="['mt-4', badge.unlocked ? '' : 'locked']"> 
                    <template #title>
                        {{badge.title}}
                    </template>
                    <template #body>
                        {{badge.description}}
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

export default {
  components:
    {
        CustomHeader,
        Card,
        ProgressBar,
    },
    setup() {
        const badges = [
            {
                title: "Welcome to the Class",
                description: "Earned when you first registered.",
                image: {
                    src: "img/badges/Cup_Badge_Color.png",
                    alt: "Welcome to the Class",
                },
                unlocked: false,
            },
            {
                title: "E-Learning Newbie!",
                description: "Earned upon completing your first lesson.",
                image: {
                    src: "img/badges/Growth_Badge_Color.png",
                    alt: "E-Learning Newbie",
                },
                unlocked: false,
            },
            {
                title: "Brainiac in the Making!",
                description: "Earned when you ace your first quiz.",
                image: {
                    src: "img/badges/Idea_Badge_Color.png",
                    alt: "Brainiac in the Making",
                },
                unlocked: false,
            },
            {
                title: "Baby Steps!",
                description: "Earned when you complete you complete your first topic.",
                image: {
                    src: "img/badges/Like_Badge_Color.png",
                    alt: "Baby Steps",
                },
                unlocked: false,
            },
            {
              title: "Knowledge Knight",
              description: "Earned when you complete your first course.",
              image: {
                  src: "img/badges/Medal_Badge_Color.png",
                  alt: "Knowledge Knight",
              },
              unlocked: false,
            },
          {
            title: "On a Roll!",
            description: "Earned when you complete 10 lessons.",
            image: {
                src: "img/badges/Monitor_Badge_Color.png",
                alt: "On a Roll",
            },
            unlocked: false,
          },
          {
            title: "First Streak!",
            description: "Earned when you learn for 3 days straight.",
            image: {
              src: "img/badges/Shuttle_Badge_Color.png",
              alt: "First Streak",
            },
            unlocked: false,
          },
          {
            title: "Overachiever!",
            description: "Earned when you complete all courses available.",
            image: {
              src: "img/badges/Star_Badge_Color.png",
              alt: "Overachiever",
            },
            unlocked: false,
          }
        ];
        const unlocked = computed(() => {
            return badges.filter(badge => badge.unlocked);
        });

        const locked = computed(() => {
            return badges.filter(badge => !badge.unlocked);
        });

        //Function for checking for Achivement Requirements 
        //If requirements are satisfied, post to user database, display notification, update achievements page

        //get userDB
        const user = ref('')
        onBeforeMount(async () => {
            await axios.get(userDB)
                .then(response => {
                    user.value = response.data;

                }).catch(err => {
                    console.error(err);
                 });})
        
        //get achievementsDB
        const achievements = ref('')
        onBeforeMount(async () => {
            await axios.get(achievementsDB)
                .then(response => {
                    achievements.value = response.data;

                }).catch(err => {
                    console.error(err);
                 });})

        //test notification
        //notify({
            //title: "Vue 3 notification",
        //});
        

        return {
            badges, achievements, unlocked, locked, user
        }
    },
    //methods:{
        //const id = localStorage.getItem('ID');
    //}
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