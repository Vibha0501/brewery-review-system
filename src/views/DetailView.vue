<template>
  <div class="container mt-4">
    <h1 v-if="brewery">Brewery Information</h1>
    <div v-if="brewery">
      <h2>{{ brewery.name }}</h2>
      <p>Address: {{ brewery.street }}, {{ brewery.city }}, {{ brewery.state }}</p>
      <p>Phone: {{ brewery.phone }}</p>
      <p>Website: <a :href="brewery.website_url" target="_blank">{{ brewery.website_url }}</a></p>
      <!-- Other details -->

      <hr>

      <h2>Reviews</h2>
      <div v-if="reviews && reviews.length === 0">
        <p>No reviews yet.</p>
      </div>
      <div v-else>
        <div v-for="(review, index) in reviews" :key="index">
          <p>{{index+1}}.
          Rating: {{ review.rating }}
          <br>  Description: {{ review.description }}</p>
          <hr>
        </div>
      </div>

      <h2>Add Review</h2>
      <form @submit.prevent="addReview">
        <div class="form-group">
          <label for="rating">Rating</label>
          <input type="number" id="rating" v-model="newReview.rating" class="form-control">
        </div>
        <div class="form-group">
          <label for="description">Review</label>
          <textarea id="description" v-model="newReview.description" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Add Review</button>
      </form>
    </div>
    <div v-else>
      <h3>No brewery selected.</h3>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { loadReviews, addReview } from '@/firebase/firestore.js'; // Adjust this to the correct path
import axios from 'axios';

export default {
  data() {
    return {
      breweryId: null,
      brewery: null,
      reviews: ref([]), // Initialize an empty reviews array
      newReview: {
        rating: 0,
        description: '',
      },
    };
  },
  created() {
    this.breweryId = this.$route.params.id // Assuming you pass the brewery ID through route params

    // Fetch selected brewery from API
    axios.get(`https://api.openbrewerydb.org/v1/breweries?by_ids=${this.breweryId}`)
      .then((response) => {
        this.brewery = response.data[0] // Assuming the API returns an array with a single brewery
      })
      .catch((error) => {
        console.error('Error fetching brewery: ', error);
      });
    // Assuming you pass the breweryId as a prop
    loadReviews(this.breweryId).then((data) => {
      this.reviews = data;
      console.log(data);// Load reviews for the current brewery
    });
  },
  methods: {
    addReview() {
      addReview(this.breweryId, this.newReview)
        .then(() => {
          // Refresh reviews after adding
          loadReviews(this.breweryId).then((data) => {
            this.reviews = data;
          });
          // Reset the input fields
          this.newReview.rating = 0;
          this.newReview.description = '';
        })
        .catch((error) => {
          console.error('Error adding review: ', error);
        });
    },
  },
};
</script>

<style>
/* Add custom styles if needed */
</style>