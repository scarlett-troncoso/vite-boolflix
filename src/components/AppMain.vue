<script>
import axios from 'axios';
export default {
    name: 'AppMain',

    data() {
        return {
            base_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=d7aac37017d487828e63f03c5d26591d', //&query=coraline
            results: [],
            error: false,
            searchMovie: '',
            languages: 'https://www.unknown.nu/flags/images/', //uk-100   //https://www.unknown.nu/flags/
            lan: [],
        }
    },

    methods: {
        getInfoCards(url) {
            axios
                .get(url).then((response) => {
                    //console.log(response);
                    //console.log(response.data.results);
                    this.results = response.data.results
                    console.log(this.results);
                    // console.log(this.results[0].title);
                    // this.error = false;
                    this.results.forEach(result => {
                        // console.log(result);
                        this.lan = result.original_language
                        //console.log(this.lan);
                    })
                })
                .catch((error) => {
                    console.error(error);
                    this.error = error.message;
                })
        },

        filterResults() {
            //&query=coraline
            const url = `${this.base_api_url}&query=${this.searchMovie}`;
            console.log(url);
            console.log(this.searchMovie);

            this.getInfoCards(url);
        },

        flags() {

        }
    },

    created() {
        this.getInfoCards(this.base_api_url)
    },
}
</script>

<template>
    <main>
        <div>
            <input type="text" placeholder="Film Here" v-model="searchMovie">
            <button @click="filterResults">Search</button>
        </div>
        <div>
            <ul v-for="result in results" :key="result.id + '_result'">
                <li>Title: {{ result.title }}</li>
                <li>Original Title: {{ result.original_title }}</li>
                <li>Language: {{ result.original_language }}
                    <img :src="languages + result.original_language + '-100'" alt="bandiera" class="flag"> <!--ua.png-->
                </li>
                <li>Vote: {{ result.vote_average }}</li>
            </ul>
        </div>
        <div v-if="error">{{ error }}</div>
    </main>
</template>

<style scoped>
.flag {
    width: 25px;
    border: 1px solid rgb(174, 173, 173);
    margin-left: 0.25rem;
}
</style>