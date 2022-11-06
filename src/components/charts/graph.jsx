


import { Column, Pie } from '@ant-design/plots';
const DemoColumn = (props) => {
    let chartDatas = props.dashboardData.payment_channels
    let data = []
  
    if (chartDatas) {
      chartDatas.map((chartData) => {
        let obj;
  
        if (chartData.alias && chartData.amt_lc_sum) {
          let alias = chartData.alias
          let amt_lc_sum = chartData.amt_lc_sum
          let name = chartData.name
  
          obj = {
            alias: alias,
            amt_lc_sum: amt_lc_sum,
            name: name
          }
  
          data.push(obj)
        }
  
      });
    }
  
    const config = {
      data,
      isGroup: true,
      xField: 'alias',
      yField: 'amt_lc_sum',
      seriesField: 'name',
      //color: ['#1ca9e6', '#f88c24'],
      // marginRatio: 0.1,
      label: {
        position: 'middle',
        // 'top', 'middle', 'bottom'
        layout: [
          {
            type: 'interval-adjust-position',
          },
          {
            type: 'interval-hide-overlap',
          },
          {
            type: 'adjust-color',
          },
        ],
      },
    };
    return <Column {...config} />;
  };
  

  export default DemoColumn;