import { Button, Col, List, Row, Space, Tooltip, Typography, Card, Avatar, Tag, Badge, DatePicker, DatePickerProps } from 'antd';
import { Column, Pie } from '@ant-design/plots';
import { SearchOutlined } from "@ant-design/icons";
import React, { Fragment, useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import MasterLayout from '../../components/layouts/MasterLayout'
import RestClient from '../../rest-client/RestClient'
import { Content } from 'antd/lib/layout/layout'
import Spinner from '../../components/utils/Spinner'
import moment from 'moment';
import DemoColumn from '../../components/charts/graph';
import DemoPie from '../../components/charts/pie';
const { Text, Link } = Typography;





function DashBoard() {
  const navigate = useNavigate()
  const [dashboardData, setDashboardData] = useState([])
  const [PieData, setPieData] = useState([])
  const [loading, setLoading] = useState(true)
  let allAlias = dashboardData.payment_channels
  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY-MM-DD HH:mm:ss';
  const [FilterData, setFilterData] = useState([])

  useEffect(() => {
    getData();
  }, [PieData,dashboardData])


  const onDateChange = async (dates, dateStrings) => {
    setFilterData(dateStrings)
  }

  // Search On click
  const getFilterData = async (dates, dateStrings) => {
    const url = `${process.env.REACT_APP_UPLOAD_URL}/pde/`
    return await RestClient.postRequest(url, FilterData)
      .then(result => {
        if (result.status == 200) {
          setPieData(result.data.delivery_data)
          setLoading(false)
        } else {
          setLoading(true)
          toast.error(result.response.data)
          toast.error('Something is wrong! Please sign-in again')
        }
      })
      .catch(function (error) {
        setLoading(true)
        toast.error('Opps! Something is wrong with server')
        console.log(error);
      });
  }



  //Show Graph Data
  const getData = async () => {
    setLoading(true)
    const url = `${process.env.REACT_APP_UPLOAD_URL}/backend-dashboard`

    return await RestClient.getRequest(url)
      .then(result => {
        if (result.status == 200) {
          setDashboardData(result.data)
          setLoading(false)
        } else {
          setLoading(true)
          toast.error(result.response.data)
          toast.error('Something is wrong! Please sign-in again')
        }
      })
      .catch(function (error) {
        setLoading(true)
        toast.error('Opps! Something is wrong with server')
        console.log(error);
      });
  }
  return (
    <Fragment>
      <MasterLayout>
        <div style={{ marginTop: 20 }}>
          <div>
            <div className='row'>
              {/* card header */}
              <div className='col-md-3'>
                <div className='col-md-12'>
                  <Card size="small" title="Transaction Amount" extra={<span style={{ background: 'green', padding: "3px", borderRadius: "5px", color: 'white' }}>30 Days</span>} style={{ width: 'auto', borderRadius: "20px", borderTopColor: 'green' }}>
                    <div>
                      <p style={{ float: 'left', overflow: 'hidden', width: 74 }}>Date range</p>
                      <p style={{ float: 'left' }}>{dashboardData.lastDay} </p>
                      <p>->{dashboardData.today}</p>
                    </div>
                    <div>
                      <p style={{ float: 'left', overflow: 'hidden', width: 150 }}>Amount</p>
                      <p>{dashboardData.total_sum_of_payment_channels}</p>
                    </div>
                  </Card>
                </div>
                {
                  allAlias && (
                    allAlias.map((singlealias) => (
                      <div className='col-md-12' style={{ marginTop: "10px" }}>
                        <Card size="small" title={singlealias.alias} extra={<span style={{ background: 'green', padding: "3px", borderRadius: "5px", color: 'white' }}>30 Days</span>} style={{ width: 'auto', borderRadius: "20px", borderTopColor: 'green' }}>
                          <div>
                            <p style={{ float: 'left', overflow: 'hidden', width: 74 }}>Date range</p>
                            <p style={{ float: 'left' }}>{dashboardData.lastDay} </p>
                            <p>->{dashboardData.today}</p>
                          </div>
                          <div>
                            <p style={{ float: 'left', overflow: 'hidden', width: 150 }}>Amount</p>
                            <p>{singlealias.amt_lc_sum}</p>
                          </div>
                        </Card>
                      </div>
                    ))
                  )
                }

              </div>

              {/* Chart Shows */}
              <div className='col-md-9'>
                {
                  dashboardData && (
                    <DemoColumn dashboardData={dashboardData} />
                  )
                }

                {/* Pie Chart */}
                <div style={{ marginTop: "10px" }}>
                  <Card size="small" title="Package Delivery ETA"
                    extra={
                      <Space direction="vertical" size={6}>
                        <RangePicker
                          format="YYYY-MM-DD HH:mm:ss"
                          onChange={onDateChange}
                          style={{ float: "left" }}
                        />
                        <Button
                          type="primary"
                          onClick={getFilterData}
                          icon={<SearchOutlined />}
                          size="small"
                          style={{ width: 90, float: 'left' }}
                        >
                          Search
                        </Button>
                      </Space>

                    }>
                    <div>
                      {
                        // console.log(PieData)
                        PieData && PieData.length > 0 ? <DemoPie PieProps={PieData} /> : <p>No Data Available </p>
                      }
                      {/* {
                        (() => {
                          if (PieData && PieData.length > 0 ) {
                            return  <DemoPie PieProps={PieData} />

                          }
                          else {
                            return <p>No Data Available </p>
                          }

                        })()
                      } */}
                    </div>
                  </Card>
                </div>


                {/* Latest Imported Data */}
                <div style={{ marginTop: "10px" }}>
                  <Card size="small" title="Latest Data Imported On " extra={<span style={{ background: '#73caec', padding: "3px", borderRadius: "5px", color: 'white' }}>{dashboardData.importedAtCreated}</span>} style={{ width: 'auto', borderRadius: "20px", borderTopColor: 'green' }}>
                    <div>
                      {
                        (() => {
                          if (dashboardData.length > 0) {
                            return <p>The latest Transaction data that exist in the system is on   {dashboardData.latestOrderAt.local_order_date} </p>

                          }
                          else {
                            return <p>No Data Available </p>
                          }

                        })()}

                      {
                        dashboardData.length> 0  && (
                          <p>The latest Transaction data that exist in the system is on   {dashboardData.latestOrderAt.local_order_date} </p>
                        )
                      }

                    </div>
                  </Card>
                </div>


              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </Fragment>
  )
}

export default DashBoard