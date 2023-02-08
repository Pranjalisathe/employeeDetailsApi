<template>
<Header/>
<h1>Add Page</h1>
<form @submit="sub" class="update"  >
<input type="text" name="name"  placeholder="Enter Name" v-model="name" @blur="required" @input="required" :style="isRequired?'border-color:red;outline-color:red':null"/>
<p v-if="isRequired" @input="required" style="color:red">This is required !</p>
<input type="text" v-model="email" placeholder="Enter Email"/>


<input type="text" v-model="role" placeholder="Enter Role"/>
<input type="password" v-model="password" placeholder="Enter password"/>

<button type="submit" v-on:click="addEmployee">Add Employee</button>
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
            },
            isRequired:false,
            error:[]
        }
    },  
     methods:{
        handleForm(){
            alert();
        },
   
        sub(e){
          this.error=[];
          if(this.name && this.password && this.role && this.email)
          {
            console.warn("no error")
          }
          if(!this.name)
          {
            this.error.push("Name");

          }
         
          
           if(!this.email)
          {
            this.error.push("Email");
            
          }
          else  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)))
          {
            this.error.push("valid email ");
          }
           if(!this.role)
          {
            this.error.push("Role");
            
          }
          if(!this.password)
          {
            this.error.push("Password");
         
          }
       if(this.error.length!=0)
       {
       
          alert("Please enter  "+this.error);

       }
          e.preventDefault();
        },
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
            if(result.status==200 && this.error.length==0)
            {
                this.$router.push({name:'Home'});
                alert("Employee  added successfully!")
            }
           
        }   
    },
 
    async mounted()
    {
        let user =localStorage.getItem('user-info')
     
    }
    
    }
    

</script>