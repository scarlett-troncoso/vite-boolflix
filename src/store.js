import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({

    base_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=d7aac37017d487828e63f03c5d26591d', //&query=coraline
    base_api_url_serie: 'https://api.themoviedb.org/3/search/tv?api_key=d7aac37017d487828e63f03c5d26591d',
    results: [],
    results_serie: {},
    error: false,
    searchMovieandSerie: '',
    api_cast_serie: 'https://api.themoviedb.org/3/tv/{series_id}/credits?api_key=d7aac37017d487828e63f03c5d26591d',
    api_cast_movie: 'https://api.themoviedb.org/3/movie/', // {movie_id}/credits?api_key=d7aac37017d487828e63f03c5d26591d
    resultsCast: [],

    //Actions
    getInfoCards(url) {
        axios
            .get(url).then((response) => {
                this.results = response.data.results
                console.log(this.results);
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
                    this.results.push(list_serie) //questa soluzione fa aparire la lista delle serie sotto della lista dei film, in tanto
                }
                //console.log(this.results);
            })
            .catch((error) => {
                console.error(error);
                this.error = error.message;
            })
    },

    getCastMovie(url){
        axios
        .get(url).then((response) => {
            console.log(response.data);
            this.resultsCast.push(response.data);
        })
        .catch((error) => {
            console.error(error);
            this.error = error.message;
        })
    },
})