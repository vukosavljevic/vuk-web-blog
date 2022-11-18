<template>
    <page-card>
        <div>
            <h3>Featured Post</h3>
        </div>
        <featured-post></featured-post>
        <h3>Other posts</h3>
            <single-post v-for="post in posts" :key="post.id" :id="post.id" :title="post.title"
                :description="post.description" :img="post.image"></single-post>
                <button @click="showData">As</button>
    </page-card>
</template>
<script>
import SinglePost from '@/components/UI/SinglePost.vue';

export default {
    components: {
        SinglePost
    },
    data() {
        return {
            posts : []
        }
    },
    methods : {
        showData() {
        fetch('https://vue-vuk-blog-default-rtdb.firebaseio.com/blogPosts.json')
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        }
        )
        .then((data) => { 
            const allPosts = [];
            for(const id in data) {
                allPosts.push({
                    id: new Date().valueOf(),
                    title : data[id].title,
                    description : data[id].description,
                    image : data[id].image
                });
            }
            this.posts = allPosts;
        })
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