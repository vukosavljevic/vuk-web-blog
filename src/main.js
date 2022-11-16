import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue'

import AboutPage from './components/pages/AboutPage.vue';
import BlogPage from './components/pages/BlogPage.vue';
import LogInPage from './components/pages/LogInPage.vue';
import AdminPage from './components/pages/AdminPage.vue';

import BaseCard from './components/utilities/BaseCard.vue';
import PageCard from './components/utilities/PageCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/blog'},
        { path: '/blog', component: BlogPage },
        { path: '/about', component: AboutPage },
        { path: '/login', component: LogInPage},
        { path: '/admin', component: AdminPage}
    ]
});
const store = createStore({
    state() {
        return {
            loggedInStatus : false
        }
    },
    getters : {
        loggedStatus(state){
            return state.loggedInStatus;
        }
    }
})
const app = createApp(App);

app.component('base-card', BaseCard);
app.component('page-card', PageCard);

app.use(router);
app.use(store);

app.mount('#app')
