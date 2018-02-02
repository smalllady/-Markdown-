<template>
  <div id="main" class="container">
      <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">我的笔记应用</h3>
        </div>
        <div class="panel-body">
            <ul>
                <li v-for="(item,index) in allDatas" :key="index">
                    <h2>{{item.title}}</h2>
                    <p>{{item.content}}</p>
                </li>
                
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
    export default{
        name:'Vmain',
        
        methods: {
            
        },
        computed:{
            allDatas(){
                return this.$store.state.allData
            }
        },
        components: {
            
        }
    }

</script>
<style scoped>

</style>
