<template>
  <div class="review-details">
    <div v-if="loading">Loading review...</div>
    <div v-else>
      <h1>{{ review?.title }}</h1>
      <img :src="getImageUrl(review)" alt="movie image" />
      <p>{{ review?.content }}</p>
      <p><strong>Rating:</strong> {{ review?.rating }}/10</p>
      <router-link to="/">Back to reviews</router-link>
    </div>
  </div>
</template>

<script>
import { client } from '@/sanityClient';

export default {
  name: 'ReviewDetails',
  data() {
    return {
      review: null,
      loading: true,
    }
  },
  methods: {
    async fetchReview() {
      const slug = this.$route.params.slug
      try {
        const query = `*[_type == "review" && slug.current == "${slug}"]{
          title,
          slug,
          director,
          publishedAt,
          rating,
          content,
          "posterUrl": poster.asset->url
        }`

        const data = await client.fetch(query)
        this.review = data[0]
        this.loading = false
      } catch (err) {
        console.error('Error fetching review from Sanity:', err)
      }
    },
    getImageUrl(review) {
      return review?.posterUrl || '/default-movie.jpg'
    },
  },
  mounted() {
    this.fetchReview()
  }
}
</script>

<style scoped>
.review-details {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}
.review-details img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
