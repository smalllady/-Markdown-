<template>
    <button class="btn" :class='currentType'>
        <!-- 插槽 -->
        <slot>按钮</slot>
    </button>
</template>
<script>
export default {
    name: "VnoteBtn",
    data () {
        return {
        }
    },
    methods: {
        
    },
    props:{
        type:String
    },
    computed: {
        currentType(){
            return {
                'btn-success':this.type==='success'?true:false,
                'btn-info':this.type==='info'?true:false,
                'btn-primary':this.type==='primary'?true:false,
                'btn-warning':this.type==='warning'?true:false,
                'btn-danger':this.type==='danger'?true:false
            }
        }
    }
}
</script>
<style scoped>
</style>