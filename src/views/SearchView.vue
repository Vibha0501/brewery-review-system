<template>
  <div class="container mt-5 ">
    <h1>Brewery Search</h1>
    
    <div class="row mb-3 ">
      <div class="col-md-4">
        <input v-model="city" class="form-control" placeholder="Search by City" @change="getBreweriesByCity">
      </div>
      <div class="col-md-4">
        <input v-model="name" class="form-control" placeholder="Search by Name" @change="getBreweriesByName">
      </div>
      <div class="col-md-4">
        <input v-model="type" class="form-control" placeholder="Search by Type" @change="getBreweriesByType">
      </div>
    </div>
    
    <div >
      <div v-for="i in 3" :key="i" class="row justify-content-center">
        <div class="card border-dark col-md-4 m-3" style="width: 20rem; height: 16rem;" v-for="(brewery, index) in breweries.slice((i-1)*3, i*3)" :key="index" @click="viewBrewery(brewery)">
          <div class="card-body" >
            <h5 class="card-title">{{ brewery.name }}</h5>
            <p class="card-text">Address: {{ brewery.street }}, {{ brewery.city }}
            <br>Type: {{ brewery.brewery_type }}
              <br>Phone: {{ brewery.phone }}

              <br>Current Rating: {{ brewery.currentRating }}
            <br>{{ brewery.state}}, {{ brewery.country }}
            <br>Website: <a :href="brewery.website_url" target="_blank">{{ brewery.website_url }}</a></p>
            
            <!-- Other details you want to display -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import axios from 'axios';
import { loadReviews } from '@/firebase/firestore.js';
export default {
  data() {
    return {
      name: '',
      city: '',
      type:'',
      breweries: [],
    };
  },
  methods: {
    calculateAverageRating(reviews) {
      let sum = 0;
      reviews.forEach(review => {
        sum += review.rating;
      });
      return reviews.length > 0 ? sum / reviews.length : 0;
    },
    viewBrewery(brewery) {
      // Set the selected brewery and navigate to the brewery details page
      this.$router.push({ name: 'DetailView', params: { id: brewery.id } });
        },
    
    async getBreweriesByCity() {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/v1/breweries?by_city=${this.city}`);
        this.breweries = response.data;
      this.breweries.forEach(async brewery => {
      const reviews = await loadReviews(brewery.id);
      const currentRating = this.calculateAverageRating(reviews);
      brewery.currentRating = currentRating;
    });
    
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async getBreweriesByName() {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_name=${this.name}`);
        this.breweries = response.data;
        this.breweries.forEach(async brewery => {
        const reviews = await loadReviews(brewery.id);
        const currentRating = this.calculateAverageRating(reviews);
        brewery.currentRating = currentRating;
      });
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async getBreweriesByType() {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_type=${this.type}`);
        this.breweries = response.data;
        this.breweries.forEach(async brewery => {
        const reviews = await loadReviews(brewery.id);
        const currentRating = this.calculateAverageRating(reviews);
        brewery.currentRating = currentRating;
      });
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>





    


<style>
/* Add custom styles if needed */
</style>