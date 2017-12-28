<template>
  <div>
    <slot msg="232354" text="hello from child">啥也没有</slot>
    <img src="./assets/logo.png">
    <ol>
      <!--
      现在我们为每个 todo-item 提供 todo 对象
      todo 对象是变量，即其内容可以是动态的。
      我们也需要为每个组件提供一个“key”，稍后再
      作详细解释。
      -->
      <li is="todo_item"
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id">
      </li>
    </ol>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  props:['groceryList','message'],
  components: {
    'todo_item': {
      props: ['todo'],
      template: '<li>{{todo.text}}</li>'
    }
  },
  data(){
    return {msg:123}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
