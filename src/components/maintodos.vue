<template>
  <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox"  v-model="checall">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <li :class=" {completed: item.done, editing: item.id === currentId} "
         v-for="item in list" :key="item.id">
          <div class="view">
            <input class="toggle" type="checkbox"
             :checked="item.done" @change="change({id: item.id})" >
            <label @dblclick="showadd(item.id, item.name)">{{ item.name }}</label>
            <button @click="del({id: item.id})" class="destroy"></button>
          </div>
          <input v-focus="item.id === currentId"
           class="edit" v-model="name" @keyup.enter="edit(item.id)">
        </li>
      </ul>
    </section>
</template>

<script>
// mapMutations可以把vuex中的Mutations映射为方法
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      currentId: '',
      name: '',
    };
  },
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
    ...mapState(['op']),
    // eslint-disable-next-line vue/return-in-computed-property
    list() {
      const { path } = this.$route;
      // 路由
      const { list } = this.$store.state;
      if (path === '/active') {
        return list.filter(item => !item.done);
      } if (path === '/completed') {
        return list.filter(item => item.done);
      }
      return list;
    },
    checall: {
      get() {
        return this.list.every(item => item.done);
      },
      set(value) {
        console.log(value);
        this.$store.commit('checall', {
          done: value,
        });
      },
    },
  },
  methods: {
    ...mapMutations(['del', 'change']),
    // 显示
    showadd(id, name) {
      console.log(id);
      this.currentId = id;
      console.log(this.currentId);

      this.name = name;
    },
    // 修改内容
    edit(id) {
      this.$store.commit('edit', {
        id,
        name: this.name,
      });
      this.currentId = '';
    },
  },
  directives: {
    // 自动焦距
    focus: {
      update(el, binding) {
        // console.log(el, binding.value);
        if (binding.value) {
          el.focus();
        }
      },
    },

  },
};
</script>

<style>

</style>
