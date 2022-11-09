import { Button, Input, Select, Col, List, Row, Space, Tooltip, Typography, Card, Avatar, Tag, Badge, DatePicker, DatePickerProps } from 'antd';
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
import DataTableIndex from '../../components/DataTable';
const { Text, Link } = Typography;



function ExportItem() {
    const navigate = useNavigate()
    const [dashboardData, setDashboardData] = useState([])
    const [loading, setLoading] = useState(true)
    let allAlias = dashboardData.payment_channels
    const dateFormat = 'YYYY-MM-DD HH:mm:ss';
    const { Option } = Select;
    const [ReportFilterData, setReportFilterData] = useState({
        'dateFilter': null,
        'transaction_id': null,
        'credit_card_no': null,
        'order_no': null,
        'auth_code': null,
        'amt': null,
        'delivery_status': null,
        'payment_channal': null,

    });
    const [ReportData, setReportData] = useState([])

    // Set Datatable Datas

    let title = [{ title: 'Order date', key: 'order_date' }, { title: 'Transaction Id', key: 'transaction_id' }, { title: 'Credit Card No', key: 'credit_card_No' },
    { title: 'Order Number', key: 'order_no' }, { title: 'PGW', key: 'pgw' }, { title: 'Paid Tk', key: 'paid_Tk' },
    { title: 'Autho code', key: 'auth_Code' }, { title: 'Delivery Status', key: 'delivery_status' }]


    useEffect(() => {
        getData();
    }, [ReportData])

    const handleChange = (name, value) => {
        setReportFilterData({
            ...ReportFilterData,
            [name]: value,
        });
        // console.log(ReportFilterData)

    };
    //Show Graph Data
    const getData = async () => {
        setLoading(true)
        const url = `${process.env.REACT_APP_UPLOAD_URL}/backend-dashboard`

        return await RestClient.getRequest(url)
            .then(result => {
                if (result.status == 200) {
                    setDashboardData(result.data)
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

    // After Data
    const getReportData = async () => {
        setLoading(true)
        const url = `${process.env.REACT_APP_UPLOAD_URL}/backend-transaction-report`

        return await RestClient.postRequest(url, ReportFilterData)
            .then(result => {
                if (result.status == 200) {
                    setLoading(false)
                    setReportData(result.data)
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




    const { RangePicker } = DatePicker;
    return (
        <Fragment>
            <MasterLayout>
                <div style={{ marginTop: 20 }}>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Space direction="vertical" size={6}>
                                <RangePicker
                                    format="YYYY-MM-DD HH:mm:ss"
                                    name='dateFilter'
                                    onChange={async (date, dateStrings) => handleChange('dateFilter', dateStrings)}
                                />
                            </Space>
                        </div>
                        <div className="col-md-3">
                            <Input
                                placeholder="Transaction Id"
                                name='transaction_id'
                                onChange={(e) => handleChange('transaction_id', e.target.value)}
                                value={ReportFilterData.transaction_id}
                            />
                        </div>
                        <div className="col-md-3">
                            <Input
                                placeholder="Credit Card No"
                                name='credit_card_no'
                                onChange={(e) => handleChange('credit_card_no', e.target.value)}
                                value={ReportFilterData.credit_card_no}
                            />
                        </div>
                        <div className="col-md-3">
                            <Input
                                placeholder="Order No"
                                name='order_no'
                                onChange={(e) => handleChange('order_no', e.target.value)}
                                value={ReportFilterData.order_no}
                            />
                        </div>

                    </div>
                    <div className="row" style={{ paddingTop: 10 }}>
                        <div className="col-md-3">
                            <Input
                                placeholder="Auth Code"
                                name='auth_code'
                                onChange={(e) => handleChange('auth_code', e.target.value)}
                                value={ReportFilterData.auth_code}
                            />
                        </div>
                        <div className="col-md-3">
                            <Input
                                placeholder="AMT"
                                name='amt'
                                onChange={(e) => handleChange('amt', e.target.value)}
                                value={ReportFilterData.amt}
                            />
                        </div>
                        <div className="col-md-3">
                            <Select
                                defaultValue="Delivery Status"
                                // name='delivery_status'
                                // style={{
                                //     width: 120,
                                // }}
                                onChange={(e) => handleChange('delivery_status', e)}
                                options={[
                                    {
                                        value: 'Delivered',
                                        label: 'Delivered',
                                    },
                                    {
                                        value: 'Partially Delivered',
                                        label: 'Partially Delivered',
                                    },
                                    {
                                        value: 'Delivery Panding',
                                        label: 'Delivery Panding',
                                    }
                                ]}
                            />
                        </div>
                        <div className="col-md-3">
                            <Select
                                defaultValue="Payemnt Channels"
                                name="payment_channal"
                                onChange={(e) => handleChange('payment_channal', e)}
                            // value={ReportFilterData.payment_channal}
                            // style={{
                            //     width: 120,
                            // }}
                            >
                                {
                                    allAlias && (
                                        allAlias.map((singlealias) => (
                                            <Option key={singlealias.alias} value={singlealias.alias}>{singlealias.alias}</Option>
                                        )
                                        ))
                                }
                            </Select>

                        </div>
                    </div>
                    <div className="row" style={{ padding: "10px 0px" }}>
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6" style={{ textAlign: 'end' }}>
                            <Button
                                type="primary"
                                //   onClick={getFilterData}
                                icon={<SearchOutlined />}
                                size="medium"
                                style={{ width: 120 }}
                                onClick={getReportData}
                            >
                                Search
                            </Button>
                        </div>
                    </div>


                    <DataTableIndex reportData={ReportData} titles={title} />
                </div>
            </MasterLayout>
        </Fragment>
    )

}

export default ExportItem