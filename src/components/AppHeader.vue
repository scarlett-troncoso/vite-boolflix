<script>
import { store } from '../store';

export default {
    name: 'AppHeader',

    data () {
        return{
            store,
        }
    },

    methods: {
        filterResults() {
            //&query=coraline
            const url_movie = `${this.store.base_api_url}&query=${this.store.searchMovieandSerie}`;
            const url_serie = `${this.store.base_api_url_serie}&query=${this.store.searchMovieandSerie}`;
            //console.log(url_movie);
            console.log(this.store.searchMovieandSerie);

            this.store.getInfoCards(url_movie);
            this.store.getInfoCardsSerie(url_serie);
        },
    },
}
</script>

<template>
    <header class="container">
        <div>
            <input type="text" placeholder="Search Movie or Serie" v-model="store.searchMovieandSerie">
            <button @click="filterResults">Search</button>
        </div>
    </header>
</template>

<style scoped></style>