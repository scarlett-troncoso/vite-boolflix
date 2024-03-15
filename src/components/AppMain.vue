<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppCard
    },

    data() {
        return {
           store, 
           url_img: 'https://image.tmdb.org/t/p/w200/',
            url_no_img: 'https://static.thenounproject.com/png/340719-200.png',
        }
    },

    created () {
        store.getInfoCards(store.base_api_url);
        store.getInfoCardsSerie(store.base_api_url_serie)
    }
}
</script>

<template>
    <main class="container"> 
        <div class="row">
            <ul v-for="result in store.results" :key="result.id + '_result'" class=" col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3 card">
                <div class="cont-img-film">

                    <img :src="result.poster_path === null ? url_no_img : url_img + result.poster_path" alt="poster:">
                    
                    <div class="contFilm">
                        <AppCard :result="result"></AppCard>
                    </div>

                </div>          
            </ul>
        </div>

        <div v-if="store.error">{{ store.error }}</div>
    </main>
</template>

<style scoped>
main{
    padding: 1.5rem 0 1.5rem 0;
    margin-bottom: 3rem;
}

img:hover{  
    opacity: 0;
}

.cont-img-film {
    position: relative;
    display: inline-block;
    width: 100%;
    aspect-ratio: 0.7;
    background-color: rgb(174, 137, 190);
    
    >img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; 
        aspect-ratio: 0.7;
        z-index: 1;
        background-color: rgb(194, 193, 193);
        object-fit: cover;
        transition: 0.5s;
    }

    >.contFilm {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(34, 34, 34);
        padding: 0.5rem;
        color: rgb(178, 178, 178);
        line-height: 1.5rem;
    }
};





</style>