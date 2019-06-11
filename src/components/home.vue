<template>
  <div>
    <lay_head></lay_head>
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
import lay_head from "@/components/layout/lay_head"
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   mounted(){
    this.$eventHub.$on("sub",(val)=>{
      console.log(val)
    })
  },
  components:{
    lay_head
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

