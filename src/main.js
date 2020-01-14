import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import './styles/base.css';
import './styles/index.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
