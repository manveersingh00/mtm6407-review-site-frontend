<template>
  <div class="contact-page">
    <div class="contact-container">
      <h1 class="page-heading">Contact Us</h1>
      <p class="page-description">
        We'd love to hear from you! Fill out the form below, and we’ll get in touch with you soon.
      </p>
      
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" v-model="form.message" rows="6" required></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form Submitted', this.form);
      alert('Message sent successfully!');
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-page {
  padding:50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.contact-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.page-heading {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.page-description {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #2196f3;
  outline: none;
}

.submit-btn {
  background-color: #2196f3;
  color: #fff;
  font-weight: bold;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  width: 100%;
  font-size: 1.1rem;
}

.submit-btn:hover {
  background-color: #1976d2;
}
</style>
