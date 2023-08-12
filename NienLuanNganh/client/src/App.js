import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <GlobalStyle>
      <div className="App">
          <Header />
          <Content />
          <Footer />
      </div>
    </GlobalStyle>
  );
}

export default App;
