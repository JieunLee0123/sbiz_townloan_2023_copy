<template>
  <section id="movieDetail">
    <div class="container">
      <h1 class="section_title">MoviesDetail</h1>

      <ul v-if="movie" class="movie_lists my-section">
        <li class="my-li">
          <b>Movie name</b>
          <span>{{ movie.name }}</span>
        </li>
        <li class="my-li">
          <b>Movie rate</b>
          <span>{{ movie.rate }}</span>
        </li>
        <li class="my-li">
          <b>Movie director</b>
          <span>{{ movie.director }}</span>
        </li>
        <li class="my-li">
          <b>Movie actors</b>
          <span>{{ movie.actors }}</span>
        </li>
        <li class="my-li">
          <b>Movie time</b>
          <span>{{ movie.time }}</span>
        </li>
        <li class="my-li">
          <b>Movie synopsis</b>
          <span>{{ movie.synopsis }}</span>
        </li>
        <li class="my-li">
          <img v-bind:src="movie.poster" alt="">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.id;
    this.$http.get('/api/movies/' + id)
      .then(res => {
        this.movie = res.data
      })
  },
  data() {
    return {
      movie: {}
    }
  }
}
</script>

