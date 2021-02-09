import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, message } from 'antd'

const DeleteButton = ({task, onDelete}) => {
  const deleteTask = () => {
    onDelete(task.id);
    message.success('Zadatak obrisan');
  }

  return (
    <Popconfirm
      title="Sigurno želite obrisati?"
      onConfirm={deleteTask}
      okText="Da"
      cancelText="Ne"
    >
      <Button danger size='large' type="link" icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}

export default DeleteButton
