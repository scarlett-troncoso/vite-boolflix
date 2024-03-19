<script>
import { store } from '../store';
import AppStars from './AppStars.vue' ;

export default {
    name: 'AppCard',
    props : {
        result: Object
    },

    components: {
        AppStars,
    },

    data() {
        return {
            store,
            languages: 'https://www.unknown.nu/flags/images/', //uk-100   //https://www.unknown.nu/flags/
            url_cast_movie: '',
            actors: [],
        }
    },

    methods: {
        
        filterCastMovie(numer){         
            
                //console.log(this.result.id);
                const urlCastMovie = `${this.store.api_cast_movie}${numer}/credits?api_key=d7aac37017d487828e63f03c5d26591d`;
                
                this.store.getCastMovie(urlCastMovie);

                console.log(urlCastMovie); 
                //console.log(this.store.resultsCast);

               /* this.store.resultsCast.forEach(result_cast => {
                    console.log('result_cast' + result_cast);
                    
                        this.result_cast.forEach(cast => {
                            console.log('cast' + cast);
                            for (let index = 0; this.actors <= 4; index++) { 
                            this.actors.push(cast.name)
                            console.log(this.actors);
                            return result_cast.name
                        }
                        });                  
                }) */ 
        },
    },

    created(){
        this.filterCastMovie(this.result.id)
    },
}
</script>

<template>
        
        <li>Title: {{ result.title || result.name }} </li>
        
        <li>Original Title: {{ result.original_title || result.original_name }}</li>
        
        <li>Language: {{ result.original_language }}
            <img :src="languages + result.original_language + '-100'" alt="bandiera" class="flag"> <!--ua.png-->
        </li>

        <li> Actors: {{ this.actors }}</li>

    <!--<li> Vote: {{ vote_star(result.vote_average) }}</li> -->
        <AppStars :vote_average="result.vote_average"></AppStars>
        
        <li class="overview" v-if="result.overview.length<271">Overview: {{ result.overview }}</li>
        <li class="overview" v-else >Overview: {{ result.overview.substring(0, 271) + "..." }}</li>
       
</template>

<style scoped>
.flag {
    width: 25px;
    border: 1px solid rgb(174, 173, 173);
    margin-left: 0.25rem;
}
</style>