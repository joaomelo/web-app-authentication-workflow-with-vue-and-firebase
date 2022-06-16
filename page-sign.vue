<script setup>
import { ref } from "vue";
import auth from "./auth";

const email = ref(null);
const password = ref(null);
const error = ref(null);

const handleSign = async (method) => {
  error.value = null;
  try {
    await auth[method](email.value, password.value);
  } catch (e) {
    error.value = e.message;
  }
};
</script>

<template>
  <form>
    <input type="email" placeholder="me@email.com" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="actions">
      <button type="button" @click="handleSign('signUp')">Sign Up</button>
      <button type="button" @click="handleSign('signIn')">Sign In</button>
    </div>
    <p>{{ error }}</p>
  </form>
</template>

<style>
form {
  display: grid;
  gap: 16px;
  place-items: center;
}

.actions {
  display: flex;
  gap: 32px;
}
</style>
