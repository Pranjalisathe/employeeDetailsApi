<template>
<h1>Login Page</h1>
<div class="login">
<input type="text" v-model="email" placeholder="Enter Email"/>
<input type="password" v-model="password" placeholder="Enter Password"/>
<button v-on:click="login">Login</button>
<p>
   <router-link to="/sign-up">Sign Up</router-link>
</p>
</div>

</template>

<script>
import axios from 'axios'
export default{
    name:"Login",
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async login()
        {
            let result=await axios.get(
                `http`
            )
            console.warn(this.password,this.email)
        }
    }
}
</script>
<style>
.login input{
    width :300px ;
    height: 40px;
    padding-left:20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    border:1px solid black;

}
.login button{
 width :320px ;
    height: 40px;
    padding-left:20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    color:black;
    background-color:orange;
    border:1px solid black;
}
</style>
