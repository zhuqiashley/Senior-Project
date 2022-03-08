<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>
    
    <div class="container mt-4">
        <progress-bar :progress="(unlocked.length / (locked.length + unlocked.length)) * 100" />

        <div class="parent">
            <div v-for="(achievement, index) in achievements" v-bind:key="index">
                <card :horizontal="true" :image="achievement.image" :class="['mt-4', achievement.unlocked ? '' : 'locked']"> 
                    <template #title>
                        {{achievement.title}}
                    </template>
                    <template #body>
                        {{achievement.description}}
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

export default {
  components:
    {
        CustomHeader,
        Card,
        ProgressBar,
    },
    setup() {

        const achievements = [
            {
                title: "Welcome to the Class",
                description: "Earned when you first registered.",
                image: {
                    src: "img/badges/Cup_Badge_Color.png",
                    alt: "Welcome to the Class",
                },
                unlocked: true,
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
            return achievements.filter(achievement => achievement.unlocked);
        });

        const locked = computed(() => {
            return achievements.filter(achievement => !achievement.unlocked);
        });

        return {
            achievements, unlocked, locked,
        }

        //get user id
        //get achievement
        //check achievement requirements
        //award achievement & update user profile - event triggered  w/ pop-up of badge icon

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
