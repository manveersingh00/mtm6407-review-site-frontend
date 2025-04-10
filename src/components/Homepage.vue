<template>
  <div class="container-fluid">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search reviews..."
      @input="filterReviews"
      class="form-control mb-4 my-4 search-bar"
    />

    <div v-if="loading" class="text-center text-w">Loading reviews...</div>

    <div v-else>
      <div v-if="filteredReviews.length === 0" class="text-center text-w">
        No movie review found matching your search.
      </div>

      <div v-else class="reviews">
        <div
          v-for="review in filteredReviews"
          :key="review?.slug?.current"
          class="review-item d-flex mb-4"
        >
          <div class="movie-poster me-4">
            <img
              :src="review?.posterUrl || '/default-movie.jpg'"
              class="img-fluid rounded"
              alt="movie poster"
            />
          </div>
          <div class="movie-details text-w">
            <h5 class="movie-title">{{ review?.title }}</h5>
            <p class="text-w">
              <strong>Rating: </strong>
              <span v-for="star in Math.floor(review.rating / 2)" :key="star">
                <i class="fas fa-star" style="color: #f39c12;"></i>
              </span>
              <span v-if="review.rating % 2 !== 0" class="fas fa-star-half-alt" style="color: #f39c12;"></span>
              <span v-for="emptyStar in 5 - Math.ceil(review.rating / 2)" :key="'empty-' + emptyStar">
                <i class="fas fa-star" style="color: #ddd;"></i>
              </span>
              {{ review.rating }}/10
            </p>
            <p class="text-w"><strong>Review: </strong> {{ review?.content?.substring(0, 150) }}...</p>
            <router-link
              :to="`/review/${review?.slug?.current}`"
              class="btn btn-primary"
              >Read more</router-link
            >
          </div>
        </div>
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
.container-fluid {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}

.search-bar {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
}

.search-bar:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 5px var(--primary-color);
}

.reviews {
  display: block;
}

.review-item {
  display: flex;
  align-items: center;
  border-bottom:2px solid white;
  padding-bottom:25px;
}

.movie-poster {
  max-width: 150px;
  width: 100%;
}

.movie-poster img {
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.movie-details {
  flex-grow: 1;
  text-align: left;
}

.movie-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.movie-details p {
  font-size: 1rem;
  color: #555;
}

.router-link {
  text-decoration: none;
}

.btn-primary {
  background-color: var(--primary-color);
  border: none;
}

.btn-primary:hover {
  background-color: var(--accent-color);
}
</style>
