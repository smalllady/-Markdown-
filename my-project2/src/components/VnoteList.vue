<template>
    <div id="notelist">
      <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">我的笔记列表</h3>
        </div>
        <div class="panel-body">
            <ul>
              <!-- <li v-for='(item,index) in allDatas'>
                <h2>{{item.title}}</h2>
                <p>{{item.content}}</p>
              </li> -->
              <VnoteItem :notes="allDatas"></VnoteItem>
            </ul>
        </div>
      </div>
    </div>
</template>
<script>
import VnoteItem from './VnoteItem'
import {mapGetters} from 'vuex'
export default {
 name: "VnoteList",
 data () {
    return {
    }
 },
 computed: {
  //  allDatas(){
  //    return this.$store.state.allData
  //  }
  //   allDatas(){
  //    return this.$store.getters.getDatas
  //  }
  ...mapGetters({allDatas:'getDatas'})
 },
 components:{
   VnoteItem
 }
}
</script>
<style scoped>
</style>