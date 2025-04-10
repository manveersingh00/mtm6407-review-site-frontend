<template>
  <div class="review-details">
    <div v-if="loading" class="text-w">Loading review...</div>
    <div v-else class="review-content">
      <div class="poster-container">
        <img :src="getImageUrl(review)" alt="movie image" class="poster-image" />
      </div>
      <div class="details-container">
        <h1 class="text-w">{{ review?.title }}</h1>
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
        <p class="text-w"><strong>Author:</strong> {{ review?.director }}</p>
        <p class="text-w"><strong>Published:</strong> {{ formatDate(review?.publishedAt) }}</p>
        <p class="text-w">{{ review?.content }}</p>
        <router-link to="/" class="back-link">Back to reviews</router-link>
      </div>
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
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString('en-US', options);
    }
  },
  mounted() {
    this.fetchReview()
  }
}
</script>

<style scoped>
p{
  padding:0;
  margin:0;
}
.review-details {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}

.review-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}

.poster-container {
  flex: 0 0 40%; 
  max-width: 500px;
  text-align: center;
}

.poster-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.details-container {
  margin-top:10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start; 
    animation: fadeIn 1s ease-in-out;

}

.details-container h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  animation: fadeIn 1s ease-in-out;
  text-align: left;
  width: 100%;
}

.rating {
  display: flex;
  gap: 5px;
  font-size: 1.5rem;
}

.star {
  color: #ddd;
}

.star.filled {
  color: #f39c12;
}

.details-container p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  text-align: left;
  width: 100%;
}

.details-container strong {
  font-weight: bold;
}

.back-link {
  font-size: 1.1rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  background-color: var(--primary-color);
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
}

.back-link:hover {
  color: white;
  background-color: var(--accent-color);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .review-content {
    flex-direction: column;
    gap: 20px;
  }

  .poster-container {
    flex: 0 0 80%;
    max-width: 100%;
  }

  .details-container {
    flex: 1;
  }
}
</style>
