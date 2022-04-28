<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>
    <div class="container mt-4">
        <!-- Progress Bar -->
        <!--<progress-bar :progress="(unlocked.length / (locked.length + unlocked.length)) * 100" /> -->
        <progress-bar :progress="achievementProgress" />

        <!--Badges for display -->
        <div class="parent">
            <card :horizontal="true" :image="this.achievements[0].image"> 
                    <template #title>
                        {{this.achievements[0].title}}
                    </template>
                    <template #body>
                        {{this.achievements[0].description}}
                    </template>
                </card>
            <card v-if="introQuizCheck" :horizontal="true" :image="this.achievements[6].image"> 
                    <template #title>
                        {{this.achievements[6].title}}
                    </template>
                    <template #body>
                        {{this.achievements[6].description}}
                    </template>
                </card>
            </div>
            <div class="parent">
            <card v-if="eventCheck" :horizontal="true" :image="this.achievements[1].image"> 
                    <template #title>
                        {{this.achievements[1].title}}
                    </template>
                    <template #body>
                        {{this.achievements[1].description}}
                    </template>
                </card>
            <card v-if="perfectScoreCheck" :horizontal="true" :image="this.achievements[2].image"> 
                    <template #title>
                        {{this.achievements[2].title}}
                    </template>
                    <template #body>
                        {{this.achievements[2].description}}
                    </template>
                </card>
            </div>
            <div class="parent">
            <card v-if="chapter1Check" :horizontal="true" :image="this.achievements[3].image"> 
                    <template #title>
                        {{this.achievements[3].title}}
                    </template>
                    <template #body>
                        {{this.achievements[3].description}}
                    </template>
                </card>
            <card v-if="chapter2Check" :horizontal="true" :image="this.achievements[4].image"> 
                    <template #title>
                        {{this.achievements[4].title}}
                    </template>
                    <template #body>
                        {{this.achievements[4].description}}
                    </template>
                </card>
            </div>
            <div class="parent">
            <card v-if="chapter3Check" :horizontal="true" :image="this.achievements[3].image"> 
                    <template #title>
                        {{this.achievements[5].title}}
                    </template>
                    <template #body>
                        {{this.achievements[5].description}}
                    </template>
                </card>
            <card v-if="chapter4Check" :horizontal="true" :image="this.achievements[4].image"> 
                    <template #title>
                        {{this.achievements[8].title}}
                    </template>
                    <template #body>
                        {{this.achievements[8].description}}
                    </template>
                </card>
            </div>
            <div class="parent">
            <card v-if="chapter5Check" :horizontal="true" :image="this.achievements[3].image"> 
                    <template #title>
                        {{this.achievements[9].title}}
                    </template>
                    <template #body>
                        {{this.achievements[9].description}}
                    </template>
                </card>
            <card v-if="chapter6Check" :horizontal="true" :image="this.achievements[4].image"> 
                    <template #title>
                        {{this.achievements[10].title}}
                    </template>
                    <template #body>
                        {{this.achievements[10].description}}
                    </template>
                </card>
            </div>
            <div class="parent">
            <card v-if="false" :horizontal="true" :image="this.achievements[5].image"> 
                    <template #title>
                        {{this.achievements[5].title}}
                    </template>
                    <template #body>
                        {{this.achievements[5].description}}
                    </template>
                </card>
            <card v-if="allcoursescheck" :horizontal="true" :image="this.achievements[7].image"> 
                    <template #title>
                        {{this.achievements[7].title}}
                    </template>
                    <template #body>
                        {{this.achievements[7].description}}
                    </template>
                </card>
            </div>

        <!--<div class="parent">
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
        </div>-->


    <Notification ref="alert"></Notification>
    </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import { computed,onBeforeMount, reactive, ref } from 'vue';
import CustomHeader from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import ProgressBar from '@/components/ProgressBar.vue';
import axios from 'axios';
import Notification from '../components/Alert.vue'

let introQuizDB = 'http://localhost:3001/api/introresult/'
let eventIDDB = 'http://localhost:3001/api/usereventwithid/'
let quizIDDB = 'http://localhost:3001/api/quizscoreswithid/'
let courseDB = 'http://localhost:3001/api/coursecompletionwithid/'

