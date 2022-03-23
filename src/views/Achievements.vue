<!-- popup achievement system (HTML/CSS/JS) - adapted from codepen.io -->

<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>
    <div class="container mt-4">
        <progress-bar :progress="(unlocked.length / (locked.length + unlocked.length)) * 100" />

        <div class="parent">
            <div v-for="(achievement, index) in achievements" v-bind:key="index">
                <card :horizontal="true" :image="achievement.image" :class="['mt-4', achievement.unlocked ? '' : 'locked']"> 
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
import { computed, onBeforeMount } from 'vue';
import CustomHeader from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import ProgressBar from '@/components/ProgressBar.vue';
//import { ref, onBeforeMount } from "vue";
import axios from 'axios';

const achievementsDB = 'http://localhost:3001/api/achievements'
//const userDB = 'http://localhost:3001/api/userpost'

export default {
    components:
    {
        CustomHeader,
        Card,
        ProgressBar
    },
    setup() {

        //get user id
        //const id = localStorage.getItem('ID'); 

        //get achievement
        //check achievement requirements
        //award achievement & update user profile - event triggered  w/ pop-up of badge icon

        //const showAward = ref(false) //setup for popup badge
        //Achievement Data to insert to database 
        const AchievementTitle = ref('')
        const AchievementDescription = ref('')
        //const AchievementRequirements = ref('')
        //const giveBadge = ref('')
        //const removeBadge = ref('')
        const BadgeID = ref('')

        // access achievement database for display 
        onBeforeMount(async () => {
            await axios.get(achievementsDB)
                .then(response => {
                    achievements.value = response.data;

                }).catch(err => {
                    console.error(err);
                });
            },
        );

        const achievements = [
            {
                BadgeID: 1,
                AchievementTitle: "Welcome to the Class",
                AchievementDescription: "Earned when you first registered.",
                image: {
                    src: "img/badges/Cup_Badge_Color.png",
                    alt: "Welcome to the Class",
                },
                unlocked: true,
            },
            {
                BadgeID: 2,
                AchievementTitle: "E-Learning Newbie!",
                AchievementDescription: "Earned upon completing your first lesson.",
                image: {
                    src: "img/badges/Growth_Badge_Color.png",
                    alt: "E-Learning Newbie",
                },
                unlocked: false,
            },
            {
                BadgeID: 3,
                AchievementTitle: "Brainiac in the Making!",
                AchievementDescription: "Earned when you ace your first quiz.",
                image: {
                    src: "img/badges/Idea_Badge_Color.png",
                    alt: "Brainiac in the Making",
                },
                unlocked: false,
            },
            {
                BadgeID: 4,
                AchievementTitle: "Baby Steps!",
                AchievementDescription: "Earned when you complete you complete your first topic.",
                image: {
                    src: "img/badges/Like_Badge_Color.png",
                    alt: "Baby Steps",
                },
                unlocked: false,
            },
            {
              BadgeID: 5,
              AchievementTitle: "Knowledge Knight",
              AchievementDescription: "Earned when you complete your first course.",
              image: {
                  src: "img/badges/Medal_Badge_Color.png",
                  alt: "Knowledge Knight",
              },
              unlocked: false,
            },
          {
            BadgeID: 6,
            AchievementTitle: "On a Roll!",
            AchievementDescription: "Earned when you complete 10 lessons.",
            image: {
                src: "img/badges/Monitor_Badge_Color.png",
                alt: "On a Roll",
            },
            unlocked: false,
          },
          {
            BadgeID: 7,
            AchievementTitle: "First Streak!",
            AchievementDescription: "Earned when you learn for 3 days straight.",
            image: {
              src: "img/badges/Shuttle_Badge_Color.png",
              alt: "First Streak",
            },
            unlocked: false,
          },
          {
            BadgeID: 8,
            AchievementTitle: "Overachiever!",
            AchievementDescription: "Earned when you complete all courses available.",
            image: {
              src: "img/badges/Star_Badge_Color.png",
              alt: "Overachiever",
            },
            unlocked: false,
          }
        ];


        const unlocked = computed(() => {
            return achievements.filter(achievement => achievement.unlocked);
        });

        const locked = computed(() => {
            return achievements.filter(achievement => !achievement.unlocked);
        });

        // Insert data into achievement table
	    async function postBadge(){

		    const submitObject = {
			    AchievementTitle: this.AchievementTitle,
			    AchievementDescription: this.AchievementDescription,
		    }

		    // Front End error handling goes here
		
		    await axios.post(AchievementsDB, submitObject)
			    .then((res) => {
				    submitObject.BadgeID = res.data.insertId
				    achievements.value.push(submitObject)
			    }).catch(err => {
				    console.error(err)
			    })
	    }

        return {
            achievements, 
            unlocked, 
            locked,
            AchievementTitle,
            AchievementDescription,
            //AchievementRequirements,
            //showAward,
            //giveBadge,
            //removeBadge,
            BadgeID,
            postBadge
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
