import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;
  background-color: #eaff47;
  display: grid;
  border-radius: 32px;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;
