<script>
export default {
    name: 'AppStars',
    props: ['vote_average'],
    data() {
        return {
        
            vote: [], // PER STELLE IN MODO DINAMICO
            // rating: [], // PER STELLE IN MODO DINAMICO
            /*stars: [   // PER STELLE IN MODO DINAMICO
                {        
                'star': 5,
                'count': 5
            },
            {        
                'star': 4,
                'count': 4
            },
            {        
                'star': 3,
                'count': 3
            },
            {        
                'star': 2,
                'count': 2
            },
            {        
                'star': 1,
                'count': 1
            },
            {        
                'star': 5,
                'count': 5
            },
            
            ]*/
        }
    },

    

    methods: {
        vote_star(num) {
            console.log(num);
            const num_round = Math.round(num)
            return Math.round(num_round * 5 / 10) ;
        },

        /* PROVA PER FARE STELLE IN MODO DINAMICO
        video(){

            let total_rating = 0,
            rating_based_on_stars = 0;
            /*
            this.stars.forEach((st, index) => {
            total_rating += st.count;
            rating_based_on_stars += st.count * st.star;
            });
            let rating_average = (rating_based_on_stars / total_rating);
                        this.rating = "width:" + (rating_average / 5) * 100 + "%";
                        console.log(rating_based_on_stars);
                        console.log(total_rating);*/

            /*this.vote.forEach((vo, index) => {
                total_rating += vo;
                rating_based_on_stars += vo * vo
                console.log(vo);
            }); */
/*
            this.stars.forEach((st, index) => {
                st[0].push()
            })*/

            /* let rating_average = (rating_based_on_stars / total_rating);
                        this.rating = "width:" + (rating_average / 5) * 100 + "%";
                        console.log(rating_based_on_stars);
                        console.log(total_rating);

           
        //console.log(rating_average);
        
        }*/
    },

    /*
    created(){
        this.video()
    }*/
    
}
</script>

<template>
    <li v-if="vote_star(vote_average) <= 1">
                    Vote:
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </li>

                <li v-if="vote_star(vote_average) === 2">
                    Vote:
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </li>

                <li v-if="vote_star(vote_average) === 3">
                    Vote:
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </li>

                <li v-if="vote_star(vote_average) === 4">
                    Vote:
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </li>

                <li v-if="vote_star(vote_average) === 5">
                    Vote:
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </li>

<!-- TEMPLATE PER STELLE IN MODO DINAMICO
                <li> 
                    <div>{{ result.vote_average }} </div>
                    <div>
                        {{ vote_star(result.vote_average) }}
                    </div>
                    <div>
                        <li class="stars_outer">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                                <li class="stars_inner" :style="rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </li>
                        </li>           
                    </div>
                </li>-->
</template>

<style scoped></style>