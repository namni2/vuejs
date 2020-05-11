import Vue from 'vue'
import Vuex from 'vuex'
import $http from 'axios'
import { objectEach } from 'highcharts';


var Highcharts;

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        todayInfo:{}
        ,forcastInfo:{}
        ,location:''
        ,dispYn:false //노출여부
        ,pos:{}
        ,chartInfo:{} //차트 그리기 정보
    },getter : { 
        getTodayInfo(state,getters){
            return state.todayInfo;
        }
        ,getForcastInfo : (state)=>{state.forcastInfo}
    },mutations : {
        ['todayInfo'](state){}, // todayInfo:function(state,data){ state.todayInfo = data};
        ['forcastInfo'](state){},
        dispYn(state,payload){state.dispYn = payload.dispYn},
        setLocation(state,payload){state.location = payload.location},
        setLatLon(state,payload){state.pos = payload}
    },actions : {
        callTodayInfo : function({commit, state}){
            //if(!state || !state.location || state.location=='') return;

            var url='';
            if(state.location && state.location!=''){
               //주요도시
               url='https://api.openweathermap.org/data/2.5/weather?unit=metric&q='+state.location+'&appid=a9a915167d70372959600a838dcc192e'
            }else if(state.pos && state.pos!={}){
               //현재위치
                url= 'https://api.openweathermap.org/data/2.5/weather?lat='+  state.pos.lat  +'&lon='+  state.pos.lon+'&appid=a9a915167d70372959600a838dcc192e';
            }

            $http.get(url)
            .then((result)=>{
               if(result && result.status == "200"){
                   this.state.todayInfo = result.data; //데이터 추가
                   commit('todayInfo'); //커밋

                   //노출여부 지정
                   commit('dispYn',{'dispYn':true});
               }
            });
        },updateChart : function({commit, state}){
            Highcharts = require('highcharts');
            require('highcharts/modules/exporting')(Highcharts);
         
        },callForcastInfo : function({commit, state}){
            var url='';
            if(state.location && state.location!=''){
               url='https://api.openweathermap.org/data/2.5/forecast?q='+state.location+'&appid=a9a915167d70372959600a838dcc192e'
            }else if(state.pos && state.pos!={}){
               //현재위치
                url= 'https://api.openweathermap.org/data/2.5/forecast?lat='+state.pos.lat+'&lon='+state.pos.lon+'&appid=a9a915167d70372959600a838dcc192e';
            }

            $http.get(url)
            .then((result)=>{
               if(result && result.status == "200"){
                   var data = result.data;
                   var xCate=[],yData1=[],yData2=[];
                  
                   //data.list.length
                   for(var i=0; i<20;i++){
                        xCate.push(data.list[i].dt_txt );
                        yData1.push((data.list[i].main.temp - 273.15));
                        yData2.push( (data.list[i].rain)?(data.list[i].rain['3h'])*100:'0'); 
                   }
                
                    Highcharts.chart('container', {
                        title:{
                            text:"Forcast Weather in "+data.city.name
                        },chart: {
                            zoomType: 'xy'
                        },xAxis:[{
                            categories: xCate
                            ,crosshair:true
                        }],yAxis: [{ // Primary yAxis
                            labels: {
                              format: '{value}°C',
                              style: {
                                color: Highcharts.getOptions().colors[1]
                              }
                            },
                            title: {
                              text: 'Temperature',
                              style: {
                                color: Highcharts.getOptions().colors[1]
                              }
                            }
                        },
                        { // Secondary yAxis
                            title: {
                              text: 'Rainfall',
                              style: {
                                color: Highcharts.getOptions().colors[0]
                              }
                            },
                            labels: {
                              format: '{value} mm',
                              style: {
                                color: Highcharts.getOptions().colors[0]
                              }
                            },
                            opposite: true
                          }
                        ],
                        tooltip: {
                            shared: true
                          },
                        legend: {
                            layout: 'vertical',
                            align: 'left',
                            x: 120,
                            verticalAlign: 'top',
                            y: 100,
                            floating: true,
                            backgroundColor:
                            Highcharts.defaultOptions.legend.backgroundColor || // theme
                            'rgba(255,255,255,0.25)'
                        },
                        series: [{
                            name: 'Rainfall',
                            type: 'column',
                            yAxis: 1,
                            data: yData2,
                            tooltip: {
                              valueSuffix: ' mm'
                            }
                        
                          }, {
                            name: 'Temperature',
                            type: 'spline',
                            data: yData1,
                            tooltip: {
                              valueSuffix: '°C'
                            }
                          }]
                        });
        
               }
            });
        }
    }
})