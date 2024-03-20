<script>
import { store } from '../store';

export default {
    name: 'AppCast',
    props : {
        result: Object
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        
        filterCastMovie(numer){         
            
                const urlCastMovie = `${this.store.api_cast_movie}${numer}/credits?api_key=d7aac37017d487828e63f03c5d26591d`;
                
                this.store.getCastMovie(urlCastMovie);

                //console.log(urlCastMovie);
        },
    },
    
    created(){
        this.filterCastMovie(this.result.id);
    }
}
</script>

<template >

        <!--Cast -->
        <div v-for="onlyCast in this.store.resultsCast">
            
            <div v-if="onlyCast.id === result.id" class="cont-cast">
                <!--Cast:
                    <li v-for="oneCast in onlyCast.cast">
                    {{  oneCast.name }} 
                    </li>-->
            </div>
        </div>
</template>

<style scoped>

</style>