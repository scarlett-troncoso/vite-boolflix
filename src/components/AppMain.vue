<script>
import { store } from '../store';
import AppStars from './AppStars.vue';

export default {
    name: 'AppMain',
    components: {
        AppStars,
    },

    data() {
        return {
           store, 

            languages: 'https://www.unknown.nu/flags/images/', //uk-100   //https://www.unknown.nu/flags/
            url_img: 'https://image.tmdb.org/t/p/w200/',
            url_no_img: 'https://static.thenounproject.com/png/340719-200.png',
        }
    },

    /*
    created(){
        this.video()
    }*/
    
}
</script>

<template>
    <main class="container">
        
        <div class="row">
            <ul v-for="result in store.results" :key="result.id + '_result'" class="col-5 card">
                <div class="cont-img">
                    <img :src="result.poster_path === null ? url_no_img : url_img + result.poster_path" alt="poster:">
                </div>
                <div class="details_film">
                    <li>Title: {{ result.title || result.name }} </li>
                    <li>Original Title: {{ result.original_title || result.original_name }}</li>
                    <li>Language: {{ result.original_language }}
                    <img :src="languages + result.original_language + '-100'" alt="bandiera" class="flag"> <!--ua.png-->
                    </li>
                <!--<li> Vote: {{ vote_star(result.vote_average) }}</li> -->
                    <AppStars :vote_average="result.vote_average"></AppStars>
                    <li>Overview: {{ result.overview }}</li>
                </div>        
            </ul>
        </div>
        <div v-if="store.error">{{ store.error }}</div>
    </main>
</template>

<style scoped>
.flag {
    width: 25px;
    border: 1px solid rgb(174, 173, 173);
    margin-left: 0.25rem;
}

.cont-img {
    width: 100%;
    height: 320px;
    background-color: rgb(150, 2, 2);

    >img {
        width: 100%;
    }
}

</style>