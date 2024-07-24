<template>
  <div>
    <h1>{{ news.title }}</h1>
    <p>{{ news.content }}</p>
    <router-link to="/">Back to news list</router-link>
  </div>
</template>

<script>
export default {
  name: 'News',
  computed: {
    news() {
      return this.$store.state.news.find(news => news.id == this.$route.params.id);
    }
  }
};
</script>
