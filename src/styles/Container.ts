import styled from 'styled-components';

export const Container = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;

  &.mini_height{
    min-height: 75%;
  }

  &.start{
    justify-content: flex-start;
  }
  &.column{
    flex-direction: column;
    justify-content: flex-start;
  }
`