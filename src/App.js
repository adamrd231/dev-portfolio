import { MainLayout } from './Components/Layout';
import Home from './Views/Home';
import Menu from './Views/Menu';
import Footer from './Views/Footer';
import AppBoxView from './Views/AppBoxView';
import styled from '@emotion/styled'
import PortfolioApps from './Constants/AppStorePortfolio';




function App() {
  const GridLayout = styled.div`
  display: grid;
  grid-gap: 1%;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* For smaller widths, switch to a single column */
    grid-gap: 10px;
  };
  border: none;
  `;

  return (
    <MainLayout className="App">
      <Menu></Menu>
      <Home />
      <GridLayout>
        { PortfolioApps.map(project => (
          <AppBoxView project={project} />
        ))}
      </GridLayout>
      <Footer />
    </MainLayout>
  );
}

export default App;
