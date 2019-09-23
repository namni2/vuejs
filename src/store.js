import Vue from 'vue'
import Vuex from 'vuex'
import $http from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    state : {
        todayInfo:{}
        ,forcastInfo:{}
        ,location:''
        ,dispYn:false //노출여부
    },getter : { 
        getTodayInfo(state,getters){
            return state.todayInfo;
        }
        ,getForcastInfo : (state)=>{state.forcastInfo}
    },mutations : {
        ['todayInfo'](state){}, // todayInfo:function(state,data){ state.todayInfo = data};
        ['forcastInfo'](state){},
        dispYn(state,payload){state.dispYn = payload.dispYn},
        setLocation(state,payload){state.location = payload.location}
    },actions : {
        callTodayInfo : function({commit, state}){
            if(!state || !state.location || state.location=='') return;

            const url = 'https://api.openweathermap.org/data/2.5/weather?unit=metric&q='+state.location+'&appid=a9a915167d70372959600a838dcc192e'
            $http.get(url)
            .then((result)=>{
               if(result && result.status == "200"){
                   this.state.todayInfo = result.data; //데이터 추가
                   commit('todayInfo'); //커밋

                   //노출여부 지정
                   commit('dispYn',{'dispYn':true});
               }
            });
        }
    }
})