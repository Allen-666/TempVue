<template>
    <div>
        <ul>
            <li v-for="item in routePath">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
        <div>
            总价：{{$store.getters.count}}
            数量：{{$store.state.num}}
        </div>
    </div>
</template>

<script>
export default {
    name:'HelloWord',
    data(){
        return{
            routePath:[
                {name:'信息页',path:"/info"},
                 {name:'新闻页',path:"/news"},
                  {name:'测试页',path:"/test"}
            ]
        }
    }
}
</script>
<style>
li{list-style: none;display: inline;margin: 0 10px;}
ul{padding-left:0px;}
</style>
