import { useState } from 'react'
import { Card, Typography, Switch } from 'antd'
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTaskForm from './components/AddTaskForm';
import './App.css';
import moment from 'moment';

function App() {

  const {Title} = Typography;
  const title = 'Podsjetnik';
  const [showAdd, setShowAdd] = useState(true);

  const style = {
    display: 'flex',
    flexDirection: 'column'
  }

  
  const tasksArray = [
    {
      id: 1,
      text: 'Pregled kod doktora',
      date: moment("2021-02-17"),
      reminder: true
    },
    {
      id: 2,
      text: 'Sastanak u školi',
      date: moment("2021-02-10"),
      reminder: true
    },
    {
      id: 3,
      text: 'Kupovina namirnica',
      date: moment("2021-01-04"),
      reminder: false
    },
  ];

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }));
  }

  const onAdd = (data) => {
    const newTask = {
      id: Math.floor(Math.random(1000)),
      text: data.text,
      date: data.date,
      reminder: data.reminder
    };
    setTasks([newTask, ...tasks]);
  }
  

  const [tasks, setTasks] = useState(tasksArray);

  return (
    <div className="container">
      <Card 
        bodyStyle={style}
        hoverable
        title={<Title level={2}>{title}</Title>}
        extra={<Switch checkedChildren="Dodaj" unCheckedChildren="Zatvori" checked={showAdd} onChange={() => {setShowAdd(!showAdd)}} />}
        style={{ width: 500 }}
      >
        {!showAdd && <AddTaskForm onAdd={onAdd} />}
        <Tasks tasks={tasks} onDelete={onDelete} />
        <Footer />
      </Card>
    </div>
  );
}

export default App;
