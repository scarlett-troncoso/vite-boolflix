<script>
export default {
    name: 'AppStars',
    props: ['vote_average'],
    data() {
        return {
        
            votes: [], // PER STELLE IN MODO DINAMICO
            starSolid: [],
            starRegular: [],
        }
    },

    methods: {
        vote_star(num) {
            //console.log(num);
            const num_round = Math.round(num)
            this.votes.push(Math.round(num_round * 5 / 10)) },

        stars_rating_solid(numVote) {
            for (let i = 0; this.starSolid.length < numVote; i++) {
                this.starSolid.push('fa-solid fa-star')    
            }
        },

        stars_rating_regular() {
            for (let i = 0; this.starRegular.length < 5; i++) {
                this.starRegular.push('fa-regular fa-star')
            }
        }
    },

    created(){
        this.vote_star(this.vote_average);

        this.stars_rating_solid(this.votes);

        this.stars_rating_regular();
    }
}
    
</script>

<template>
        <li > 
            <span>Vote: </span>

            <div class="cont-stars">
                <li class="stars_outer" >
                    <i v-for="regular in starRegular" :class="regular"></i>
                    <!--<i class="fa-regular fa-star"></i>-->
                        
                        <li class="stars_inner">
                            <i v-for="solid in starSolid" :class="solid"></i>
                            <!--<i class="fa-solid fa-star"></i>-->
                        </li>
                </li>           
            </div>
        </li> 
</template>

<style scoped>
.cont-stars {
    display: inline-block;
    position: relative;
}

.stars_outer {
display: inline-block;
    > i {
        font-weight: 0.5px;
        color: rgba(181, 180, 180, 0.263);
    }
}

.stars_inner {
position: absolute;
display: inline-block;
top: 0;
left: 0;

    >i {
        color: gold;
    }
}


</style>