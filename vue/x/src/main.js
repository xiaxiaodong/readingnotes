// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fade from './components/fade'
//import todo_item from './todo_item'
import router from './router'

Vue.config.productionTip = false

/*// 定义名为 todo-item 的新组件
Vue.component('todo_item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})*/

const app = new Vue({
  el: '#app',
  router,
  template: '<app sttr="标题" :grocery-list="groceryList">'+
      '<h1 slot-scope="props">{{props.msg}}</h1></app>',
  data: {
    groceryList: [{
      id: 0,
      text: '蔬'
    }, {
      id: 1,
      text: '酪'
    }, {
      id: 2,
      text: '随便人吃的东西'
    }],
    msg:'parent'
  },
  components: {
    App
  }
})

// /* eslint-disable no-new */
// const app = new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   data: {
//     groceryList: []
//   },
//   components: { App }
// })

app.groceryList = [{
  id: 0,
  text: '蔬2'
}, {
  id: 1,
  text: '酪2'
}, {
  id: 2,
  text: '随便人吃的东西222'
}]

window.data = {
  msg: '123',
  seen: false
}

const x = new Vue({
  el: '#x',
  data: window.data,
  created: function () {

    console.log('msg is: ' + this.msg)
    console.log('seen is: ' + this.seen)

  }
})

x.$watch('msg', function(newValue, oldValue) {
  console.log(newValue, oldValue)
})

const fadeV = new Vue({
  el: '#demo',
  template:'<fade :show=true />',
  data: {
    show:true
  },
  components:{
    fade
  }
})

x.msg = '111'
app.msg = '111'
