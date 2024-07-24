import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [
      { id: 1, title: 'News 1', content: 'Content for news 1' },
      { id: 2, title: 'News 2', content: 'Content for news 2' },
      { id: 3, title: 'News 3', content: 'Content for news 3' }
    ]
  },
  mutations: {
    // ...
  },
  actions: {
    // ...
  },
  modules: {
    // ...
  }
});
