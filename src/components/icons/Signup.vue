<template>
  <div class="container">
    <h2 class="text-center mb-4">Sign Up</h2>
    <form @submit.prevent="signUpUser" class="text-center">
      <div class="mb-3">
        <input type="text" v-model="displayName" class="form-control" placeholder="Display Name" required />
      </div>
      <div class="mb-3">
        <input type="email" v-model="email" class="form-control" placeholder="Email" required />
      </div>
      <div class="mb-3">
        <input type="password" v-model="password" class="form-control" placeholder="Password" required />
      </div>
      <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
    </form>
    <p v-if="error" class="text-danger mt-3">{{ error }}</p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import required functions from Firebase

export default {
  data() {
    return {
      displayName: '',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async signUpUser() { 
      const auth = getAuth(); // Get the auth object
 
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        await userCredential.user.updateProfile({ displayName: this.displayName });

        // Handle successful signup, e.g., navigate to another page
        this.$router.push('/search');
      } catch (error) {
        this.error = error.message; // Display error message
      }
    },
  },
};
</script>