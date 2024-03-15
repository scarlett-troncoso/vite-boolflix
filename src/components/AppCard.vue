<script>
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
            languages: 'https://www.unknown.nu/flags/images/', //uk-100   //https://www.unknown.nu/flags/
        }
    },

    /*
    created(){
        this.video()
    }*/
    
}
</script>

<template>
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
</template>

<style scoped>
.flag {
    width: 25px;
    border: 1px solid rgb(174, 173, 173);
    margin-left: 0.25rem;
}
</style>