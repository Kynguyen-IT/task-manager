import styled from 'styled-components';
import { Button } from 'antd';

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FilterButton = styled(Button)`
  background-color: ${(props) => (props.isActive ? '#1890ff' : '#f0f0f0')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: ${(props) => (props.isActive ? '1px solid #1890ff' : '1px solid #d9d9d9')};

  &:hover {
    background-color: #1890ff;
    color: #fff;
  }
`;




