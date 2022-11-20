<template>
    <page-card>
        <h3>Newest post</h3>
        <hr>
        <post-item v-if="showPosts()">
            <single-post v-for="recentPost in recentPosts" :key="recentPost.id" :id="recentPost.id"
                :title="recentPost.title" :img="recentPost.image" :date="recentPost.date">
            </single-post>
        </post-item>
        <post-item v-else>
            <p>Loading posts...</p>
        </post-item>
        <h3>Other Posts</h3>
        <hr>
        <post-item v-if="showPosts()">
            <single-post v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :img="post.image"
                :date="post.date">
            </single-post>
        </post-item>
        <post-item v-else>
            <p>Loading posts...</p>
        </post-item>
    </page-card>
</template>
<script>

import SinglePost from '@/components/UI/SinglePost.vue';
import PostItem from '../utilities/PostItem.vue';
export default {
    components: {
        SinglePost,
        PostItem
    },
    data() {
        return {
            posts: [],
            recentPosts: []
        }
    },
    methods: {
        showData() {
            fetch('https://vue-vuk-blog-default-rtdb.firebaseio.com/blogPosts.json')
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((data) => {
                    const allPosts = [];
                    let i = 0;
                    for (const id in data) {
                        allPosts.unshift({
                            id: new Date().valueOf(),
                            date: new Date(),
                            title: data[id].title,
                            description: data[id].description,
                            image: data[id].image
                        });
                        i++
                    }
                    this.recentPosts = allPosts.slice(0, 1)
                    this.posts = allPosts.slice(1, i);
                })
        },
        showPosts() {
            if (this.posts.length > 0) {
                return true
            }
            else {
                return false
            }
        }
    },

    mounted() {
        this.showData();
    }

}
</script>
<style scoped>
.featured {
    height: 400px;
    width: 600px;
}

.posts {
    margin-top: 2rem;
}

h1 {
    font-weight: bold;
}

hr {
    border: 1px solid black;
    margin-bottom: 3rem;
    width: 100%;
}

h3 {
    margin-bottom: 0;
    color: black;
    text-align: left;
    font-weight: bold;
    font-size: 2rem;
}
</style>