import { Button, Col, List, Row, Space, Tooltip, Typography, Card, Avatar, Tag, Badge, DatePicker, DatePickerProps, Table } from 'antd';

function DataTableIndex(props) {
  let allTitiles = props.titles




  //create data 

  const dataSource = []
  if (props.reportData) {
    let ReportDatas = props.reportData
    if (ReportDatas) {
      let initialReportDatas = ReportDatas.data
      console.log(initialReportDatas);
      if (initialReportDatas) {
        let finalReportData = initialReportDatas.data
        finalReportData.map((singleReportData) => {
          let singleReportDataobj;
          if (singleReportData) {
            singleReportDataobj = {
              order_date: singleReportData.local_order_date,
              transaction_id: singleReportData.transaction_id,
              credit_card_No: singleReportData.credit_card_no,
              order_no: singleReportData.order_number,
              pgw: singleReportData.payment_channels_name,
              paid_Tk: singleReportData.amt_lc_sum,
              auth_Code: singleReportData.auth_code,
              delivery_status: singleReportData.post_delivered_status,
            }

            dataSource.push(singleReportDataobj)
          }
        });

      }
      else {
        // dataSource = []
      }
    }
    else {
      // dataSource = []
    }

  }



  // create custom column
  const customColumn = []
  allTitiles.map((singleTitleData) => {
    let titleobj;

    if (singleTitleData) {
      titleobj = {
        title: singleTitleData.title,
        dataIndex: singleTitleData.key,
        key: singleTitleData.key,
      }

      customColumn.push(titleobj)
    }
  });




  // const columns = [
  //   {
  //     title: 'Order Date',
  //     dataIndex: 'Order Date',
  //     key: 'Order Date',
  //   },
  //   {
  //     title: 'Transaction',
  //     dataIndex: 'Transaction',
  //     key: 'Transaction',
  //   },
  //   {
  //     title: 'Credit Card No',
  //     dataIndex: 'Credit Card No',
  //     key: 'Credit Card No',
  //   },
  //   {
  //     title: 'Order Number',
  //     dataIndex: 'Order Number',
  //     key: 'Order Number',
  //   },
  //   {
  //     title: 'PGW',
  //     dataIndex: 'PGW',
  //     key: 'PGW',
  //   },
  //   {
  //     title: 'Paid - Tk',
  //     dataIndex: 'Paid - Tk',
  //     key: 'Paid - Tk',
  //   },
  // ];

  return <Table dataSource={dataSource} columns={customColumn} />;
}

export default DataTableIndex