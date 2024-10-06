import React, { memo } from 'react';

// Data mocks
import { FILLTER_DATA } from '../../mocks';

// Styled components
import * as S from './styles';

const TaskFilter = ({ filter, onFilterChange }) => {
  const handleItem = (item) => {
    item !== filter && onFilterChange(item);
  };

  return (
    <S.ContainerWrapper>
      {Object.entries(FILLTER_DATA).map(([key, value]) => (
        <S.FilterButton
          key={key}
          onClick={() => handleItem(value)}
          isActive={filter === value}
        >
          {value}
        </S.FilterButton>
      ))}
    </S.ContainerWrapper>
  );
};

export default memo(TaskFilter);