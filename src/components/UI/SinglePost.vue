<template>
    <page-card>
        <post-card>
            <router-link :to="'/blog/' + this.title">
                <div class="picture">
                    <div class="overlay">
                        <h1>{{ title }}</h1>
                        <li> {{ this.newdate }}</li>
                    </div>
                    <img :src="img" alt="">
                </div>
            </router-link>
        </post-card>
    </page-card>
</template>
<script>
export default {
    props: ['id', 'title', 'img', 'date'],
    data(){
        return {
            newdate : null
        }
    },
    methods: {
        convertingTime() {
            let dateObj = this.date;
            let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();

            this.newdate = year + "/" + month + "/" + day;
        }
    },
    created(){
        this.convertingTime();
    }
}
</script>
<style scoped>
.picture {
    width: 5rem;
    height: 5rem;
    position: relative;
    width: 100%;
    height: 100%;
    transition: 0.5s ease-out;
    box-shadow: 0 0 0 0;
}

img {
    width: 100%;
    height: 100%;
    background-size: cover;
}

.picture:hover {
    box-shadow: 0.75rem 0.75rem 0 white;
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