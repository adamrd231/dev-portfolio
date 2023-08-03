import { MainLayout } from './Components/Layout';
import Home from './Views/Home';
import Menu from './Views/Menu';
import Footer from './Views/Footer';

function App() {
  return (
    <MainLayout className="App">
      {/* <Menu /> */}
      <Home />
      <Footer />
    </MainLayout>
  );
}

export default App;
