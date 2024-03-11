import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { getTotals } from './redux/cartSlice';
// import { useDispatch } from 'react-redux';
import App from './components/App.jsx'
import Man from './components/pages/Man.jsx';
import Woman from './components/pages/Woman.jsx';
import About from './components/pages/About.jsx';
import Contacts from './components/pages/Contacts.jsx';
// import Admin from './components/Pages/Admin.jsx';
// import ShoeInfo from './components/ShoeInfo.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import './style/index.css';
// import ShoesCatalog from './components/Pages/ShoesCatalog.jsx';
// import ManCatalog from './components/Pages/ManCatalog.jsx';
// import WomanCatalog from './components/Pages/WomanCatalog.jsx';
// import Checkout from './components/Pages/Checkout.jsx';




const router = createBrowserRouter([
  {
    path: '/progetto101',
    element: <App />,
  },
  {
    path: '/progetto101/man',
    element: <Man />,
  },
  {
    path:'/progetto101/woman',
    element: <Woman />,
  },
  // {
  //   path:'/catalog',
  //   element: <ShoesCatalog />,
  // },
  {
    path:'/progetto101/contacts',
    element: <Contacts />,
  },
  {
    path:'/progetto101/about',
    element: <About />
  },
  {
    path:'/progetto101/mancatalog',
    element: <ManCatalog />
  },
  // {
  //   path:'/womancatalog',
  //   element: <WomanCatalog />
  // },
  // {
  //   path:'/shoe/:shoeId',
  //   element: <ShoeInfo/>
  // },
  // {
  //   path:'/checkout',
  //   element: <Checkout/>
  // },
  // {
  //   path:'/admin',
  //   element: <Admin/>
  // },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
