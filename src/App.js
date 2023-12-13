import { MainLayout } from './Components/Layout';
import Home from './Views/Home';
import Menu from './Views/Menu';
import Footer from './Views/Footer';
import AppBoxView from './Views/AppBoxView';
import styled from '@emotion/styled'
import natureIcon from './Images/natureFM.png'
import pokerIcon from './Images/pokerIcon.png'
import cryptoStandIcon from './Images/cryptoStandIcon.png'

function App() {

  const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  `;

  return (
    <MainLayout className="App">
      <Menu></Menu>
      <Home />
      <GridLayout>
        <AppBoxView image={natureIcon} />
        <AppBoxView image={pokerIcon} />
        <AppBoxView image={cryptoStandIcon} />
        <AppBoxView image={pokerIcon} />
      </GridLayout>
      <Footer />
    </MainLayout>
  );
}

export default App;
