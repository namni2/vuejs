import Vue from 'vue'
import Vuex from 'vuex'
import $http from 'axios'
import mapping from './assets/js/mapping';


var Highcharts;

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        cityForcastList:[] //
        ,mainListByMajor:[] //2020.05 리뉴얼 주요도시 리스트에 따른 리스트
    },getters : { 
        getMainListByMajor:(state)=>{return state.mainListByMajor}
        ,getCityForcastList:(state)=>{return state.cityForcastList}
    },mutations : {
        ['setCityForcastList'](state,list){return state.cityForcastList = list}
        ,['setMainListByMajor'](state,list){
          if(list && list.length>0){
            return state.mainListByMajor = list;
          }
        } // setMainListByMajor:function(state,data){ state.mainListByMajor = data};
    },actions : { //api호출부 추후 분리
      callMainCities : function({commit, state}){
        const cities = Object.keys(mapping.cityNameMap)
        const url='https://api.openweathermap.org/data/2.5/weather?unit=metric&appid=a9a915167d70372959600a838dcc192e';
        
        cities.map((cityName, seq)=>{
          const cityUrl= url+'&q='+cityName;

          $http.get(cityUrl)
          .then((result)=>{
             if(result && result.status == "200"){
              let map = {
                id:cityName
                ,lat: result.data.coord.lat
                ,lon: result.data.coord.lon
                ,city: mapping.cityNameMap[cityName]
                ,country:'대한민국'
                ,weatherIcon: result.data.weather[0].icon
                ,temperature: Math.floor(result.data.main.temp - 273.15)
              }
               this.state.mainListByMajor.push(map);
              }
          });
        });
        commit('setMainListByMajor');
      },
      callCurrentPosition : async function({commit, state},payload){
        //현재위치
        const url= 'https://api.openweathermap.org/data/2.5/weather?lat='+payload.lat+'&lon='+payload.lon+'&appid=a9a915167d70372959600a838dcc192e';
        
        $http.get(url)
        .then((result)=>{
            if(result && result.status == "200"){
            const address = payload.addressInfo.length>0 ? 
                 payload.addressInfo[0].address.address_name: result.data.name;
            let map = {
              id: address //payload.addressInfo[0].add.
              ,lat: result.data.coord.lat
              ,lon: result.data.coord.lon
              ,city: address
              ,country:'대한민국'
              ,weatherIcon: result.data.weather[0].icon
              ,temperature: Math.floor(result.data.main.temp - 273.15)
            }
            //console.log('erere',[map].concat(this.state.mainListByMajor))
            commit('setMainListByMajor',[map].concat(this.state.mainListByMajor));
            
          }
        });
      
      },
      callForcastByCity : 
        async function({commit,state},payload){
         const url='https://api.openweathermap.org/data/2.5/forecast?lat='+payload.lat+'&lon='+payload.lon+'&appid=a9a915167d70372959600a838dcc192e'
         await $http.get(url)
        .then((result)=>{
            if(result && result.status == "200"){
              commit('setCityForcastList',result.data.list);
            }
        });
      }
     }
    })