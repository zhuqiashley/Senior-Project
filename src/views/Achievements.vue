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


let achievementDB = 'http://localhost:3001/api/achievement'
let userDB = 'http://localhost:3001/api/user'
let UserAchievementsDB = 'http://localhost:3001/api/userachievements'
let quizDB = 'http://localhost:3001/api/quiz'

export default {
  components:
    {
        CustomHeader,
        Card,
        ProgressBar,
    },
    setup() {
        
        //Get id of user logged in 
        const userid = localStorage.getItem('ID');

        //Achievement Data 
        const AchievementTitle = ref('')
        const AchievementDescription = ref('')
        const achievements = ref([])
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

        //get achievementsDB
        onBeforeMount(async () => {
            await axios.get(achievementDB)
                .then(response => {
                    achievements.value = response.data;
                }).catch(err => {
                    console.error(err);
                 });})

        //Get user DB
        const user = ref('')
        onBeforeMount(async () => {
        await axios.get(userDB)
          .then(response => {
            user.value = response.data;

          }).catch(err => {
            console.error(err);
          });})
        
        //Get UserAchievements DB
        onBeforeMount(async () => {
        await axios.get(UserAchievementsDB)
          .then(response => {
            UserAchievements.value = response.data;

          }).catch(err => {
            console.error(err);
          });})

        //Get quiz DB
        onBeforeMount(async () => {
        await axios.get(quizDB)
          .then(response => {
            quiz.value = response.data;

          }).catch(err => {
            console.error(err);
          });})

        const unlocked = computed(() => {
            return achievements.value.filter(achievement => achievement.unlocked);
        });

        const locked = computed(() => {
            return achievements.value.filter(achievement => !achievement.unlocked);
        });
        
        
        //Functions for checking for Achievement Requirements 
        //If requirements are satisfied, post to database, display notification, update achievements page

        //BadgeID 1 
        //Earned when you first register

        //BadgeID 2
        async function badge2() {
            const badge2Data = await axios.get(userDB, {params: userid, LessonsTaken}).then(res.data);
            for(var i = 0; i < badge2Data.valueOf().length; i++)
            {
                let LessonsTaken = badge2Data[i].LessonsTaken;
                let id = badge2Data[i].UserID;
                console.log(id, LessonsTaken)
                if(LessonsTaken == 1)
                {
                    console.log("Awarded Badge2");

                    achievement.value.unlocked = true;

                    this.$notify({ type: "success", text: "You have earned a badge!" });

                    await axios.post(UserAchievementsDB, {id, BadgeID: '2'})
			            .then((res) => {
				            UserAchievements.UserAchievementsID = res.data.insertId
                            UserAchievements.value.push(id, BadgeID)
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
            if(Quiz1Score == 100 || Quiz2Score == 100 || Quiz3Score == 100)
            {
                console.log("Awarded Badge3");

                achievements.unlocked = true;

                this.$notify({ type: "success", text: "You have earned a badge!" });

                await axios.post(UserAchievementsDB, {id, BadgeID: '3'})
			        .then((res) => {
				        UserAchievements.UserAchievementsID = res.data.insertId
                        UserAchievements.value.push(id, BadgeID)
			    }).catch(err => {
				    console.error(err)
			    })
            }
        }
        }

        //BadgeID 4
        //Earned when user makes first post
        /*
        if user posts = 0 
        if user posts = 1
        award badgeID 4
        achievement.unlocked = true
        */

        //BadgeID 5
        //Earned when user completes first course
        async function badge5() {
        const badge5Data = await axios.get(userDB, {params: userid, CoursesTaken}).then(res.data);
        for(var i = 0; i < badge5Data.valueOf().length; i++)
        {
            let id = badge5Data[i].UserID;
            console.log(id, badge5Data)
            if(CoursesTaken == 1)
            {
                console.log("Awarded Badge5");

                achievements.unlocked = true;

                this.$notify({ type: "success", text: "You have earned a badge!" });

                await axios.post(UserAchievementsDB, {id, BadgeID: '5'})
			        .then((res) => {
				        UserAchievements.UserAchievementsID = res.data.insertId
                        UserAchievements.value.push(id, BadgeID)
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

                achievements.unlocked = true;

                this.$notify({ type: "success", text: "You have earned a badge!" });

                await axios.post(UserAchievementsDB, {id, BadgeID: '6'})
			        .then((res) => {
				        UserAchievements.UserAchievementsID = res.data.insertId
                        UserAchievements.value.push(id, BadgeID)
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
            if(Streaks == 3)
            {
                console.log("Awarded Badge7");

                achievements.unlocked = true;

                this.$notify({ type: "success", text: "You have earned a badge!" });

                await axios.post(UserAchievementsDB, {id, BadgeID: '7'})
			        .then((res) => {
				        UserAchievements.UserAchievementsID = res.data.insertId
                        UserAchievements.value.push(id, BadgeID)
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
            if(CoursesTaken == 6)
            {
                console.log("Awarded Badge7");

                achievements.unlocked = true;

                this.$notify({ type: "success", text: "You have earned a badge!" });

                await axios.post(UserAchievementsDB, {id, BadgeID: '7'})
			        .then((res) => {
				        UserAchievements.UserAchievementsID = res.data.insertId
                        UserAchievements.value.push(id, BadgeID)
			    }).catch(err => {
				    console.error(err)
			    })
            }
        }
        }

        //test notification
        //this.$notify({ type: "warning", text: "This is a test alert" });
        

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
            badge2,
            badge3,
            badge5,
            badge6, 
            badge7,
            badge8
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