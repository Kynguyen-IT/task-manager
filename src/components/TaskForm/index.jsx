
import React, { memo, useState } from 'react';

// Components
import { Input } from 'antd';

// Styled components
import * as S from './styles'

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <S.ContainerWrapper>
      <Input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <S.ButtonWrapper type="primary" onClick={handleAddTask}>
        Add Task
      </S.ButtonWrapper>
    </S.ContainerWrapper>
  );
};

export default memo(TaskForm);
