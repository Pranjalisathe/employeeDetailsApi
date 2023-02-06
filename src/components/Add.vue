<template>
<Header/>
<h1>Add Page</h1>
<form class="update">
<input type="text" name="name"  placeholder="Enter Name" v-model="name"/>
<input type="text" v-model="email" placeholder="Enter Email"/>
<input type="text" v-model="role" placeholder="Enter Role"/>
<input type="password" v-model="password" placeholder="Enter password"/>

<button type="button" v-on:click="addEmployee">Add Employee</button>
</form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios';
export default{
    name:'Add',
    components:{
        Header,
    },
       data()
    {
        return{
            employee:{
            name:"",
            email:"",
            role:"",
            password:""
            }
        }
    },  
     methods:{
      async  addEmployee()
      {
            // console.warn( this.employee)
                console.log("Sign up",this.name,this.email,this.role);
             let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                role:this.role,
                password:this.password
             });
             console.warn(result);
            if(result.status==200)
            {
                this.$router.push({name:'Home'});
            }
        }
    
    },
 
    async mounted()
    {
        let user =localStorage.getItem('user-info')
     
    }
    }

</script>