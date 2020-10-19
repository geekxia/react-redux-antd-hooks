import React from 'react'

import {
  Form,
  Input,
  Button
} from 'antd'

export default function GoodList(props) {

  const [form] = Form.useForm()

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  // 表单验证成功并提交
  const onFinish = values => {
    console.log('提交', values)
  }

  return (
    <div>
      <h1>商品{props.match.params.id==0 ? '新增' : '编辑'}</h1>
      <div>
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
              }
            ]}
          >
            <Input />
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
