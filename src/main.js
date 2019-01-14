// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
Vue.config.productionTip = false
Vue.use(VueResource);
/* eslint-disable no-new */
Vue.filter("currency",function(val){
	var num=parseFloat(val).toFixed(2);
	var reg=/\d{1,3}(?=(\d{3})+$)/g;
	var currency=num.toString().replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(reg,"$&,")+s2});
	return "￥"+currency;
});

Vue.prototype.vHandler=new Vue({
	data(){
		return{
			productIds:[]
		}
	}
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
