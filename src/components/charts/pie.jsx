
import { Column, Pie } from '@ant-design/plots';
//Pie chart
const DemoPie = (PieProps) => {
    console.log(PieProps)
    let data = []
    if (PieProps.PieProps.length > 0) {
      PieProps.PieProps.map((PieData) => {
        let pieobj;
  
        if (PieData) {
          let typePie = PieData.delivery_status
          let valuePie = PieData.delivery_count
  
          pieobj = {
            typePie: typePie,
            valuePie: valuePie,
          }
  
          data.push(pieobj)
        }
        console.log(data)
  
      });
      const pieconfig = {
        appendPadding: 10,
        data,
        angleField: 'valuePie',
        colorField: 'typePie',
        radius: 0.8,
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [
          {
            type: 'pie-legend-active',
          },
          {
            type: 'element-active',
          },
        ],
      };
      return (<Pie {...pieconfig} />);
    }
    else {
      return <p>No Data Available After Searching </p>;
    }
  
  };


  export default DemoPie;