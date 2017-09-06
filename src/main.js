import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import fastclick from 'fastclick'

fastclick.attach(document.body);//移动端点击300毫秒延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
