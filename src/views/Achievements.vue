<!-- popup achievement system (HTML/CSS/JS) - adapted from codepen.io -->

<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>

    <div class="ach">
        <div class="icon">
            <img src="../assets/img/badges/flag.png" class="img-fluid" alt="">
        </div>
    <div class="text_wrap">
        <p class="title">Button Clicker!</p>
        <span class="detail">you clicked a button</span>
    </div>
    </div>

    <button onclick='achievementUnlocked("You have done something!");'>Get achievement!</button>

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
import $ from 'jquery';

//const achievementsDB = 'http://localhost:3001/api/achievements'
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
        //const AchievementTitle = ref('')
        //const AchievementDescription = ref('')
        //const AchievementRequirements = ref('')
        //const giveBadge = ref('')
        //const removeBadge = ref('')
        //const BadgeID = ref('')

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

        function achievementUnlocked(text){
            var hasClass = $('.ach').hasClass('achieved');
            if (hasClass) return;
            $('.title').html("Achievement unlocked!");
            $('.detail').html(text);
            $('.ach').addClass("achieved");
            setTimeout(function(){
                $('.ach').removeClass("achieved");
            },5000)
        }

        return {
            achievements, 
            unlocked, 
            locked,
            achievementUnlocked,
            //AchievementTitle,
            //AchievementDescription,
            //AchievementRequirements,
            //showAward,
            //giveBadge,
            //removeBadge,
            //BadgeID
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

    * {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    html {
        overflow-y: scroll;
    }

    .ach {
        background: #14b5d1;
        display: block;
        position: fixed;
        bottom: -5em;
        left: 50%;
        margin-left: -175px;
        width: 350px;
        height: 65px;
        color: #fff;
        font-size: 16px;
        padding: 0 1.2em 0 0;
    }

    .ach .icon {
        float: left;
        font-size: 2.2em;
        width: 65px;
        padding: 0.1em 0 0;
        text-align: center;
    }

    .ach .text_wrap {
        position: absolute;
        left: 65px;
        width: 250px;
        top: 0.7em;
        overflow: hidden;
    }

    .ach .title {
        font-size: 0.9em;
        width: 260px;
        margin: 0 0 -0.2em;
        padding: 0;
    }

    .ach .detail {
        font-size: 0.7em;
        width: 260px;
        margin: 0;
        color: rgba(255, 255, 255, 0.7);
        font-style: italic;
    }

    .ach {
        -webkit-transition: all .1s ease-out;
        -moz-transition: all .1s ease-out;
        -o-transition: all .1s ease-out;
        transition: all .1s ease-out;
    }

    @keyframes ach_in_anim {
        0% {
            bottom: -5em;
            width: 65px;
            margin-left: -32.5px;
            border-radius: 50%;
        }
        15% {
            bottom: 2.2em;
            width: 65px;
            margin-left: -32.5px;
        }
        25% {
            bottom: 1em;
            width: 65px;
            margin-left: -32.5px;
        }
        75% {
            bottom: 1em;
            width: 65px;
            margin-left: -32.5px;
        }
        85% {
            bottom: 1em;
            width: 65px;
            margin-left: -32.5px;
            border-radius: 50%;
        }
        92% {
            bottom: 1em;
            width: 380px;
            margin-left: -190px;
            border-radius: 0;
        }
        100% {
            bottom: 1em;
            width: 350px;
            margin-left: -175px;
            border-radius: 0;
        }
    }   

    @keyframes ach_current {
        0% {
            bottom: 1em;
            width: 350px;
            margin-left: -175px;
        }
        100% {
            bottom: 1em;
            width: 350px;
            margin-left: -175px;
        }
    }

    @keyframes ach_out_anim {
        0% {
            bottom: 1em;
            width: 350px;
            margin-left: -175px;
            border-radius: 50%;
        }
        16% {
            bottom: 1em;
            width: 65px;
            margin-left: -32.5px;
            border-radius: 50%;
        }
        20% {
            bottom: 1em;
            width: 50px;
            margin-left: -25px;
        }
        34% {
            bottom: 1em;
            width: 65px;
            margin-left: -32.5px;
        }
        70% {
            bottom: 1em;
            width: 65px;
            margin-left: -32.5px;
        }
        100% {
            bottom: -5em;
            width: 65px;
            margin-left: -32.5px;
            border-radius: 50%;
        }
    }

    .achieved {
        animation: ach_in_anim 1.4s, ach_current 3s, ach_out_anim 0.8s;
        animation-delay: 0s, 1.4s, 4.4s;
    }

    @keyframes i_in_anim {
        0% {
            transform: scale(0);
        }
        45% {
            transform: scale(0)
        }
        46% {
            transform: scale(0.4)
        }
        50% {
            transform: scale(1);
        }
        55% {
            transform: scale(1.2);
        }
        60% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes i_current {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes i_out_anim {
        0% {
            transform: scale(1);
        }
        46% {
             transform: scale(1);
        }
        47% {
            transform: scale(1.2);
        }
        56% {
            transform: scale(1);
        }
        60% {
            transform: scale(0.4)
        }
        65% {
            transform: scale(0);
        }
        100% {
            transform: scale(0);
        }
    }

    .achieved .icon i {
        animation: i_in_anim 1.4s, i_current 3s, i_out_anim 0.8s;
        animation-delay: 0s, 1.4s, 4.4s;
    }

    @keyframes text_in_anim {
        0% {
            width: 0;
        }
        85% {
            width: 0;
        }
        100% {
            width: 260px;
        }
    }

    @keyframes text_out_anim {
        0% {
            width: 260px;
        }
        12% {
             width: 0;
        }
        100% {
            width: 0;
        }
    }

    .achieved .text_wrap {
        animation: text_in_anim 1.4s, text_out_anim 0.8s;
        animation-delay: 0s, 4.4s;
    }

</style>
