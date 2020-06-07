import $ from 'jquery';
var Highcharts;

let chart =  {
    init : function(){
        Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(Highcharts);
    },
    render : function(list){
        var xCate=[],yData1=[],yData2=[];//일시, 현재온도, 비올확률
                  
        for(var i=0; i<list.length;i++){ 
            xCate.push(list[i].dt_txt.split(' ')[1].substring(0,5));
            yData1.push( Math.floor(list[i].main.temp - 273.15));
            yData2.push((list[i].rain) ? Math.round(list[i].rain['3h']*100)/100 : '0'); 
        }

        Highcharts.chart('container', {
            title:{
                text:"Forcast Weather"
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
}
//

export default chart