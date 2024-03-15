import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({

    base_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=d7aac37017d487828e63f03c5d26591d', //&query=coraline
    base_api_url_serie: 'https://api.themoviedb.org/3/search/tv?api_key=d7aac37017d487828e63f03c5d26591d',
    results: [],
    results_serie: {},
    error: false,
    searchMovieandSerie: '',

    //Actions
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
                
               // console.log('CONSOLE VOTE', this.vote); per stelle in modo dinamico
            })
            .catch((error) => {
                console.error(error);
                this.error = error.message;
            })
    },
})