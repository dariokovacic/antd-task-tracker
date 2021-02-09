import { useState } from 'react'
import { Form, Input, Button, Checkbox,DatePicker, message } from 'antd';
import { TagOutlined } from '@ant-design/icons';

const AddTaskForm = ({onAdd}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAdd(values);
    message.success('Zadatak dodan');
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="add-task"
      size="large"
      style={{marginBottom: '20px'}}
      initialValues={{ reminder: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="text"
        rules={[{ required: true, message: 'Unesite zadatak' }]}
      >
        <Input prefix={<TagOutlined style={{marginRight: '7px'}} />} placeholder="Zadatak" />
      </Form.Item>

      <Form.Item
        name="date"
        rules={[{ required: true, message: 'Unesite vrijeme' }]}
      >
        <DatePicker style={{width: '100%'}} format='ll' />
      </Form.Item>

      <Form.Item>
        <Form.Item name="reminder" valuePropName="checked" noStyle>
          <Checkbox>Podsjeti me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Dodaj
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddTaskForm
