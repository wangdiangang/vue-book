// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

//导入轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  //vue用的是runtime+compiler：所有支持template属性
  //<App/>:就是一个组件  就是哟个自定义标签，实际就是<App></App>
  template: '<App/>'
})
