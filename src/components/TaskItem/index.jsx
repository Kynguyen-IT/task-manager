import React, { memo } from 'react';

// Components
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

// Styled components
import * as S from './styles'

const TaskItem = ({ task, onToggleComplete, onDeleteItem }) => {
  return (
    <S.ContainerWrapper>
      <S.CheckboxWrapper 
        checked={task.completed} 
        onChange={() => onToggleComplete(task.id)}
      >
        {task.title}
      </S.CheckboxWrapper>

      <Button 
        type="default"
        danger 
        icon={<DeleteOutlined />} 
        onClick={() => onDeleteItem(task.id)}
        />
    </S.ContainerWrapper>
  );
};

export default memo(TaskItem);
