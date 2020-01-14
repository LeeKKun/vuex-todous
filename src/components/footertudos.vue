<template>
    <footer class="footer" v-show="list.length > 0">
      <span class="todo-count"><strong>{{ leftcount }}</strong> item left</span>
      <ul class="filters">
        <li>
          <!-- 精确匹配加exact属性 -->
          <router-link exact class="" to="/">All</router-link>
        </li>
        <li>
          <router-link to="/active">Active</router-link>
        </li>
        <li>
          <router-link to="/completed">Completed</router-link>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button @click="clear" v-show="isshow" class="clear-completed">Clear completed</button>
    </footer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['list']),
    ...mapGetters(['leftcount', 'isshow']),
  },
  methods: {
    ...mapMutations(['clear']),
  },
};
</script>

<style>

</style>
