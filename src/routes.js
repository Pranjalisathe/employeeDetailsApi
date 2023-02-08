import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Update from './components/Update.vue'
import Delete from './components/Delete.vue'
import Validation from './components/Validation.vue'
import Add from './components/Add.vue'
import { createRouter ,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/Update/:id'

    },
    {
        name:'Delete',
        component:Delete,
        path:'/delete/:id'

    },
    {
        name:'Validation',
        component:Validation,
        path:'/validation'

    },
    // {
    //     name:'Update',
    //     component:Update,
    //     path:'/update'
    // },

]

const router=createRouter({
    history:createWebHistory(),
    routes
})


export default router
