<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      base_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=d7aac37017d487828e63f03c5d26591d&query=coraline',
      results: [],
      error: false,
    }
  },

  mounted() {
    axios
      .get(this.base_api_url).then((response) => {
        console.log(response);
        console.log(response.data.results);

        this.results = response.data.results
        console.log(this.results);
        console.log(this.results[0].title);
        //console.log(this.results.title); //undefined perche ci stanno 4 array non solo 1
      })
      .catch((error) => {
        console.error(error);
        this.error = error.message;
      })
  }
}
</script>

<template>
  <div>
    <input type="text" placeholder="Film Here">
    <button>Search</button>
  </div>
  <div>
    <ul v-for="result in results" :key="result.id + '_result'">
      <li>Title: {{ result.title }}</li>
      <li>Original Title: {{ result.original_title }}</li>
      <li>Language: {{ result.original_language }}</li>
      <li>Vote: {{ result.vote_average }}</li>
    </ul>
  </div>
</template>

<style>
li {
  list-style: none;
}
</style>
