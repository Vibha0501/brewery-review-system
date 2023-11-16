<script >

//import HomeView from './views/HomeView.vue';
import Login from '@/components/icons/Login.vue';
import Signup from '@/components/icons/Signup.vue'; // Replace with your Register component
// Login from './components/Login.vue'; // Replace with your Login component
import { auth } from '@/firebase/firebase.js'; // Import your firebase configuration

export default {
  components: {
    Signup,
    Login,
  },
  data() {
    return {
      isUserRegistered: false,
    };
  },
  created() {
    // Check if the user is already registered on app load
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isUserRegistered = true;
      }
    });
  },
  methods: {
  checkUserRegistration() {
    // Assuming you have a way to determine if the user is registered
    // For instance, a button click or form submission
    // Perform the check here
    // If the user is determined to be registered:
    this.isUserRegistered = !this.isUserRegistered;
    // Otherwise, keep it as false
  }
}

  
};
</script>

<template>
  <div id="app" class="container mt-5">
    <div class="row justify-content-center">
      <div v-if="!isUserRegistered" class="col-md-6 d-flex justify-content-center">
        <div class="card p-4 ">
        <Signup />
        <button @click="checkUserRegistration" class="btn btn-link mt-3">Already registered?</button>
        </div>
      </div>
      <div v-else class="col-md-6 d-flex justify-content-center">
        <div class="card p-4 text-center">
        <Login />
        <button @click="checkUserRegistration" class="btn btn-link mt-3">Not registered?</button>
      </div>
      </div>
    </div>
    <RouterView/>
  </div>
</template>
