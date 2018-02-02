<template>
    <div>
        <li v-for='item in notes'>
            <h2>{{item.title}}<button class=" btn btn-danger btn-xs pull-right">删除</button>&nbsp;&nbsp;<button class=" btn btn-success btn-xs pull-right">编辑</button></h2>
            <p>{{item.content}}</p>
        </li>
    </div>
</template>
<script>
// import VnoteBtn from './VnoteBtn'
export default {
    name: "VnoteItem",
    data () {
        return {
        }
    },
    props:{
        notes:Array
    },
    components: {
        // VnoteBtn
    }
}
</script>
<style scoped>
</style>