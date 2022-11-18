<template>
    <div class="form" v-if="!loggedStatus">
        <h1>Log in</h1>
        <form @submit.prevent="logIn()">
            <div class="form-control">
                <label>Name</label>
                <input type="text" v-model="enteredName" />
            </div>
            <div class="form-control">
                <label>Pass</label>
                <input type="password" v-model="enteredPass" />
            </div>
            <div class="form-button">
                <button class="button-24">Log in</button>
            </div>
        </form>
    </div>
    <admin-page v-else></admin-page>
</template>

<script>
import { mapGetters } from 'vuex';
import AdminPage from './AdminPage.vue';
export default {
    components: {
        AdminPage
    },
    data() {
        return {
            enteredName: '',
            enteredPass: '',
            trueName: '123',
            truePass: '123'
        }
    },
    methods: {
        logIn() {
            if (this.enteredName === this.trueName) {
                if (this.enteredPass === this.truePass) {
                    this.$store.commit('switchLoggedInStatus');
                    console.log(this.loggedStatus);
                }
            }
        }
    },
    computed: {
        // loggedStatus(){
        //     return this.$store.getters(['loggedStatus'])
        // }
        ...mapGetters(['loggedStatus'])
    }
}
</script>

<style scoped>
.form {
    color: #034159;
    margin: 5rem 0rem;
    background-color: #02735E;
    padding: 5rem;
    box-shadow: .5rem .5rem 0 white;
}

.form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.form-control label {
    text-align: left;
}

.form-control h1 {
    font-size: 2rem;
}

.form-button {
    margin-top: 0.5rem;
    text-align: right;
}

/* CSS */
.button-24 {
    background: #FF4742;
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 16px;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
    text-rendering: geometricprecision;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
}

.button-24:hover,
.button-24:active {
    background-color: initial;
    background-position: 0 0;
    color: #FF4742;
}

.button-24:active {
    opacity: .5;
}

input {
    border: none;
    background-image: none;
    background-color: white;
    box-shadow: none;
}
</style>