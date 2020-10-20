import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
  Form,
  Input,
  Button,
  InputNumber,
  Upload,
  Switch
} from 'antd'

import { QfCateSelect } from '@/components'
import img from '@/utils/img'
import { fetchGoodAdd } from '@/utils/api'
import { getGoodInfoAction, goodInfoClearAction } from '@/store/actions'

const { TextArea } = Input

export default function GoodList(props) {

  const [form] = Form.useForm()

  const [imageUrl, setImageUrl] = useState('')
  const [count, setCount] = useState(0)

  const goodInfo = useSelector(store=>store.good.goodInfo)

  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 20 },
    },
  }

  const tailFormItemLayout = {
    wrapperCol: {
      sm: {
        span: 20,
        offset: 4,
      },
    },
  }

  const imgChange = (e) => {
    console.log('图片上传成功', e)
    if(e.file && e.file.response) {
      setImageUrl(e.file.response.data.url)
      console.log('imageUrl', imageUrl)
    }
  }


  // 表单验证成功并提交
  const onFinish = values => {
    console.log('提交', values)
    const data = {...values, img: imageUrl}
    if(id!=0) {
      data.id = goodInfo._id
    }
    fetchGoodAdd(data).then(()=>{
      props.history.replace('/good/list')
      // 清空redux中的商品详情数据
      dispatch(goodInfoClearAction())
    })
  }

  const dispatch = useDispatch()
  let id = props.match.params.id
  useEffect(()=>{
    if(id!=0) {
      dispatch(getGoodInfoAction({good_id: id}))
    }
  },[])
  useEffect(()=>{
    // 设置表单的初始值
    form.setFieldsValue(goodInfo)
  })

  console.log('info', goodInfo)

  return (
    <div>
      <h1>商品{props.match.params.id==0 ? '新增' : '编辑'}</h1>
      <div style={{width: '60%', margin:'35px 0'}}>
        <Form
          {...formItemLayout}
          form={form}
          name="good"
          onFinish={onFinish}
          initialValues={goodInfo}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="商品名称"
            rules={[
              {
                required: true,
                message: '商品名称是必填字段!',
              },
              {
                max: 10,
                message: '商品名称不能超过10个字'
              },
              {
                min: 2,
                message: '商品名称不能少于2个字'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="desc"
            label="商品描述"
            rules={
              [
                { required: true, message: '商品描述是必填字段' }
              ]
            }
          >
            <TextArea rows={3} />
          </Form.Item>

          <Form.Item
            name="cate"
            label="商品品类"
            rules={
              [
                { required: true, message: '商品品类是必填字段' }
              ]
            }
          >
            <QfCateSelect />
          </Form.Item>

          <Form.Item
            name="price"
            label="商品价格"
            rules={
              [
                { required: true, message: '商品价格是必填字段' }
              ]
            }
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label="商品图片"
            rules={
              [
                { required: true, message: '图片是必填的' }
              ]
            }
          >
            <Upload
              name="file"
              action={img.uploadImgUrl}
              listType="picture-card"
              showUploadList={false}
              onChange={imgChange}
            >
              <img
                src={imageUrl ? img.imgBaseUrl+imageUrl : (goodInfo.img ? img.imgBaseUrl+goodInfo.img : img.uploadIcon)}
                alt="avatar"
                style={{ width: '100%' }}
              />
            </Upload>
          </Form.Item>

          <Form.Item
            name="hot"
            label="是否热销"
            valuePropName='checked'
          >
            <Switch />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              {props.match.params.id==0 ? '添加商品' : '确认修改'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
