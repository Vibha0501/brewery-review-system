<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="loginUser" class="my-4">
      <div class="mb-3">
        <input type="email" v-model="email" class="form-control" placeholder="Email" required />
      </div>
      <div class="mb-3">
        <input type="password" v-model="password" class="form-control" placeholder="Password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p v-if="error" class="text-danger">{{ error }}</p>
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
</style>