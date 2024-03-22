<script>
import { store } from '../store';

export default {
    name: 'AppHeader',

    data () {
        return{
            store,
            url_logo: 'https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png',
            searchMovieandSerie: '',
        }
    },

    methods: {
        filterResults() {
            const url_movie = `${this.store.base_api_url}&query=${this.searchMovieandSerie}`;
            const url_serie = `${this.store.base_api_url_serie}&query=${this.searchMovieandSerie}`;
            console.log(this.searchMovieandSerie);
            this.store.getInfoCards(url_movie);
            this.store.getInfoCardsSerie(url_serie);
        },
    },
}
</script>

<template>
    <header>
        <div class="container cont-header">
            
            <div class="logo">
                <img :src="url_logo" alt="Logo_Boolflix">
            </div>

            <div class="cont-search">
                <input type="text" placeholder=" Search Movie or Serie" v-model="this.searchMovieandSerie" @keyup.enter="filterResults" class="input-search">
                <button @click="filterResults">Search</button>
            </div>
        </div>
        
    </header>
</template>

<style scoped>
header{
    background-color: black;
    > .cont-header{
        display: flex;
        justify-content: space-between;
    }
}

.logo{
    width: 20%;
    padding: 1.5rem 0 1.5rem 0;

    >img{
        width: 100%;
    }
}

.cont-search{
    display: flex;
    padding: 1.5rem 0 1.5rem 0;
    align-items: center;

    >.input-search,
    button {
        height: 2rem;
        border: 1px solid grey;
        padding: 0.5rem;
        
    }

    >.input-search {
        border-radius: 6px 0 0 6px;
        margin-right: 2px;
    }

    > button{
        border-radius: 0 6px 6px 0;
        background-color: rgb(167, 179, 191);
    }

    > button:hover{
        font-size: 14px;
        scale: 105%;
        background-color: rgb(149, 161, 174);
        color: rgb(35, 35, 35);
    }
}
</style>