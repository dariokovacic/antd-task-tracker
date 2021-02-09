import { useState } from 'react'
import { List, Avatar } from 'antd';
import { BulbFilled } from '@ant-design/icons';
import DeleteButton from './DeleteButton';

const Tasks = ({tasks, onDelete}) => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={tasks}
    renderItem={item => (
      <List.Item actions={[<DeleteButton task={item} onDelete={onDelete} />]} >
        <List.Item.Meta
          avatar={<Avatar style={item.reminder && { backgroundColor: '#1890ff' }} icon={<BulbFilled />} />}
          title={item.text}
          description={item.date.format('ll')}
        />
      </List.Item>
    )}
  />
  )
}

export default Tasks
