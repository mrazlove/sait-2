<template>
    <div>
      <h1>News List</h1>
      <ul>
        <li v-for="news in newsList" :key="news.id">
          <router-link :to="'/news/' + news.id">{{ news.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    computed: {
      newsList() {
        return this.$store.state.news; 
      }
    }
  };
  </script>
  
  
