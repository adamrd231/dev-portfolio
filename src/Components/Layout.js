import styled from '@emotion/styled'

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: #333;
`;

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;

  @media (max-width: 667px) {
    flex-direction: column;
    align-items: center;
  }
`;

export { MainLayout, ComponentLayout, Row };

