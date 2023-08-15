import Header from './components/Header'
// import Content from './components/Content';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';
import { Outlet } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
    <GlobalStyle>
      <div className="App">
          <Header />
              <Outlet />
          <Footer />
      </div>
    </GlobalStyle>
  );
}

export default App;
