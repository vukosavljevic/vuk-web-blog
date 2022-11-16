<template>
    <page-card>
        <div>
            <h3>Featured Post</h3>
        </div>
        <featured-post></featured-post>
        <h3>Other posts</h3>
            <single-post v-for="post in posts" :key="post.id" :id="post.id" :title="post.title"
                :description="post.description" :img="post.img"></single-post>
    </page-card>
</template>
<script>
import SinglePost from '../UI/SinglePost.vue'
export default {
    components: {
        SinglePost
    },
    data() {
        return {
            posts: [
                {
                    id: 0,
                    title: 'Seeding',
                    description: 'Dummy text',
                    img:'teacup-g419241556_1920.jpg'
                }, 
                {
                    id: 1,
                    title: 'Seeding',
                    description: 'Dummy text',
                    img:'teacup-g419241556_1920.jpg'
                },
                {
                    id: 2,
                    title: 'Seeding',
                    description: 'Dummy text',
                    img:'teacup-g419241556_1920.jpg'
                }
            ]
        }
    }
}
</script>
<style scoped>
.featured {
    height: 400px;
    width: 600px;
}
.posts{
    margin-top:2rem;
}
h1 {
    font-weight: bold;
}

h3 {
    text-align: left;
    font-weight: bold;
    font-size: 2rem;
}
</style>