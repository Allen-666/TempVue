import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
	  name: '/',
      component:resolve=>require(['@/components/home'],resolve),
      redirect:"/info",
      children:[
      		{
				path: 'info',
				name: 'info',
				meta:{
					keepAlive:true,
					Msea:111
				  },
				component:resolve=>require(['@/components/main/info'],resolve),
      		},
      		{
				path: 'news',
				name: 'news',
				component:resolve=>require(['@/components/main/news'],resolve),
				children:[
					{
						path: 'childCom',
						name: 'childCom',
						component:resolve=>require(['@/components/child/childCom'],resolve)
					}
				]
      		},
      		{
				path: 'test',
				name: 'test',
				component:resolve=>require(['@/components/main/test'],resolve),
					},
			{
				path: 'allen/:id',
				name: 'allen:id',
				component:resolve=>require(['@/components/main/allen'],resolve),
					},
		
      ]
    }
  ]
})
// url >http://localhost:8080/?pram=u#/info
// 实现不同页面跳转项目部同位置

//打印方法  
console.dir(router)
router.beforeEach((to,from,next)=>{
	console.log(location);  //获取url参数
		//to 即将进入路由
		//from 即将离开路由
		//next 跳转下一个  跳转哪一个路由
    	// next({path:"/test"});  //跳转指定路由
    	
		// console.log(to,from,next);
		if(to.path=="/"){
			if(location.search.indexOf("u")!=-1){
				next({path:"/test"});
			}else if(location.search.indexOf("s")!=-1){
				next({path:"/news"});
			}else{
					next();
			}
		}else{
			next();
		}
})

//全局路由钩子二 跳转之后钩子执行函数
router.afterEach((to,from)=>{
		console.log("跳转之后");
})
/* eslint-disable no-new */
export default router;
