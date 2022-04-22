<!-- ======= TEMPLATE ======= -->
<template>
  <div class = "Signup">
    <custom-header title="Profile"></custom-header>
  <!-- ======= UserProfilePage Section ======= -->
  <section id="UserPage" class="d-flex align-items-center">
    <div class="section-title">
      <h1>{{this.userid}}</h1>
    </div>
  </section>
  </div>
  <!-- User streaks here --> 


  <!-- User Goal/to do list here --> 
  <!-- Modified from https://www.w3schools.com/howto/howto_js_todolist.asp -->
 <div id="GoalList" class="header">
  <h2>My Goals</h2>
  <input  v-model="GoalDescription" type="text" id="GoalDescription" placeholder="Add a new goal...">
  <button class="btn btn-primary" @click="AddGoal">Add</button>
</div>

<ul id="myUL">
  <li>Ace a quiz</li>
</ul>

</template>

<!-- ======= SCRIPT ======= -->
<script>
import Card from '../components/Card.vue'
import CustomHeader from '../components/Header.vue'
//import Card from '../components/Card.vue'
//import axios from "axios"

//const goalDB = 'http://localhost:3001/api/goal'
//const deleteGoalDB = 'http://localhost:3001/api/goal/'

//import router from "../router"

let userDB = 'http://localhost:3001/api/userwithoutid'
let userwithidDB = 'http://localhost:3001/api/user'

export default {
    components:
    {
    CustomHeader,
    //Card
},
  setup(){

    const users = ref([])
    const data1 = ref([])
    let id = localStorage.getItem('ID');
    const intID = id;
    onBeforeMount(async () => {
      await axios.get(userDB, {params:{UserID : intID}})
          .then(response => {
            users.value = response.data;

          }).catch(err => {
            console.error(err);
          });

          await axios.get(userwithidDB, {params:{UserID : intID}})
          .then(response => {
            data1.value = response.data;
          }).catch(err=>{
            console.error(err);
            console.log(err);
          });
          })

          /*async function pullProfile(id)
          {
            axios.get(userwithidDB, {params:{UserID : intID}})
          .then(response => {
            data1.value = response.data;
          }).catch(err=>{
            console.error(err);
            console.log(err);
          });
          }*/

      //const data1 = axios.get(userwithidDB, {params:{UserID : id}}).then(res => res.data);
      console.log(data1);

      let firstName = data1.value.FirstName; 
      let lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel
      let length = 100;
      length = localStorage.length;
      console.log(id);
      console.log(length);
      console.log(users);


      /*
      //Goals start
      const GoalDescription = ref('')
      const GoalTimeCreated = ref('')

      // access goals database for display
      onBeforeMount(async () => {
        await axios.get(goalDB)
            .then(response => {
                goals.value = response.data;

            }).catch(err => {
                console.error(err);
            });
		  },
      );

      // pass goal ID to delete goal
	    async function deleteGoal(GoalID){
		    axios.delete(deleteGoalDB + GoalID)

		    .then(res => {
			    goals.value.splice(goals.value.indexOf(GoalID), 1);
			    console.log(res);
		    });
	    }

	    // Insert data into Goals table
	    async function AddGoal(){

		    const postTime = new Date(this.GoalTimeCreated)
		    postTime.setHours(postTime.getHours() - 8 ) // set to PST

		    const submitObject = {
			  GoalDescription: this.GoalDescription,
			  GoalTimeCreated: postTime.toISOString().slice(0, 19).replace('T', ' '), // formatting found on stack overflow
		}

		// Front End error handling goes here
		
		await axios.post(goalDB, submitObject)
			.then((res) => {
				submitObject.GoalID = res.data.insertId
				goals.value.push(submitObject)
			}).catch(err => {
				console.error(err)
			})
	}
*/

//Streaks Widget goes here 
/*
var OneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)

// formatting found on stack overflow
function timeNow() {
    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
}

// The timeNow time is less than 1 days from now
if (this.count > 0 && OneDay > timeNow) {
  this.count++;
}

// The timeNow time is more than 1 days from now
if (OneDay < timeNow) {
  this.count == 0;
}
*/
  return {
        userid,
        //goals,
        //GoalDescription,
        //GoalTimeCreated,
        //GoalID,
        //deleteGoal,
        //AddGoal,
        //timeNow
  }
    },
  /*name: "Login",
  data() {
    return {
      user: {
        name: ""
      }
    }
  },

  methods:{
    login: async function(){
      const email = localStorage.getItem('ID');
      try{
        const data = await axios.get(userDB, {params: {UserID: email}}).then(res => res.data);
        console.log(data);
        for(var i = 0; i < data.valueOf().length; i++)
        {
          let id = data[i].UserID;
          /*let variablecheck = data[i].FirstName;
          console.log(variablecheck);*/
          this.firstNameLabel = "First Name: ";
          this.lastNameLabel = "Last Name: "
          this.emailLabel = "Email: "
          this.roleLabel = "Role: "
          if(id == email)
          {
            this.firstName = data[i].FirstName;
            console.log(this.firstName);
            this.lastName = data[i].LastName;
            console.log(this.lastName);
            this.email = data[i].username;
            console.log(this.email);
            this.role = data[i].Role;
            console.log(this.role);
            this.$forceUpdate();
          }
        }
      }
      catch
      {
        await this.$router.push('Events');
      }
    },
    edit: async function(){
      await this.$router.push('EditProfile');
    }
  }
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  width: 500px;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #2fd5db;
  color: white;
}

/* Style the header */
.header {
  background-color: #2fd5db;
  padding: 10px 20px;
  color: white;
  text-align: center;
  width: 500px;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 15%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
