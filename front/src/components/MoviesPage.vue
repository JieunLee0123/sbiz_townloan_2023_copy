<template>
  <section id="moviesPage">
    <div class="container">
      <h1 class="section_title">MoviesPage</h1>

      <ul class="movies_lists">
        <li v-for="movie in movies" class="item my-section" :key="movie.id">
          <router-link :to="{ name: 'detail', params: { id: movie.id } }">
            <p><b>Movie id => </b>{{ movie.id }}</p>
            <p><b>Movie name => </b>{{ movie.name }}</p>
            <p><b>Movie rate => </b>{{ movie.rate }}</p>
            <p><b>Movie director => </b>{{ movie.director }}</p>
            <p><b>Movie actors => </b>{{ movie.actors }}</p>
            <p><b>Movie time => </b>{{ movie.time }}</p>
            <p><b>Movie synopsis => </b>{{ movie.synopsis }}</p>
            <img v-bind:src="movie.poster" alt="">
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    this.$http.get('/api/movies')
      .then(res => {
        this.movies = res.data
      })
  },
  data() {
    return {
      movies: []
    }
  }
}
</script>

