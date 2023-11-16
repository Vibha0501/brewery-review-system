
<template>
  <div class="container">
    
          <h2 class="text-center mb-4">Welcome back!</h2>
          <form @submit.prevent="loginUser" class="text-center">
            <div class="mb-3">
              <input type="email" v-model="email" class="form-control" placeholder="Email" required />
            </div>
            <div class="mb-3">
              <input type="password" v-model="password" class="form-control" placeholder="Password" required />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </form>
          <p v-if="error" class="text-danger mt-3">{{ error }}</p>
        </div>
      
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    loginUser() {
      const auth = getAuth(); // Get the auth object
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // On successful login, navigate to another page
          this.$router.push('/search');
        })
        .catch((error) => {
          this.error = error.message; // Display error message
        });
    },
  },
};
</script>

<style>
/* Add custom styles if needed */
.container {
  height: 100%;
}

.card {
  max-width: 400px;
  width: 100%;
}
</style>