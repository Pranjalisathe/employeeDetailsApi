<template>
<!-- <h1>Header</h1> -->
<div class="nav">
<router-link to="/">Home</router-link>
<router-link to="add">Add Employee</router-link>
<!-- <router-link ="home">Logout</router-link> -->

</div>
</template>
<script>
export default{
    name:'Header'
}
</script>
<style>
.nav{
    background-color:#333;
    overflow:hidden;
    
}
.nav a{
    float:left;
    color:white;
    text-align:center;
    padding:10px 14px;
    text-decoration:none;
    font-size:16px;
    margin-right:4px;
}
.nav a:hover{
    background-color:#ddd;
    color:#222;
}
</style>