<template>
    <page-card>
        <post-card>
            <router-link :to="'/blog/' + this.title ">
            <div class="picture">
                <div class="overlay">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                </div>
                  <img :src="img" alt="">
            </div>
        </router-link>
        </post-card>
    </page-card>
</template>
<script>
export default {
    props: ['id','title','description','img'],
}
</script>
<style scoped>
.picture {
    width:5rem;
    height: 5rem;
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: .75rem .75rem 0 white;
    transition: 0.5s ease-out;
}

img {
    width: 100%;
    height: 100%;
    background-size: cover;
}

.picture:hover {
    box-shadow: 0 0 0 0;
}

.overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 9999;
    color: white;
}
</style>