import styled from 'styled-components';
import { Checkbox } from 'antd';

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;

export const CheckboxWrapper = styled(Checkbox)`
  display: flex;
  align-items: center;
`;


