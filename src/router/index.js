import Vue from 'vue'
import Router from 'vue-router';
import Vmall from '@/components/Vmall';
import MyCart from '@/components/MyCart';

Vue.use(Router);

export default new Router({
  routes: [
   {
		 path:'/',
		 component:Vmall
	 },
	 {
		 path:'/vmall',
		 component:Vmall
	 },
	 {
		 path:'/my-cart',
		 component:MyCart
	 }
  ]
})
