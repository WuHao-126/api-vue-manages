import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// antdesign-vue组件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import moment from 'moment'
import 'moment/dist/locale/zh-cn'
moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')