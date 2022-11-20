import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

import AboutPage from './components/pages/AboutPage.vue';
import BlogPage from './components/pages/BlogPage.vue';
import LogInPage from './components/pages/LogInPage.vue';
import AdminPage from './components/pages/AdminPage.vue';
import LoadedPost from './components/UI/LoadedPost.vue';

import BaseCard from './components/utilities/BaseCard.vue';
import PageCard from './components/utilities/PageCard.vue';
import PostCard from './components/utilities/PostCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/blog'},
        { path: '/blog', component: BlogPage },
        { path: '/about', component: AboutPage },
        { path: '/login', component: LogInPage},
        { path: '/admin', component: AdminPage},
        { path: '/blog/:title', component : LoadedPost}
    ]
});
const store = createStore({
    state() {
        return {
            loggedInStatus: false
        }
    },
    mutations: {
        switchLoggedInStatus(state) {
            state.loggedInStatus = true;
        },
        sendData(state,payload){
          
        }
    },
    actions: {
        switchLoggedInStatus(context) {
            context.commit('switchLoggedInStatus')
        },
        sendData(context){

        }
    },
    getters: {
        loggedStatus(state) {
            return state.loggedInStatus;
        }
    }
})

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('page-card', PageCard);
app.component('post-card', PostCard);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store);
app.use(router);

app.mount('#app')
