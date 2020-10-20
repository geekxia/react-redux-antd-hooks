import React, { useState } from 'react'

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

const { TextArea } = Input

export default function GoodList(props) {

  const [form] = Form.useForm()

  const [imageUrl, setImageUrl] = useState('')

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
    }
  }


  // 表单验证成功并提交
  const onFinish = values => {
    console.log('提交', values)
    fetchGoodAdd({...values, img: imageUrl}).then(()=>{
      props.history.replace('/good/list')
    })
  }


  return (
    <div>
      <h1>商品{props.match.params.id==0 ? '新增' : '编辑'}</h1>
      <div style={{width: '60%', margin:'35px 0'}}>
        <Form
          {...formItemLayout}
          form={form}
          name="good"
          onFinish={onFinish}
          initialValues={{
            test: 'hello text form'
          }}
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
            // name="img"
            label="商品图片"
            // valuePropName='fileList'
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
                src={imageUrl ? img.imgBaseUrl+imageUrl : img.uploadIcon}
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
              添加商品
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
