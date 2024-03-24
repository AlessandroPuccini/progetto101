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
import Admin from './components/pages/Admin.jsx';
import ShoeInfo from './components/pages/ShoeInfo.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import './style/index.css';
import ShoesCatalog from './components/pages/ShoesCatalog.jsx';
import ManCatalog from './components/pages/ManCatalog.jsx';
import WomanCatalog from './components/pages/WomanCatalog.jsx';
import Checkout from './components/pages/CheckOut.jsx';
import Userlist from './components/Userlist.jsx';




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
  {
    path:'/progetto101/catalog',
    element: <ShoesCatalog />,
  },
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
  {
    path:'/progetto101/womancatalog',
    element: <WomanCatalog />
  },
  {
    path:'/progetto101/shoe/:shoeId',
    element: <ShoeInfo/>
  },
  {
    path:'/progetto101/checkout',
    element: <Checkout/>
  },
  {
    path:'/progetto101/admin',
    element: <Admin/>
  },
  {
    path: '/progetto101/userlist',
    element: <Userlist />,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
