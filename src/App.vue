<template>
  <section class="todoapp">
    <!-- 头部搜索框 -->
    <headertodos></headertodos>

    <!-- 中间的展示部分 -->
    <maintodos></maintodos>

    <!-- 底部部分 -->
    <footertudos></footertudos>
  </section>
</template>

<script>
import headertodos from './components/headertodos.vue';
import maintodos from './components/maintodos.vue';
import footertudos from './components/footertudos.vue';

export default {
  components: {
    headertodos,
    maintodos,
    footertudos,
  },
};
</script>

<style>
</style>
