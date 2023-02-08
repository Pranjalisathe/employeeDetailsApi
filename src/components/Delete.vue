<template>
<Header/>
<h1>Delete Page</h1>
<form class="update">
<input type="text" name="name"  placeholder="Enter Name" v-model="employee.name"/>
<input type="text" v-model="employee.email" placeholder="Enter Email"/>
<input type="text" v-model="employee.role" placeholder="Enter Role"/>
<input type="password" v-model="employee.password" placeholder="Enter password"/>

<button type="button" v-on:click="deleteEmployee">Delete Emplaoyee</button>
</form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios';
export default{
    name:'Delete',
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
    },   methods:{
      async  deleteEmployee()
      {
            // console.warn( this.employee)
              const result =await axios.delete("http://localhost:3000/usersById/"+this.$route.params.id,{
              
            });
            if(result.status==200)
            {
               
                this.$router.push({name:'Home'});
                  alert("Employee  deleted successfully!");

            }
        }
    
    },
 
    async mounted()
    {
        let user =localStorage.getItem('user-info')
        
       console.warn(this.$route.params.id) 
       const result =await axios.get("http://localhost:3000/usersById/"+this.$route.params.id);
       console.warn(result.data.name)
       this.employee=result.data;
    }
    }

</script>

