<template>
    <div>
        <h1>我是Allen</h1>
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
        console.log(this.$route)
    }
}
</script>