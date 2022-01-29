import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Courses from './features/courses/Courses';
import Customer from './features/customer/Customer';
import ShoppingList from './features/shoppingList/ShoppingList';
import Sidebar from './features/sidebar/SideBar';

const App: FC<any> = () => {
  return (<>
    <Routes>
      <Route path="/" element={<Sidebar />} >
        <Route index element={<Courses />} />
        <Route path="/:sort" element={<Courses />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
      </Route>
    </Routes>
  </>);
}

export default App;
