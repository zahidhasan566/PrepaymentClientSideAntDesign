import { Button, Col, List, Row, Space, Tooltip, Typography, Card, Avatar, Tag, Badge, DatePicker, DatePickerProps, Table } from 'antd';
import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../../components/utils/Spinner'

function DataTableIndex(props) {
  let allTitiles = props.titles
  let totalPages = props.totalPages
  const [loading, setLoading] = useState(false)





  //create data 

  const dataSource = []
  if (props.reportData) {
    let ReportDatas = props.reportData
    if (ReportDatas) {
      let initialReportDatas = ReportDatas.data
      // setTotalPages(initialReportDatas.total)
      if (initialReportDatas) {
        // setTotalPages(initialReportDatas.total
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

  // const [page, setPage] = useState(1)
  // const [pageSize,setPageSize] = useState(3)

  if(loading) {
    return <Spinner />
  }

  return (
  <Table dataSource={dataSource} columns={customColumn} 
    pagination={{
      // current:page,
    pageSize:5,
    // total: totalPages,
    total: props.totalPages,
    onChange: (page) => {
      // setLoading(true)
      // console.log('loader callwed');
      props.getReportData(page)
     

}
    // showTotal: (total, range) => `${range[0]} - ${range[1]} / ${total}`,

    //client side data
    // onChange: (page,pageSize) => {
    //       setPage(page)
    //       setPageSize(pageSize)

    // }
  
  }}
    >
    </Table>);
}

export default DataTableIndex