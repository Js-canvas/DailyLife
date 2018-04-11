import React,{Component} from 'react';
import styles from './index.css';
import echarts from 'echarts'

class Echart extends Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	componentDidMount(){
		let myChart = echarts.init(this.refs.main);
		myChart.setOption({
	    title: { text: 'ECharts 示例' },
	    tooltip: {},
	    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	    },
	    yAxis: {},
	    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
	    }]
		});
	}
	render(){
		return (
			<div className={styles.box}>
				<div ref="main" className={styles.echarts}></div>
			</div>
			)
	}
}

export default Echart;