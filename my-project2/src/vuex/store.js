import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //初始化数据
        allData:[]
    },
    getters:{
        getDatas:function(state){
            return state.allData
        }
    },
    mutations: {
        getAllDatas(state,data){
            state.allData = data
        },
        addOneNote(state,data){
            console.log(data)
            // axios({
            //     method: 'post',
            //     url: 'http://127.0.0.1:7428/api/comments',
            //     data: {
            //         id: data.id,
            //         title: data.title,
            //         date: data.date,
            //         content: data.content,
            //         markdown: data.markdown
            //     },
            //     transformRequest: [function(data) {
            //             // Do whatever you want to transform the data
            //             let ret = '';
            //             for (let it in data) {
            //                 ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //             }
            //             return ret;
                        
            //         }
            //     ]
            //     // headers: {
            //     //     'Content-Type': 'application/x-www-form-urlencoded'
            //     // }
            // });
            // axios.post('http://127.0.0.1:7428/api/comments', data,{
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            // })
            // .then( (response) => {
            // console.log(response.data);
            // })
            // .catch((error) => {
            // console.log(error);
            // });
            $.ajax({
                type:'post',
                url:'http://127.0.0.1:7428/api/comments',
                data:data,
                success:(data)=>{
                    console.log(data)
                    state.allData = data
                },
                error:(err)=>{
                    console.log(err)
                }
            })

        }
    },
    actions:{
        
    }
})