<template>
    <nav>
        <h1>Junior Vuk</h1>
        <hr>
        <ul>
            <li>
                <router-link to="/blog" :class="{ active: isActiveBlog}" @click="activeClassBlog()">Blog</router-link>
            </li>
            <li>
                <router-link to='/about' :class="{ active: isActiveAbout}" @click="activeClassAbout()">About</router-link>
            </li>
            <li v-if="loggedStatus">
                <router-link to="/admin" :class="{ active: isActiveAdmin}" @click="activeClassAdmin()">Edit Page</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            isActiveBlog : true,
            isActiveAbout : false,
            isActiveAdmin : false
        }
    },
    methods :{
        activeClassBlog(){
            this.isActiveBlog = true;
            this.isActiveAbout = false;
            this.isActiveAdmin = false;
        },
        activeClassAbout(){
            this.isActiveAbout = true;
            this.isActiveBlog = false;
            this.isActiveAdmin = false;
        },
        activeClassAdmin(){
            this.isActiveBlog = false;
            this.isActiveAbout = false;
            this.isActiveAdmin = true;
        }
    },
    computed : {
        ...mapGetters(['loggedStatus'])
    }
}
</script>
<style scoped lang="css">
.active{
    color:red !important;
}
h1{
    color:black;
    font-size:2rem;
}
ul {
    display: flex;
    justify-content: center;
    padding-left: 0 !important;
}
hr{
    border:1px solid black;
}
a {
    text-decoration: none;
    color: black;
    font-size:1.5rem;
    font-weight: 700;
}
a:active{
    color:white;
}
li:nth-child(1) {
    padding-left: 0 !important;
}

li {
    list-style-type: none;
    padding-left: 2rem;
}
</style>