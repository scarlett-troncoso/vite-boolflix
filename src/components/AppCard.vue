<script>
import AppStars from './AppStars.vue' ;
import AppCast from './AppCast.vue' ;

export default {
    name: 'AppCard',
    props : {
        result: Object
    },

    components: {
        AppStars,
        AppCast
    },

    data() {
        return {
            languages: 'https://www.unknown.nu/flags/images/', //uk-100   //https://www.unknown.nu/flags/
        }
    },
}
</script>

<template >
        
        <li>Title: {{ result.title || result.name }} </li>
        
        <li>Original Title: {{ result.original_title || result.original_name }}</li>
        
        <li>Language: {{ result.original_language }}
            <img :src="languages + result.original_language + '-100'" alt="bandiera" class="flag"> <!--ua.png-->
        </li>

        <!--Cast -->
        <AppCast :result="result"></AppCast>
        
        <AppStars :vote_average="result.vote_average"></AppStars> <!--<li> Vote: {{ vote_star(result.vote_average) }}</li> -->
        
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