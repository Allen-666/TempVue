<template>
    <div>
        <h1 class="box">我是信息页</h1>
        <button @click="jia">add</button>
        <button @click="test">test</button>
        <!-- //使用 name>params 刷新参数消失,地址栏不显示
        //使用path>query    刷新参数还在,地址栏显示 -->
<!-- <router-link :to="{name:'news',params:{id:'33'}}">前往>name>news1</router-link> -->
      <!-- 使用path跳转携带参数 -->
<!-- <router-link :to="{path:'/news',query:{id:'33'}}">前往>query>news2</router-link> -->
    <button @click="add">跳转</button>
    </div>
</template>

<script>

export default {
    name:'HelloWorld',
    data(){
        return{
            msg:''
        }
    },
    mounted(){
        this.$eventHub.$on("sub",(val)=>{
      console.log(val)//{name:"Msea"}
})
    console.log(this.$apis.joke()) //promis
    var data={
                type: 'pic',
                page:'1',
                pagesize:'10'
            };
              this.$apis.joke(data).then((res)=>{
        console.log(res)
    })
   
},
    methods:{
 add(){
    // this.$router.push({
    //     path:"/news",
    //      query:{
    //           id:"33"
    //          }
    // })
    this.$router.push({
        path:"/allen/89",
    })
    },
    jia(){
        this.$store.commit("add");
    },
    test(){
        this.$store.dispatch("test")
    }
    }
}
</script>
<style scoped lang="scss">


.box{
  width:100%;
  height:r(48*2);
  background:red;
}

</style>
