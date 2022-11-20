<template>
    <div class="container">
        <div class="flex">
            <img :src="newImage" alt="">
            <div class="container-text">
                <h1> {{ newTitle }}</h1>
                <p> {{ newDescription }}</p>
            </div>
        </div>
    </div>

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

<style scoped>
.flex {
    display: flex;
    gap: 1rem;
}
.container{
    width: 80%;
}
.container-text{
    text-align: left;
}
img {
    height: auto;
    width: 400px;
}
</style>