<template>
    <div id="note">
      <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">基于vue的markdown笔记应用</h3>
        </div>
        <div class="panel-body">
            
            <div class="row">
                <!-- 笔记列表 -->
                <div class=" col-md-3">
                    <VnoteList></VnoteList>
                </div>
                <!-- 编辑器 -->
                <div class=" col-md-9">
                    <Vmarked></Vmarked>
                </div>
            </div>
            
        </div>
      </div>
    </div>
</template>
<script>
    import VnoteList from './VnoteList'
    import Vmarked from './Vmarked'
    export default{
        name:'Vmain',
        data(){
            return{

            }
        },
        created() {
            
        },
        mounted () {
            //发起请求
        },
        methods: {
            
        },
        computed:{

        },
        components: {
            VnoteList,
            Vmarked
        }
    }
</script>
<style scoped>

</style>