export default {
  components:
    {
        CustomHeader,
        Card,
        ProgressBar,
        Notification
    },
    setup() {
        const User = reactive({});
        const eventID = ref('')
        const quiz = ref([])
        const course = ref([])

        //get user data for events, courses, and quizzes
        onBeforeMount(async () => {
        await axios.get(`${introQuizDB}${localStorage.getItem('ID')}`)
          .then(response => {
            Object.assign(User, response.data);
          }).catch(err => {
            console.error(err);
          });
          await axios.get(`${eventIDDB}${localStorage.getItem('ID')}`)
          .then(response => {
            eventID.value = response.data;
          }).catch(err => {
            console.error(err);
          });
          await axios.get(`${quizIDDB}${localStorage.getItem('ID')}`)
          .then(response => {
            quiz.value = response.data;
            //console.log(quiz.value[0]);
          }).catch(err => {
            console.error(err);
          });
          await axios.get(`${courseDB}${localStorage.getItem('ID')}`).then(response => {
            course.value = response.data;
            console.log(course);
          }).catch(err => {
            console.error(err);
          });
        })
        
        //acheivement data
        const achievements = [
            {
                title: "Welcome to the Class",
                description: "Earned when you first registered.",
                image: {
                    src: "img/badges/Cup_Badge_Color.png",
                    alt: "Welcome to the Class",
                },
                unlocked: true, //auto unlocks for every user
            },
            {
                title: "Event Master!",
                description: "Earned when you sign up for an event.",
                image: {
                    src: "img/badges/Growth_Badge_Color.png",
                    alt: "Event Master",
                },
                unlocked: false,
            },
            {
                title: "Brainiac in the Making!",
                description: "Earned the first time you get a perfect score on a quiz.",
                image: {
                    src: "img/badges/Idea_Badge_Color.png",
                    alt: "Brainiac in the Making",
                },
                unlocked: false,
            },
            {
                title: "Cybersecurity Quiz Master",
                description: "Earned when you complete all Quizzes in Cybersecurity.",
                image: {
                    src: "img/badges/Like_Badge_Color.png",
                    alt: "Baby Steps",
                },
                unlocked: false,
            },
            {
              title: "Data Science Quiz Master",
              description: "Earned when you complete all Quizzes in Data Science.",
              image: {
                  src: "img/badges/Medal_Badge_Color.png",
                  alt: "Knowledge Knight",
              },
              unlocked: false,
            },
          {
            title: "Big Data!",
            description: "Earned when you complete all quizzes in Big Data.",
            image: {
                src: "img/badges/Monitor_Badge_Color.png",
                alt: "On a Roll",
            },
            unlocked: false,
          },
          {
            title: "Intro Learner!",
            description: "Earned when you complete the Introductory Quiz.",
            image: {
              src: "img/badges/Shuttle_Badge_Color.png",
              alt: "Intro Learner",
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
          },
          {
                title: "Machine Learning and AI Quiz Master",
                description: "Earned when you complete all Quizzes in Machine Learning and AI.",
                image: {
                    src: "img/badges/Like_Badge_Color.png",
                    alt: "Baby Steps",
                },
                unlocked: false,
            },
            {
              title: "Web Development Quiz Master",
              description: "Earned when you complete all Quizzes in Web Development.",
              image: {
                  src: "img/badges/Medal_Badge_Color.png",
                  alt: "Knowledge Knight",
              },
              unlocked: false,
            },
            {
            title: "Metaverse Quiz Master!",
            description: "Earned when you complete all quizzes in Metaverse.",
            image: {
                src: "img/badges/Monitor_Badge_Color.png",
                alt: "On a Roll",
            },
            unlocked: false,
          }
        ];

        console.log(achievements);

        //Unlocks badge when requirements are satistied
        const unlocked = computed(() => {
            return achievements.filter(achievement => achievement.unlocked);
        });

        //Locks badge until unlocked
        const locked = computed(() => {
            return achievements.filter(achievement => !achievement.unlocked);
        });

        return {
            achievements, unlocked, locked, User, eventID, quiz, course
        }
        //get user id
        //get achievement
        //check achievement requirements
        //award achievement & update user profile - event triggered  w/ pop-up of badge icon
    },
    computed:{
        //Badge 7
        introQuizCheck(){
            if(this.User.TypeOfLearner === 1 || this.User.TypeOfLearner === 2 || this.User.TypeOfLearner === 3){
            //console.log("inside");
            //alert.value.addAlert('Success', 'Good Work! You have earned a badge!', 3000); --> DOESN'T WORK 
            return true;
            }
        return false;
        },
        //Badge 2
        eventCheck(){
            if(this.eventID.length >0 ){
            //console.log("inside");
            return true;
            }
        return false;
        },
        //Badge 3
        perfectScoreCheck(){
            for(let k = 0; k < this.quiz.length; k++)
            {
                if(this.quiz[k].Score == 100)
                {
                    return true;
                }
            }
            return false;
        },
        //Badge 4
        chapter1Check()
        {
            let count = 0;
            for(let i = 0; i < this.quiz.length; i++)
            {
                if(this.quiz[i].ChapterID < 6)
                {
                    count++;
                }
            }
            if(count == 5)
            {
                return true;
            }
            else{
                return false;
            }
        },
        //Badge 5
        chapter2Check()
        {
            //let none = true;
            let count = 0;
            for(let i = 0; i < this.quiz.length; i++)
            {
                if(this.quiz[i].ChapterID < 11 && this.quiz[i].ChapterID > 5)
                {
                    count++;
                }
            }
            if(count == 5)
            {
                return true;
            }
            else{
                return false;
            }
        },
        //Badge 6
        chapter3Check()
        {
            let count = 0;
            for(let i = 0; i < this.quiz.length; i++)
            {
                if(this.quiz[i].ChapterID < 16 && this.quiz[i].ChapterID > 10)
                {
                    count++;
                }
            }
            if(count == 5)
            {
                return true;
            }
            else{
                return false;
            }
        },
        chapter4Check()
        {
            let count = 0;
            for(let i = 0; i < this.quiz.length; i++)
            {
                if(this.quiz[i].ChapterID < 21 && this.quiz[i].ChapterID > 15)
                {
                    count++;
                }
            }
            if(count == 5)
            {
                return true;
            }
            else{
                return false;
            }
        },
        chapter5Check()
        {
            let count = 0;
            for(let i = 0; i < this.quiz.length; i++)
            {
                if(this.quiz[i].ChapterID < 26 && this.quiz[i].ChapterID > 20)
                {
                    count++;
                }
            }
            if(count == 5)
            {
                return true;
            }
            else{
                return false;
            }
        },
        chapter6Check()
        {
            let count = 0;
            for(let i = 0; i < this.quiz.length; i++)
            {
                if(this.quiz[i].ChapterID > 25)
                {
                    count++;
                }
            }
            if(count == 5)
            {
                return true;
            }
            else{
                return false;
            }
        },
        //Badge 8
        allcoursescheck() 
        {
            /*let none = true;
            for(let i = 0; i < this.course.length; i++)
            {
                if(this.course[i].course_id < 16 && this.course[i].course_id > 6)
                {
                    none = false;
                    console.log(this.course[i].CourseComplete);
                    if(this.course[i].CourseComplete == 6)
                    {
                        console.log("insidefalse");
                        return false;
                    }
                }
            }
            if(!none)
            {
                return true;
            }
            else{
                return false;
            }*/
            return false;
        }
        ,
        achievementProgress()
        {
            let progress= 10;
            if(this.introQuizCheck)
            {progress += 10;}
            if(this.eventCheck)
            {progress += 10;}
            if(this.perfectScoreCheck)
            {progress += 10;}
            if(this.chapter1Check)
            {progress += 10;}
            if(this.chapter2Check)
            {progress += 10;}
            if(this.chapter3Check)
            {progress += 10;}
            if(this.chapter4Check)
            {progress += 10;}
            if(this.chapter5Check)
            {progress += 10;}
            if(this.chapter6Check)
            {progress += 10;}
            return progress;
        }
    }
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