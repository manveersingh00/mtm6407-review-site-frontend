<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/" style="align-items: center;align-self: center;display: flex;">
          <i class="fas fa-film" style="margin-right: 10px;font-size:50px; color: #f39c12;"></i>
          <span class="site-name">Movie Reviews</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" exact-active-class="active">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" exact-active-class="active">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="container text-center py-3 text-w">
        <p>&copy; 2025 Movie Reviews. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
.nav-link.active {
  color: #f39c12;
  font-weight: bold;
}
</style>
