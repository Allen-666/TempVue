<template>
    <div>
        <h1 class="hello">我是新闻页</h1>
        <button @click="test">调用</button>
        <router-link to="/news/childCom">子路由</router-link>
        <router-view/>
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
        // console.log(this.$route.params)
        // console.log(this.$route.query)
    }, 
        methods:{
    test(){
      this.$eventHub.$emit("sub",{name:"Msea"})
    }
  }   
}

</script>