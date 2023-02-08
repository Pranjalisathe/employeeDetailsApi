<template>
<Header/>
<h1>Home</h1>
<br>

<h2>Employees Details</h2>
<table border="1">
<tr class="title">
<td>ID</td>
<td>NAME</td>
<td>EMAIL</td>
<td>ROLE</td>
<td>CREATED AT</td>
<td>UPDATED AT</td>
<td>ACTIONS</td>

<!-- <h1>dhbsjbh</h1> -->
</tr>
<tr class="information" v-for="item in employees" :key="item.id">
<td>{{item.id}}</td>
<td>{{item.name}}</td>
<td>{{item.email}}</td>
<td>{{item.role}}</td>
<td>{{item.createdAt}}</td>
<td>{{item.updatedAt}}</td>
<td ><button id="updatebtn"><router-link :to="'/update/'+item.id">Update</router-link></button>
<button id="deletebtn"><router-link :to="'/delete/'+item.id">Delete</router-link></button>
</td>



<!-- <h1>dhbsjbh</h1> -->
</tr>
</table>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue'
export default{
    name:'Home',
    components:{
        Header
    },
    data(){
        return{
            employees:[]
        }
    },
    
   async mounted(){
      let user=localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name:'Home'})
      }
      let result=await axios.get("http://localhost:3000/users");
      this.employees=result.data
      console.log("api data",result);
      
    }
};
</script>
<style>
.information td{
    color:black;
    background-color:white;
}
#deletebtn{
    background-color:red;
    color:black;
}
#updatebtn{
    background-color:#ddd;
}

</style>