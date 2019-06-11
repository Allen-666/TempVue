export default (Vue)=>{
    Vue.directive("getThis",(el)=>{
        el.onclick=function(){
            alert("OK");
        }
    })
  }
  