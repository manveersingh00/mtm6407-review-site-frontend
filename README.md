# Movie Reviews Web App

This is a Movie Reviews Web App built with **Vue 3**. The app allows users to browse movie reviews, view details, and navigate between different sections like About, Contact, and Home.

## Features

- **Home Page**: Displays a list of movie reviews.
- **Review Details Page**: Shows detailed information about a selected movie review.
- **About Page**: Provides information about the app and its creators.
- **Contact Page**: A simple form to reach out to the app creators.
- **404 Page**: A custom "Page Not Found" error page.

## Technologies Used

### Frontend

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **Vue Router**: For handling navigation between different pages of the app.
- **Vite**: A fast and lightweight development build tool for Vue.js projects.
- **Font Awesome**: Used for adding icons (e.g., movie poster, stars for rating).
- **CSS**: Custom styling for the app using scoped styles for components.
- **Bootstrap**: Used for responsive layout and components like navbar and footer.

### Backend (Headless CMS)

- **Sanity.io**: The app uses **Sanity** as the backend to manage movie reviews and related content. Sanity provides a flexible, real-time, and headless CMS to manage and query movie review data.
- **Sanity Client**: The app communicates with the **Sanity API** to fetch the review data dynamically. This includes details like title, poster URL, rating, content, and more.

### Deployment

- **Netlify**: The app is deployed using **Netlify**. After building the app, you can deploy the `dist` folder to Netlify or link your GitHub repository for continuous deployment.
