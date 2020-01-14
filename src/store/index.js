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
  // 删除
  del(state, obj) {
    console.log(obj.id);
    state.list = state.list.filter(item => item.id !== obj.id);
  },
  // 添加
  add(state, obj) {
    console.log(obj.name);
    state.list.unshift({
      id: +new Date(), // 获取时间戳
      name: obj.name,
      done: false,
    });
  },
  // 状态
  change(state, payload) {
    console.log(payload.id);
    const todo = state.list.find(item => item.id === payload.id);
    todo.done = !todo.done;
  },
  edit(state, payload) {
    console.log(payload.id);
    const todo = state.list.find(item => item.id === payload.id);
    todo.name = payload.name;
  },
  // 清空
  clear(state) {
    state.list = state.list.filter(item => !item.done);
  },
  // 全选，反选
  checall(state, payload) {
    state.list.forEach((item) => {
      item.done = payload.done;
    });
  },
};

// vuex的计算属性
const getters = {
  leftcount(state) {
    return state.list.filter(item => !item.done).length;
  },
  isshow(state) {
    return state.list.some(item => item.done);
  },
};

const store = new Vuex.Store({
  strict: true, // 严格模式
  state,
  mutations,
  getters,
});

export default store;
