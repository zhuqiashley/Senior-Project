<!-- ======= TEMPLATE ======= -->
<template>
    <custom-header title="Profile"></custom-header>
  <!-- ======= UserProfilePage Section ======= -->
  <section id="UserPage" class="d-flex align-items-center">
    <div class="section-title">
      <h1>{{this.userid}}</h1>
    </div>
  </section>

  <!-- User streaks here --> 
 <div id="DailyStreaks" class="header">
  <h2>My Daily Login Streaks</h2>
  <p>{{this.count}}</p>
</div>


  <!-- User Goal/to do list here --> 
  <!-- Modified from https://www.w3schools.com/howto/howto_js_todolist.asp -->
 <div id="GoalList" class="header">
  <h2>My Goals</h2>
  <input  type="text" id="myInput" placeholder="Add a new goal...">
  <span onclick="newElement()" class="addBtn">Add</span>
</div>

<ul id="myUL">
  <li v-for="(goal, index) in goals" v-bind:key="index">{{goal.GoalDescription}}</li>
</ul>

</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
//import Card from '../components/Card.vue'
//import axios from "axios"

//const goalDB = 'http://localhost:3001/api/goal'
//const deleteGoalDB = 'http://localhost:3001/api/goal/'

//import router from "../router"
export default {
    components:
    {
    CustomHeader,
    //Card
},
  setup(){
      let userid = 100;
      let length = 100;
      userid = localStorage.getItem('ID');
      length = localStorage.length;
      console.log(userid);
      console.log(length);

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
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 

//Streaks Widget goes here 

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

  return {
        userid,
        //goals,
        //GoalDescription,
        //GoalTimeCreated,
        //GoalID,
        //deleteGoal,
        //AddGoal,
        newElement,
        timeNow
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
  methods: {
    getUserData: function() {
      let self = this
      axios.get("/api/user")
          .then((response) => {
            console.log(response)
            self.$set(this, "user", response.data.user)
          })
          .catch((errors) => {
            console.log(errors)
            router.push("/")
          })
    }
  },
  mounted() {
    this.getUserData()
  }*/
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
