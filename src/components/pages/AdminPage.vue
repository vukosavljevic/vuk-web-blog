<template>
    <page-card v-if="loggedStatus">
        <h1>U succesfully logged in Admin Page!</h1>
        <form @submit.prevent="sendData">
            <label>Title</label>
            <input type="text" v-model="title" />
            <label>Description</label>
            <textarea v-model="description" />
            <label>Image</label>
            <input type="file" @change="onFilePicked">
            <button>Submit</button>
        </form>
        <img :src="imageUrl" alt="">
    </page-card>
    <div else>
        <h1>Nice Try but go and log in</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
            title: '',
            description: '',
            image: null,
            imageUrl: ''
        }
    },
    computed: {
        ...mapGetters(['loggedStatus'])
    },
    methods: {
        previewFiles(event) {
            console.log(event.target.files[0])
            this.imageUpload = (event.target.files[0]);

        },
        onFilePicked(event) {
            const files = event.target.files;
            let filename = files[0].name;
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0]);
            this.image = files[0];
        },
        sendData() {
            // this.$store.dispatch('sendData',{
            //     id: this.id,
            //     title : this.title,
            //     description : this.description,
            //     img : this.img
            // });
            if (this.title === '' || this.description === '' || this.image === null) {
                console.log('upisi nesto')
            }
            else {
                axios.post('https://vue-vuk-blog-default-rtdb.firebaseio.com/blogPosts.json', {
                    title: this.title,
                    description: this.description,
                    image: this.imageUrl
                });
                this.title = '',
                this.description = ''
                this.imageUrl = ''
            }
        },
        submitImage() {
            // console.log(this.imageUpload)
            // if (this.imageUpload === null) {
            //     console.log('lool')
            //     return;
            // }
            // const fileReader = new FileReader()
            // fileReader.addEventListener('load', () =>{
            //     this.imageUrl = fileReader.result
            // })
            // fileReader.readAsDataURL(this.imageUpload)
            // console.log(this.imageUrl)
            // const imageRef = ref(storage, 'images/' + this.imageUpload.name + new Date().toISOString() );
            // console.log(imageRef)
            // uploadBytes(imageRef, this.imageUpload).then(() => {
            // alert('image uploaded')
        }
    }

}
</script>

<style scoped>
form {
    padding: 2rem;
    background-color:black;
    display: flex;
    flex-direction: column;
}
label{
    text-align: left;
    font-size:2rem;
}
input{
    width: 50%;
    margin-bottom: 1rem;
}
button{
    width: 50%;
}
</style>