<template>
    <nav>
        <h1>Vuk Web Dev</h1>
        <hr>
        <ul>
            <li>
                <router-link to="/blog">Blog</router-link>
            </li>
            <li>
                <router-link to='/about'>About</router-link>
            </li>
            <li v-if="loggedStatus">
                <router-link to="/admin">Edit Page</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters(['loggedStatus'])
    }
}
</script>
<style scoped lang="css">
h1{
    color:white;
    font-size:2rem;
}
ul {
    display: flex;
    justify-content: center;
    padding-left: 0 !important;
}
hr{
    color: aqua;
    border:1px solid black;
}
a {
    text-decoration: none;
    color: white;
    font-size:1.5rem;
}

li:nth-child(1) {
    padding-left: 0 !important;
}

li {
    list-style-type: none;
    padding-left: 2rem;
}
</style>