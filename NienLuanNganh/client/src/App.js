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
import EditProduct from './components/Admin/ProductAdmin/EditProduct';
import Order from './components/Admin/Order';
import DetailOrder from './components/Admin/Order/DetailOrder';
import Filter from './components/Filter';
import LoginAdmin from './components/Admin/LoginAdmin';
import Account from './components/Admin/Account';
import AddAdmin from './components/Admin/Account/AddAdmin/addadmin';
import EditAdmin from './components/Admin/Account/EditAdmin';
import Overview from './components/Admin/Overview';
import User from './components/Admin/User';
import Search from './components/Search';

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
          <Route path='/filter/:id' element={<Filter />}/>
          <Route path='/search/:value' element={<Search />}/>
        </Route>
      </Routes>
      <Routes >
        <Route path='/admin' element={<Admin />} >
          <Route path='product' element={<ProductAdmin />} />
          <Route path='addProduct' element={<AddProduct />} />
          <Route path='editProduct/:id' element={<EditProduct />} />
          <Route path='order' element={<Order />}/>
          <Route path='detailOrder/:id' element={<DetailOrder />}/>
          <Route path='account' element={<Account />}/>
          <Route path='addAdmin' element={<AddAdmin />}/>
          <Route path='editadmin/:id' element={<EditAdmin />}/>
          <Route path='' element={<Overview />}/>
          <Route path='user' element={<User />}/>
        </Route>
      </Routes>
      <Routes>
        <Route path='/loginadmin/' element={<LoginAdmin />} />
      </Routes>
    </>
  );
}

export default App;
