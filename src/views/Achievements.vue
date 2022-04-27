<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Achievements"></custom-header>
    <div class="container mt-4">
        <progress-bar :progress="(unlocked.length / (locked.length + unlocked.length)) * 100" />


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



        <!--<div class="parent">
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
        </div>-->



    </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import { computed,onBeforeMount, reactive, ref } from 'vue';
import CustomHeader from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import ProgressBar from '@/components/ProgressBar.vue';
import axios from 'axios';

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
            title: "On a Roll!",
            description: "Earned when you complete 10 lessons.",
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
          }
        ];
        console.log(achievements);

        const AchievementTitle = ref('')
        const AchievementDescription = ref('')
        const UserAchievements = ref('')
        const BadgeID = ref(')')

        //Quiz Score Data
        const quiz = ref('')
        const Quiz1Score = ref('')
        const Quiz2Score = ref('')
        const Quiz3Score = ref('')

        //Related User Data
        const LessonsTaken = ref('')
        const CoursesTaken = ref('')
        const Streaks = ref('')

        // User Data
	    const User = reactive({});

        //access achievementsDB
        onBeforeMount(async () => {
            //get Achievement data
            await axios.get(achievementDB)
                .then(response => {
                    achievements.value = response.data;
                }).catch(err => {
                    console.error(err);
                });
            
            //get user data
            await axios.get(`${userDB}${localStorage.getItem('ID')}`)
			    .then(response => {
				    Object.assign(User, response.data);
			    }).catch(err => {
				    console.error(err);
			});   

            //get user db
            await axios.get(userDB)
                .then(response => {
                    user.value = response.data;
                }).catch(err => {
                    console.error(err);
            });

            //get quiz data 
            await axios.get(quizDB)
                .then(response => {
                    quiz.value = response.data;
                }).catch(err => {
                    console.error(err);
            });
        })

        const unlocked = computed(() => {
            return achievements.value.filter(achievement => achievement.unlocked);
        });

        const locked = computed(() => {
            return achievements.value.filter(achievement => !achievement.unlocked);
        });
        
        //Functions for checking for Achievement Requirements 
        //If requirements are satisfied, post to database, display notification, update achievements page

        return {
            achievements, unlocked, locked, User, eventID, quiz, course
        }

        //BadgeID 2
        async function badge2() {
          const badge2Data = await axios.get(userDB, {params: userid, LessonsTaken}).then(res.data);
          for(var i = 0; i < badge2Data.valueOf().length; i++)
          {
            let LessonsTaken = badge2Data[i].LessonsTaken;
            let id = badge2Data[i].userid;
            console.log(id, LessonsTaken)
            if(LessonsTaken == 1)
            {
              console.log("Awarded Badge2");

              achievements.value.unlocked = true;

              await axios.post(UserAchievementsDB, {id, BadgeID: '2'})
                .then((res) => {
                    UserAchievements.value.UserAchievementsID = res.data.insertId
                    UserAchievements.value.BadgeID = '2'
                    UserAchievements.value.UserID = userid

                    alert.value.addAlert('success', 'You have earned a badge!', 3000);
                }).catch(err => {
                    console.error(err)
                })
            }
          }
        }

        //BadgeID 3
        // Earned when user aces first quiz
        async function badge3() {
        const badge3Data = await axios.get(quizDB, {params: userid}).then(res.data);
        for(var i = 0; i < badge3Data.valueOf().length; i++)
        {
            let id = badge3Data[i].UserID;
            console.log(id, badge3Data)
            if(Quiz1Score.value == 100 || Quiz2Score.value == 100 || Quiz3Score.value == 100)
            {
                console.log("Awarded Badge3");

                achievements.value.unlocked = true;

                await axios.post(UserAchievementsDB, {id, BadgeID: '3'})
                    .then((res) => {
                        UserAchievements.value.UserAchievementsID = res.data.insertId
                        UserAchievements.value.BadgeID = '3'
                        UserAchievements.value.UserID = userid

                        alert.value.addAlert('success', 'You have earned a badge!', 3000);
                }).catch(err => {
                    console.error(err)
                })
            }
        }
        }

        //BadgeID 4
        //Earned when user makes first post
        async function badge4() {
        const badge4Data = await axios.get({params: userid}).then(res.data);
        for(var i = 0; i < badge4Data.valueOf().length; i++)
        {
            let id = badge4Data[i].UserID;
            console.log(id, badge4Data)
            if(comment = 1)
            {
                console.log("Awarded Badge3");

                achievements.value.unlocked = true;

                await axios.post(UserAchievementsDB, {id, BadgeID: '4'})
                    .then((res) => {
                        UserAchievements.value.UserAchievementsID = res.data.insertId
                        UserAchievements.value.BadgeID = '4'
                        UserAchievements.value.UserID = userid

                        alert.value.addAlert('success', 'You have earned a badge!', 3000);
                }).catch(err => {
                    console.error(err)
                })
            }
        }
        }

        //BadgeID 5
        //Earned when user completes first course
        async function badge5() {
        const badge5Data = await axios.get(userDB, {params: userid, CoursesTaken}).then(res.data);
        for(var i = 0; i < badge5Data.valueOf().length; i++)
        {
            let id = badge5Data[i].UserID;
            console.log(id, badge5Data)
            if(CoursesTaken.value == 1)
            {
                console.log("Awarded Badge5");

                achievements.value.unlocked = true;

                await axios.post(UserAchievementsDB, {id, BadgeID: '5'})
                    .then((res) => {
                        UserAchievements.value.UserAchievementsID = res.data.insertId
                        UserAchievements.value.BadgeID = '5'
                        UserAchievements.value.UserID = userid

                        alert.value.addAlert('success', 'You have earned a badge!', 3000);
                }).catch(err => {
                    console.error(err)
                })
            }
        }
        }

        //BadgeID 6
        //Earned when user completes 10 lessons
        async function badge6() {
        const badge6Data = await axios.get(userDB, {params: userid, LessonsTaken}).then(res.data);
        for(var i = 0; i < badge6Data.valueOf().length; i++)
        {
            let LessonsTaken = badge6Data[i].LessonsTaken;
            let id = badge6Data[i].UserID;
            console.log(id, LessonsTaken)
            if(LessonsTaken == 10)
            {
                console.log("Awarded Badge6");

                achievements.value.unlocked = true;

                await axios.post(UserAchievementsDB, {id, BadgeID: '6'})
                    .then((res) => {
                        UserAchievements.value.UserAchievementsID = res.data.insertId
                        UserAchievements.value.BadgeID = '6'
                        UserAchievements.value.UserID = userid

                        alert.value.addAlert('success', 'You have earned a badge!', 3000);
                }).catch(err => {
                    console.error(err)
                })
            }
        }
        }

        //BadgeID 7
        //Earned when user has daily login streaks of 3 days
        async function badge7() {
        const badge7Data = await axios.get(userDB, {params: userid, Streaks}).then(res.data);
        for(var i = 0; i < badge7Data.valueOf().length; i++)
        {
            let id = badge7Data[i].UserID;
            console.log(id, badge7Data)
            if(Streaks.value == 3)
            {
                console.log("Awarded Badge7");

                achievements.value.unlocked = true;

                await axios.post(UserAchievementsDB, {id, BadgeID: '7'})
                    .then((res) => {
                        UserAchievements.value.UserAchievementsID = res.data.insertId
                        UserAchievements.value.BadgeID = '7'
                        UserAchievements.value.UserID = userid

                        alert.value.addAlert('success', 'You have earned a badge!', 3000);
                }).catch(err => {
                    console.error(err)
                })
            }
        }
        }

        //BadgeID 8
        //Earned when user completes all courses 
        async function badge8() {
        const badge8Data = await axios.get(userDB, {params: userid, CoursesTaken}).then(res.data);
        for(var i = 0; i < badge8Data.valueOf().length; i++)
        {
            let id = badge8Data[i].UserID;
            console.log(id, badge8Data)
            if(CoursesTaken.value == 6)
            {
                console.log("Awarded Badge7");

                achievements.value.unlocked = true;

                await axios.post(UserAchievementsDB, {id, BadgeID: '8'})
                    .then((res) => {
                        UserAchievements.value.UserAchievementsID = res.data.insertId
                        UserAchievements.value.BadgeID = '8'
                        UserAchievements.value.UserID = userid

                        alert.value.addAlert('success', 'You have earned a badge!', 3000);
                }).catch(err => {
                    console.error(err)
                })
            }
        }
        }
        return {
            achievements, 
            AchievementTitle, 
            AchievementDescription, 
            BadgeID, 
            LessonsTaken,
            Quiz1Score,
            Quiz2Score,
            Quiz3Score,
            CoursesTaken,
            Streaks,
            unlocked, 
            locked,
            //id
            userid,
            badge1,
            badge2,
            badge3,
            badge4,
            badge5,
            badge6,
            badge7,
            badge8,
        }
    },
    computed:{
        introQuizCheck(){
            if(this.User.TypeOfLearner === 1 || this.User.TypeOfLearner === 2 || this.User.TypeOfLearner === 3){
            //console.log("inside");
            return true;
            }
        return false;
        },
        eventCheck(){
            if(this.eventID.length >0 ){
            //console.log("inside");
            return true;
            }
        return false;
        },
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
        chapter1Check()
        {
            let none = true;
            for(let i = 0; i < this.course.length; i++)
            {
                if(this.course[i].course_id < 6)
                {
                    none = false;
                    if(this.course[i].QuizComplete == 0)
                    {
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
            }
        },
        chapter2Check()
        {
            let none = true;
            for(let i = 0; i < this.course.length; i++)
            {
                if(this.course[i].course_id < 11 && this.course[i].course_id > 5)
                {
                    console.log("insidechapter2");
                    none = false;
                    console.log(this.course[i].QuizComplete);
                    if(this.course[i].QuizComplete == 0)
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
            }
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