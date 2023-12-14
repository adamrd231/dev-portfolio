import { MainLayout } from './Components/Layout';
import Home from './Views/Home';
import Menu from './Views/Menu';
import Footer from './Views/Footer';
import { Route, Routes, HashRouter } from 'react-router-dom';
import PrivacyPolicy from './Views/PrivacyPolicy';

function App() {

  return (
    <HashRouter>
      <MainLayout className="App">
        <Menu></Menu>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/privacy" element={ <PrivacyPolicy /> } />
        </Routes>
        <Footer />
      </MainLayout>
    </HashRouter>
  );
}

export default App;
