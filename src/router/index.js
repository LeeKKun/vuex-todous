import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'selected',
  inkExactActiveClass: 'selected',
});

export default router;
