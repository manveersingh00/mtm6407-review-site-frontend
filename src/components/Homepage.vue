<template>
  <div class="container">
    <h1>Movie Reviews</h1>

    <!-- Search Bar -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search reviews..."
      @input="filterReviews"
      class="search-bar"
    />

    <div v-if="loading">Loading reviews...</div>
    <div v-else class="reviews">
      <div v-for="review in filteredReviews" :key="review?.slug?.current" class="review-card">
        <img :src="review?.posterUrl || '/default-movie.jpg'" alt="movie image" />
        <h2>{{ review?.title }}</h2>
        <p>{{ review?.content?.substring(0, 150) }}...</p>
        <p><strong>Rating:</strong> {{ review.rating }}/10</p>
        <router-link :to="`/review/${review?.slug?.current}`">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { client } from '@/sanityClient'

const reviews = ref([])
const filteredReviews = ref([])
const searchQuery = ref('')
const loading = ref(true)

const fetchReviews = async () => {
  try {
    const data = await client.fetch(`*[_type == "review"] | order(publishedAt desc){
      title,
      slug,
      director,
      publishedAt,
      rating,
      content,
      "posterUrl": poster.asset->url
    }`)
    reviews.value = data
    filteredReviews.value = data
    loading.value = false
  } catch (err) {
    console.error('Error fetching reviews from Sanity:', err)
  }
}

const filterReviews = () => {
  const query = searchQuery.value.toLowerCase()
  filteredReviews.value = reviews.value.filter((review) =>
    review.title.toLowerCase().includes(query)
  )
}

onMounted(() => {
  fetchReviews()
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}
.search-bar {
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
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
