<template>
    <h1> {{ newTitle }}</h1>
    <p> {{ newDescription }}</p>
    <img :src="newImage" alt="">
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            newTitle: '',
            newDescription: '',
            newImage: ''
        }
    },
    created() {
        fetch('https://vue-vuk-blog-default-rtdb.firebaseio.com/blogPosts.json')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                const allPosts = [];
                for (const id in data) {
                    allPosts.unshift({
                        id: new Date().valueOf(),
                        date: new Date(),
                        title: data[id].title,
                        description: data[id].description,
                        image: data[id].image
                    });
                }
                this.posts = allPosts;
                const postTeam = this.$route.params.title;
                const selectedPost = this.posts.find(post => post.title === postTeam);
                this.newTitle = selectedPost.title;
                this.newDescription = selectedPost.description;
                this.newImage = selectedPost.image;
            })
    }
}
</script>

<style>

</style>