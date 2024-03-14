<script>
import axios from 'axios';
import AppStars from './AppStars.vue';

export default {
    name: 'AppMain',
    components: {
        AppStars,
    },

    data() {
        return {
            base_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=d7aac37017d487828e63f03c5d26591d', //&query=coraline
            base_api_url_serie: 'https://api.themoviedb.org/3/search/tv?api_key=d7aac37017d487828e63f03c5d26591d',
            results: [],
            results_serie: {},
            error: false,
            searchMovieandSerie: '',
            languages: 'https://www.unknown.nu/flags/images/', //uk-100   //https://www.unknown.nu/flags/
            url_img: 'https://image.tmdb.org/t/p/w200/',
            url_no_img: 'https://static.thenounproject.com/png/340719-200.png',
            
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

                    /*
                    this.results.forEach((result, index) => {
                        this.vote.push(this.vote_star(result.vote_average))
                    });*/
                })
                .catch((error) => {
                    console.error(error);
                    this.error = error.message;
                })
        },

        getInfoCardsSerie(url) {
            axios
                .get(url).then((response) => {
                    this.results_serie = response.data.results

                    for (let index = 0; index < this.results_serie.length; index++) { //for per ciclare dentro l'array di serie
                        const list_serie = this.results_serie[index];
                        this.results.push(list_serie) //questa soluzione fa aparire la lista delle serie sotto della lista dei film, in tanto cosi
                        // this.vote.push(this.vote_star(list_serie.vote_average))
                        //questa e una posibile PER STAMPARE IN PAGINA PRIMA LE SERIE in caso che queste abbiano IL NOME PIU ESATTO DA QUELLO CERCATO

                        //return this.searchMovieandSerie === list_serie.name || list_serie.original_name ? this.results.unshift(list_serie) : this.results.push(list_serie)
                    }
                    console.log(this.results);
                    
                    console.log('CONSOLE VOTE', this.vote);
                })
                .catch((error) => {
                    console.error(error);
                    this.error = error.message;
                })
        },

        filterResults() {
            //&query=coraline
            const url_movie = `${this.base_api_url}&query=${this.searchMovieandSerie}`;
            const url_serie = `${this.base_api_url_serie}&query=${this.searchMovieandSerie}`;
            //console.log(url_movie);
            console.log(this.searchMovieandSerie);

            this.getInfoCards(url_movie);
            this.getInfoCardsSerie(url_serie);
        },
    },

    /*
    created(){
        this.video()
    }*/
    
}
</script>

<template>
    <main class="container">
        <div>
            <input type="text" placeholder="Search Movie or Serie" v-model="searchMovieandSerie">
            <button @click="filterResults">Search</button>
        </div>
        <div class="row">
            <ul v-for="result in results" :key="result.id + '_result'" class="col-5 card">
                <div class="cont-img">
                    <img :src="result.poster_path === null ? url_no_img : url_img + result.poster_path" alt="poster:">
                </div>
                <li>Title: {{ result.title || result.name }} </li>
                <li>Original Title: {{ result.original_title || result.original_name }}</li>
                <li>Language: {{ result.original_language }}
                    <img :src="languages + result.original_language + '-100'" alt="bandiera" class="flag"> <!--ua.png-->
                </li>
                <!--<li> Vote: {{ vote_star(result.vote_average) }}</li> -->
                <AppStars :vote_average="result.vote_average"></AppStars>
                
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

.cont-img {
    width: 100%;
    height: 320px;
    background-color: rgb(150, 2, 2);

    >img {
        width: 100%;
    }
}

.stars_outer {
position: relative;
display: inline-block;
    > i {
        color: #fff8;
        /*-webkit-text-stroke: 1px #908f8f;
        /*-webkit-text-stroke: 1px transparent;*/
    }

}

.stars_inner {
position: absolute;
top: 0;
left: 0;

overflow: hidden;

>i {
    color: gold;
}
}



</style>