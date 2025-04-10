<template>
  <div class="not-found-page">
    <div class="content">
      <h1 class="error-heading">404</h1>
      <h2 class="error-message">Oops! The page you're looking for cannot be found.</h2>
      <p class="description">
        It looks like the page you were trying to access doesn’t exist or has been moved. 
      </p>
      <router-link to="/" class="home-link">Go Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.content {
  text-align: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.error-heading {
  font-size: 100px;
  font-weight: bold;
  color: #f44336;
  margin-bottom: 20px;
}

.error-message {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.home-link {
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #1976d2;
}
</style>
