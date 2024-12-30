<script setup>
  import Header from './components/TheHeader.vue';
  import Footer from './components/TheFooter.vue';
</script>

<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>
