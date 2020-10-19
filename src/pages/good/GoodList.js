import React, { useEffect, useState } from 'react'
import { getCatesActions } from '@/store/actions'
import { useSelector, useDispatch } from 'react-redux'

import {
  Table,
  Tag,
  Space,
  Row,
  Col,
  DatePicker,
  Select,
  Button
} from 'antd'

const { RangePicker } = DatePicker
const { Option } = Select

export default function GoodList(props) {

  const initFilter = {
    date: [],
    cate: '',
    page: 1,
    size: 10
  }

  const [filter, setFilter] = useState(initFilter)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: age => <span>{age*100}</span>
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <span>Invite {record.name}</span>
          <span>Delete</span>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  // 状态管理
  const cateList = useSelector(store=>store.good.cateList)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCatesActions({}))
  }, [])

  console.log('cateList', cateList)

  // 日期筛选
  const dateChange = (dates)=>{
    if (dates) {
      console.log('dates', dates)
      let sTime = dates[0].format('YYYY-MM-DD HH:mm:ss')
      console.log('sTime', sTime)
      let eTime = dates[1].valueOf()
      console.log('eTime', eTime)
    }
  }
  // 品类变化
  const cateChange = val => {
    console.log('cate', val)
    // let newFilter = filter  // 浅复制
    // newFilter.cate = val
    // filter.cate = val
    // setCate(val)
    initFilter.cate = val
    setFilter(initFilter)
  }
  const pageChange = page => {
    // filter.page = page
    // setFilter(JSON.parse(JSON.stringify(filter)))
    initFilter.page = page
    setFilter(initFilter)
    console.log('filter', filter)
  }

  return (
    <div>
      <h1>商品列表</h1>
      <div style={{padding:'20px 0'}}>
        <Row align='middle'>
          <Col span={2}>
            <span className='qf-key'>时间:</span>
          </Col>
          <Col span={7}>
            <RangePicker onChange={dateChange}/>
          </Col>
          <Col span={2}>
            <span className='qf-key'>品类:</span>
          </Col>
          <Col span={4}>
            <Select value={filter.cate} allowClear style={{width:'100px'}} onChange={cateChange}>
              <Option value=''>全部</Option>
              {
                cateList.map(ele=>(
                  <Option key={ele.id} value={ele.cate}>{ele.cate_zh}</Option>
                ))
              }
            </Select>
          </Col>
          <Col offset={7} span={2}>
            <div className='qf-key' style={{paddingRight: '0'}}>
              <Button type='primary' onClick={()=>props.history.push('/good/detail/0')}>新增</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 2,
            onChange: pageChange,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: [1,2,3,5,10],
            showTotal: (total)=>{
              return <h1>总共 {total} 条</h1>
            }
          }}
        />
      </div>
    </div>
  )
}
