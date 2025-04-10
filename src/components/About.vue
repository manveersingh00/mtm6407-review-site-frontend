<template>
  <div class="container-fluid text-w text-start">
    <h1 class="text-left my-4 text-o">About Us</h1>
    <div class="about-content text-w">
      <p class="lead">
        Welcome to Movie Reviews! We are a team of movie enthusiasts who love to share our thoughts, ratings, and reviews on the latest films. Our platform provides detailed movie reviews, complete with ratings, poster images, and engaging content for fellow movie lovers. Whether you're a fan of action, drama, comedy, or any other genre, you'll find reviews to help you decide your next movie watch!
      </p>
      <p>
        Our goal is to create a community where movie lovers can easily discover new films and share their opinions. We hope that our reviews assist you in finding your next favorite movie, whether it's a hidden gem or a blockbuster hit.
      </p>

      <h2 class="my-4 text-o">Meet the Team</h2>
      <div class="team-member">
        <h4 class="text-o">Manveer (Team Leader)</h4>
        <p class="text-w">
          Manveer was responsible for overseeing the entire project, coordinating the team's tasks, and ensuring everything ran smoothly.
          <br><strong>Responsibilities:</strong> <span class="text-o">Git repo creation, project management, fetching and displaying review list data.</span>
        </p>
      </div>
      <div class="team-member">
        <h4 class="text-o">Amandeep</h4>
        <p class="text-w">
          Amandeep focused on the backend setup, ensuring the system was properly structured and the CMS was functional for managing movie reviews.
          <br><strong>Responsibilities:</strong> <span class="text-o">Sanity Headless CMS Setup </span>
        </p>
      </div>
      <div class="team-member">
        <h4 class="text-o">Ankit</h4>
        <p class="text-w">
          Ankit worked on the front-end development, ensuring the website had a clean and user-friendly interface. He designed and implemented key pages to showcase movie reviews.
          <br><strong>Responsibilities:</strong> <span class="text-o">Frontend setup, Setup required pages</span>
        </p>
      </div>
      <div class="team-member">
        <h4 class="text-o">Khushmandeep</h4>
        <p class="text-w">
          Khushmandeep was responsible for creating the review details page, allowing users to see in-depth information about each movie review.
          <br><strong>Responsibilities:</strong><span class="text-o"> Review details page, search feature, handling routing.</span>
        </p>
      </div>
      <div class="team-member">
        <h4 class="text-o">Jatin</h4>
        <p class="text-w">
          Jatin played a crucial role in designing the website's UI, ensuring that it was both aesthetically pleasing and responsive.
          <br><strong>Responsibilities:</strong><span class="text-o"> UI design, responsive layout, navbar creation, and visual enhancements.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container-fluid {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}

.about-content {
  font-size: 1.2rem;
  color: #333;
}

.about-content p {
  margin-bottom: 20px;
}

.about-content .lead {
  font-size: 1.5rem;
  font-weight: 500;
}

.team-member {
  margin-bottom: 20px;
}

.team-member h4 {
  font-size: 1.4rem;
  font-weight: bold;
}

.team-member p {
  font-size: 1.1rem;
  color: #555;
}
</style>
