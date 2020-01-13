<template>
  <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <li :class=" {completed: item.done} " v-for="item in list" :key="item.id">
          <div class="view">
            <input class="toggle" type="checkbox" :checked="item.done" >
            <label>{{ item.name }}</label>
            <button @click="del(item.id)" class="destroy"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template">
        </li>
      </ul>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // computed: {
  //   // 可以自己提供计算属性来拿取vuex的状态
  //   list() {
  //     return this.$store.state.list;
  //   },
  // },

  // 通过mapstate来拿取vuex的状态
  // computed: mapState(['list','op'])
  // computed: mapState({
  //   list: 'list',
  //   // 可以重新给拿到的数据起名字，避免和本组件冲突
  //   ooop: 'op',
  // }),

  // 添加自己的计算属性
  computed: {
    ...mapState(['list', 'op']),
  },
  methods: {
    del(id) {
      this.$store.commit('del', {
        id,
      });
    },
  },
};
</script>

<style>

</style>
