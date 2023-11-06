<template>
  <div >
    <h1>Brewery Search</h1>
    
    <input v-model="city" class="form-control mb-3" placeholder="Search by City" @change="getBreweriesByCity(city)">
    <input v-model="name" class="form-control mb-3" placeholder="Search by Name" @change="getBreweriesByName(name)">
    <input v-model="type" class="form-control mb-3" placeholder="Search by Type" @change="getBreweriesByType(type)">
    
    <div class="row">
      <div v-for="i in 3" :key="i" class="col-md-4 mb-3">
        <div class="card border-dark mb-3" style="max-width: 18rem;" v-for="(brewery, index) in breweries.slice((i-1)*3, i*3)" :key="index" @click="viewBrewery(brewery)">
        <div class="card-body" >
            <h5 class="card-title">{{ brewery.name }}</h5>
            <p class="card-text">Address: {{ brewery.street }}</p>
            <p class="card-text">Phone: {{ brewery.phone }}</p>
            <p class="card-text">Website: <a :href="brewery.website_url" target="_blank">{{ brewery.website_url }}</a></p>
            <p class="card-text">
        Current Rating: {{ calculateAverageRating(brewery.id) }}
            </p>
            <p class="card-text">{{ brewery.city }}, {{ brewery.state }}</p>
      
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
      reviews: [], 
    };
    },
async mounted() {
  
  },
  methods: {
    
    calculateAverageRating(breweryId) {
      
        
      const breweryReviews = this.reviews.filter(review => review.breweryId === breweryId);
      if (breweryReviews.length > 0) {
        const total = breweryReviews.reduce((acc, review) => acc + review.rating, 0);
        return (total / breweryReviews.length).toFixed(1);
      }
      return 'No reviews yet'; // If no reviews for the brewery
    },
    
    viewBrewery(brewery) {
      // Set the selected brewery and navigate to the brewery details page
      this.$router.push({ name: 'DetailView', params: { id: brewery.id } });
        },
    
    async getBreweriesByCity({city}) {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/v1/breweries?by_city=${this.city}`);
        this.breweries= response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async getBreweriesByName(name) {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_name=${this.name}`);
        this.breweries = response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async getBreweriesByType(type) {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/breweries?by_type=${this.type}`);
        this.breweries = response.data;
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