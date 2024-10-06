import React, { useEffect, useState } from 'react';

// Components
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

// API service
import { fetchTasks, addTask, toggleTaskComplete, deleteTask } from './services/api';

// Data mocks
import { FILLTER_DATA } from './mocks'; 

// Styled components
import * as S from './styles'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(FILLTER_DATA.all);

  useEffect(() => {
    setIsLoading(true)
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
      handleHiddenLoading()
    };
    getTasks();
  }, []);

  const handleHiddenLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }

  const handleAddTask = async (title) => {
    const newTask = { title, completed: false };
    const addedTask = await addTask(newTask);
    setTasks((prevTasks) => [...prevTasks, addedTask]);
  };

  const handleToggleComplete = async (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    await toggleTaskComplete(id, !updatedTask.completed);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = async (id) => {
    await deleteTask(id);
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const handleFilterChange = (newFilter) => {
    setIsLoading(true)
    setFilter(newFilter)
    handleHiddenLoading()
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === FILLTER_DATA.completed) return task.completed;
    if (filter === FILLTER_DATA.incomplete) return !task.completed;
    return true;
  });

  return (
    <S.TaskWrapper>
      <S.TitleWrapper>Todo List</S.TitleWrapper>
      
      <TaskFilter
        filter={filter}
        onFilterChange={handleFilterChange}
      />

      <TaskForm onAddTask={handleAddTask} />

      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDeleteItem={handleRemoveTask}
        isLoading={isLoading}
      />
    </S.TaskWrapper>
  );
};

export default App;
