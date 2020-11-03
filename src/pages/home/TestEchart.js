import React, {useEffect, useRef} from 'react'
import echarts from 'echarts'

console.log('echarts', echarts)

export default props => {

  let main = useRef(null)

  useEffect(()=>{
    let myChart = echarts.init(main.current)
    myChart.setOption({
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    })
  })

  return (
    <div>
      <h1>测试Echart</h1>
      <div style={{height:'300px'}} ref={main}></div>
    </div>
  )
}
