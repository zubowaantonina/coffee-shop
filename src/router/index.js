import Vue from "vue"; 
import VueRouter from "vue-router";
import HeroView from '../views/HeroView';
import OurCoffeeView from '../views/OurCoffeeView';
import GoodsPageView from '../views/GoodsPageView';
import ContactsView from '../views/ContactsView';
import ThanksView from '../views/ThanksView';
Vue.use(VueRouter)
const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/goods-page', component: GoodsPageView },
    { path: '/contacts', component: ContactsView },
    { path: '/thanks', component: ThanksView },
    
  ]
  const router = new VueRouter({
   mode:'history',
    routes
  })
  export default router