import React from 'react';

// Components
import TaskItem from '../TaskItem';
import { Flex, Spin } from 'antd';

// Styled components
import * as S from './styles'

const TaskList = ({ tasks, onToggleComplete, onDeleteItem, isLoading }) => {
  return (
    <S.ContainerWrapper>
      {isLoading ? (
        <Flex align="center" justify="center">
          <Spin/>
        </Flex>
      ) : (
        <>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </>
      )}
    </S.ContainerWrapper>
  );
};

export default TaskList;
