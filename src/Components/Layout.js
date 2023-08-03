import styled from '@emotion/styled'

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  min-height: 100vh;
  width: 100%;
  background-color: #282c34;
  box-sizing: border-box;
`;

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;


`;

export { MainLayout, ComponentLayout };

