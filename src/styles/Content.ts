import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  &.mini_height{
    min-height: 75%;
  }

  &.start{
    justify-content: flex-start;
    flex-wrap: wrap;

  }
  &.column{
    flex-direction: column;
    justify-content: flex-start;
  }

`