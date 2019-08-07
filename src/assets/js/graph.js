import $ from 'jquery';
import Highcharts from 'highcharts';

let chart =  {
    render : function(){
        var el = $('#container');
        let instance = Highcharts.chart(el,{})
    }
}

export default chart