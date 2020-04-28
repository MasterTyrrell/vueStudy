import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import params from '@/components/params'
import Error from '@/components/Error'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:H1,
        right:H2
      },
    },
    {
      path: '/yyh',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:H2,
        right:H1,

      },
      alias:'/1111'
    },
    {
      path:'/params/:id(\\d+)/:title',
      component:params,
    beforeEnter:(to,from,next)=>{
      console.log("进入当前模板前1");
      // next(false);
      // next({path:"/"});
      next();

  },

    },
    {
      path:'/goHello',
      redirect:'/'
    },
    {
      path:'/goParams/:id(\\d+)/:title',
      redirect:'/params/:id(\\d+)/:title'
    },
    {
      path:'/goParams/:id(\\d+)/:title',
      redirect:'/params/:id(\\d+)/:title'
    },
    {
      path:'/*',
      component:Error
    }
  ]
})
