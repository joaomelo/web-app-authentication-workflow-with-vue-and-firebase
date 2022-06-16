<script setup>
import auth from "./auth";

defineProps(["profile"]);
const handleSignOut = () => auth.signOut();
</script>

<template>
  <p>Welcome {{ profile.email }}!</p>
  <p>Your id is {{ profile.id }}</p>
  <button @click="handleSignOut">Sign Out</button>
</template>
