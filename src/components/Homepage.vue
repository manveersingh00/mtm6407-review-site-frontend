<!-- src/components/HomePage.vue -->
<template>
  <div class="container">
    <h1>Movie Reviews</h1>
    <div v-if="loading">Loading reviews...</div>
    <div v-else class="reviews">
      <div v-for="review in reviews" :key="review.id" class="review-card">
        <img
          :src="getImageUrl(review)"
          alt="movie image"
        />
        <h2>{{ review?.title }}</h2>
        <p>{{ review?.content?.[0]?.children?.[0]?.text?.substring(0, 150) }}...</p>
        <p><strong>Rating:</strong> {{ review?.rating }}/10</p>
        <router-link :to="`/review/${review?.slug}`">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data() {
    return {
      reviews: [],
      loading: true,
    }
  },
  methods: {
    async fetchReviews() {
      try {
        const res = await axios.get(
          'https://review-cms.onrender.com/api/reviews?populate=*'
        )
        this.reviews = res.data.data
        this.loading = false
      } catch (err) {
        console.error('Error fetching reviews:', err)
      }
    },
    getImageUrl(review) {
        if (review?.image?.formats?.thumbnail?.url) {
    return review.image.formats.thumbnail.url.startsWith('http')
      ? review.image.formats.thumbnail.url
      : `https://review-cms.onrender.com${review.image.formats.thumbnail.url}`;
  } else {
    return '/default-movie.jpg'; 
  }
    },
  },
  mounted() {
    this.fetchReviews()
  },
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}
.reviews {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.review-card {
  background: #f7f7f7;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
}
.review-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
