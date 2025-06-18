import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import AddTask from './AddTask.jsx'
import TaskItems from './TaskItems.jsx'
import Counter from './Counter.jsx'
import ModalDialog from './ModalDialog.jsx'

export default function TaskList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);
  const [count, setCount] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [show, setShow] = useState(false);
  const [eventDialog, setEventDialog] = useState(false);
  const [showActive, setShowActive] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (storedTasks == '') {
      return;
    }
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (tasks == '') {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setActive(tasks.filter(task => !task.completed))
  }, [tasks]);

  useEffect(() => {
    setDisplayTasks(showActive? active : tasks)
    setCount({ countActive: active.length, countTotal: tasks.length })
  }, [showActive, active, tasks, displayTasks])

  const addTask = (task) => {
    if (task === '') { 
      return; 
    }
    setTasks([...tasks, {id: Date.now() ,text: task, completed: false}]);
    toast.success('Successfully Added');
  }

  const toggleCompleted = (toggleId) => {
    setTasks(tasks.map(task => task.id === toggleId ? { ...task, completed: !task.completed } : task));
  }

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updateTasks = showActive ? [...active] : [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
      showActive ? setActive(updateTasks) : setTasks(updateTasks);
    }
  }

  const moveTaskDown = (index) => {
    if (index < showActive ? active.length - 1 : tasks.length - 1) {
      const updateTasks = showActive ? [...active] : [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
      showActive ? setActive(updateTasks) : setTasks(updateTasks);
    }
  }

  const editedTasks = (editedId, newText) => {
    setTasks(tasks.map(task => task.id === editedId ? { ...task, text: newText } : task));
    toast.success('Successfully Edited');
  }

  const openModalDialog = (isEvent, taskId) => {
    if (tasks.length === 0) {
      toast.warn('There is no task list.');
    } else {
      isEvent ? setEventDialog(true) : setEventDialog(false);
      setDeletingId(taskId)
      setShow(true);
    }
  }

  const submitDialog = () => {
    eventDialog ? deletedTask(deletingId) : ResetTasks();
  }
  
  const deletedTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setDeletingId(null);
    toast.success('Successfully Deleted');
  }

  const ResetTasks = () => {
    localStorage.clear();
    setTasks([]);
    setActive([]);
    toast.success('Successfully Reset');
  }

  return (
    <>
    <AddTask
      task={task}
      setTask={setTask}
      addTask={addTask}
    />
    <TaskItems 
      displayTasks={displayTasks}
      showActive={showActive}
      setShowActive={setShowActive}
      toggleCompleted={toggleCompleted}
      moveTaskUp={moveTaskUp}
      moveTaskDown={moveTaskDown}
      editedTask={editedTasks}
      openModalDialog={openModalDialog}
    />
    <Counter
      tasksActive={count.countActive}
      tasksTotal={count.countTotal}
      openModalDialog={openModalDialog}
    />
    <ModalDialog
      isShow={show}
      eventTarget={eventDialog}
      submitDialog={submitDialog}
      setShow={setShow}
    />
    </>
  )
}