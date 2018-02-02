<template>
    <div id="mark">
		<form class="form-inline" v-on:submit.prevent>
			<div class="form-group">
				<label for="title">标题</label>
				<input type="text" class="form-control" id="title" placeholder="请输入标题" v-model="title">
			</div>
			<button type="submit" class="btn btn-info" @click="addNote">提交</button>
			<!-- <VnoteBtn type="success"></VnoteBtn> -->
		</form>
		<div>
			<div class="editor">
				<textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
			</div>
			<div class="screen" v-html='markedText'></div>
		</div>
      
  </div>
</template>
<script>
import marked from 'marked'
import VnoteBtn from './VnoteBtn'
import {mapMutations} from 'vuex'
export default {
 name: "Vmarked",
 data () {
    return {
		text:'',
		title:''
    }
 },
 methods: {
	 addNote(){
		 var con = document.getElementsByClassName('screen')[0].innerText
		 var mk = document.getElementsByTagName('textarea')[0].innerText
		 var json = {
			 id:Math.round(Math.random()*100000),
			 title:this.title,
			 date: new Date().toLocaleDateString(),
			 content: con,
			 markdown: this.text
		 }
		console.log(json)
		this.$store.commit('addOneNote',json)
		
		console.log(this.title)
	 }
 },
 actions:{

 },
 computed:{
    markedText(){
        return marked(this.text)
    }
 },
 components:{
	 VnoteBtn
 }
}
</script>
<style scoped>
form{margin-bottom: 20px}
.marked{
		width: 1000px;
		margin: 30px auto;
		overflow: hidden;
	}
	.editor,.screen{
		box-sizing: border-box;
		width: 50%;
		height: 300px;
		float: left;
		border: 1px solid #DADADA;
	}
	textarea{
		height: 100%;
		width: 100%;
		border: none;
		background: #fff;

	}
	.screen{background-color: #fafafa}
</style>