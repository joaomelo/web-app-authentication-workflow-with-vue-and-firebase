<script setup>
import { reactive, ref } from "vue";
import auth from "./auth";
import PageSign from "./page-sign.vue";
import PageWelcome from "./page-welcome.vue";

const status = ref("UNDEFINED");
const profile = reactive({ email: null, id: null });
auth.onChanged((user) => {
  status.value = user ? "SIGNED_IN" : "SIGNED_OUT";
  profile.email = user ? user.email : null;
  profile.id = user ? user.uid : null;
});
</script>

<template>
  <p v-if="status === 'UNDEFINED'">loading...</p>
  <PageSign v-if="status === 'SIGNED_OUT'" />
  <PageWelcome v-if="status === 'SIGNED_IN'" :profile="profile" />
</template>
