// 配置vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  list: [
    { id: 1, name: '吃饭', done: false },
    { id: 2, name: '睡觉', done: false },
    { id: 3, name: '打豆豆', done: true },
    { id: 4, name: '打游戏', done: false },
  ],
  op: {
    name: 'likun',
    age: 18,
  },
};

const mutations = {
  del(state, obj) {
    console.log(obj.id);
    state.list = state.list.filter(item => item.id !== obj.id);
  },
  add(state, obj) {
    console.log(obj.name);
    state.list.push({
      id: +new Date(), // 获取时间戳
      name: obj.name,
      done: false,
    });
  },
};

const store = new Vuex.Store({
  strict: true, // 严格模式
  state,
  mutations,
});

export default store;
