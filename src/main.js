// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
// 导入自定义样式
import './assets/css/index.css';

import axios from 'axios';

// vue实例直接使用axios对象
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
