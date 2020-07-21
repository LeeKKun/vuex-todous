<template>
  <header class="header">
    <h1>todos</h1>
    <input
      v-on:keyup.13="add()"
      value
      v-model="name"
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    console.log("日常提交github代码！绿油油的一天开始啦，20200721-2");
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    add() {
      this.$store.commit("add", {
        name: this.name
      });
      this.name = "";
    }
  }
};
</script>

<style>
</style>
