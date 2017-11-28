<template>
  <div class="test">
	<h1>{{aylmao}}</h1>
	<p v-if="showName">{{fullname}}</p>
	<p v-else>Nobody</p>
	<br/>
	<label>First Name   </label><input type="text" v-model="user.firstName"></input>
	<br/>
	<label>Last Name   </label><input type="text" v-model="user.lastName"></input>
	<br/>
	<button v-on:click="greet('RIP')">Say Greeting</button>
	<br />
	<form v-on:submit="add">
	  <label>I love: </label><input type="text" v-model="data.loved">
	  <br />
	  <label>Wish to live with: </label><input type="text" v-model="data.lived">
	  <br/>
	  <input type="submit" value="Add to list"></input>
	  <br />
	</form>
	
	<h3>Loved | Lived</h3>
	<ul>
	  <li v-for="item in lovedLived">
	    {{item.loved}} | {{item.lived}}
	  </li>
	</ul>
	<p>{{msg}}</p>
  </div>
 </template>
 
 <script>
   export default{
      name:'test',
	  props:{
	    msg:{
		  type: String,
		  default: ' '
		}
	  },
      data(){
	    return{
	      aylmao:'Hello World',
		  user:{
		    firstName: 'Alejandro',
		    lastName: 'Vinasco'
		  },
		  data:{
		    loved: ' ',
			lived: ' '
		  },
		  showName: true,
		  lovedLived: [
		    {
			loved: 'Someone',
			lived: 'None'
			}
		  ]
	    }
	  },
	  methods:{
	    greet: function(greeting){
		  alert(greeting);
		  this.showName= this.showName? false : true;
		},
		pressKey: function(e){
		  console.log(e.target.value);
		},
		enter: function(){
		  console.log('You pressed enter');
		},
		add: function(e){
		  this.lovedLived.push({
		    lived: this.data.lived,
			loved: this.data.loved
		  });
		  e.preventDefault();
		}
		
	  },
	  computed:{
	    fullname: function(){
		  return this.user.firstName + ' ' + this.user.lastName
		}
	  }
	  
   }
</script>

<style scoped>

</style>