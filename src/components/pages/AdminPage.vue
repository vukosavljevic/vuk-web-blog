<template>
    <page-card v-if="loggedInStatus === true">
        <h1>U succesfully logged in Admin Page!</h1>
    <p>Congrats</p>
    <form>
        <input type="text" v-model="title" />
        <textarea v-model="description" />
    </form>
    </page-card>
    <div else>
        <h1>Nice Try but go and log in</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    data(){
        return {
            title : '',
            description : ''
        }
    },
    computed : {
        loggedInStatus(){
            return this.$store.getters.loggedStatus;
        }
        //...mapGetters(['loggedInStatus'])
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>