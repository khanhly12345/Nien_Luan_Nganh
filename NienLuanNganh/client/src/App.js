// import Header from './components/Header'
// import Footer from './components/Footer';
// import GlobalStyle from './components/GlobalStyle';
// import { Outlet } from 'react-router-dom';


// function App() {
//   return (
//     <GlobalStyle>
//       <div className="App">
//           <Header />
//               <Outlet />
//           <Footer />
//       </div>
//     </GlobalStyle>

//   );
// }

// export default App;

// import Header from './components/Header'
// import Footer from './components/Footer';
// import GlobalStyle from './components/GlobalStyle';
// import { Outlet } from 'react-router-dom';
import Content from './components/Content';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Admin from './components/Admin';
import ProductAdmin from './components/Admin/ProductAdmin';
import AddProduct from './components/Admin/ProductAdmin/AddProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Content />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detail' element={<Detail />}>
            <Route path=':id' element={<Detail />}/>
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Route>
      </Routes>
      <Routes >
        <Route path='/admin' element={<Admin />} >
          <Route path='product' element={<ProductAdmin />} />
          <Route path='addProduct' element={<AddProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
