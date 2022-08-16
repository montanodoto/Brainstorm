import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 800px;
  overflow-x: scroll;

  padding: 1rem 0rem;
  box-shadow: 0px 0px 15px 5px #e7e7e7;

  .divider {
    border-top: 1px solid #000;
  }

  background: ${props => props.color};
`;

export const StyledListItem = styled.li`
  padding: 0.5rem 2rem;
`;

export default StyledList;
