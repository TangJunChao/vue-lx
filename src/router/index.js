import Vue from 'vue';
import Router from 'vue-router';

// 加载路由规则对应的组件
import HeroesList from '@/views/heroes/list';// 英雄列表组件
import AddList from '@/views/heroes/add';
import EditList from '@/views/heroes/edit';

import WeaponsList from '@/views/weapons/list';// 武器列表组件
import EquipsList from '@/views/equips/list';// 装备列表组件

// 注册Vue-Router插件
Vue.use(Router);

export default new Router({
  routes: [
    {name: 'home', path: '/', redirect: '/heroes'},
    {
      name: 'heroes',
      path: '/heroes',
      component: HeroesList
    },
    {name: 'heroesadd', path: '/heroes/add', component: AddList},
    {name: 'heroesedit', path: '/heroes/edit/:id', component: EditList},
    {name: 'weapons', path: '/weapons', component: WeaponsList},
    {name: 'equips', path: '/equips', component: EquipsList}
  ]
});
