import tempFn from "@/components/tempCommon/tempCommon"
import fliter from "@/core/fliter/index"
import directive from "@/core/directive/index"
import global from "@/core/global/global"//返回了以个对象{getParam:fn()}
import apis from "@/core/api/index" //返回了以个对象{joke:fn(),getServerStr:fn()}

export default (Vue)=>{
	// 全局组件
	console.log(Vue)
	tempFn(Vue)
	fliter(Vue)
	directive(Vue)
	// 绑定到Vue原型里面直接可以在当前实例 this.$global上面调用
	Vue.prototype.$global=global;
	Vue.prototype.$apis=apis;
	Vue.prototype.$eventHub=new Vue();
}