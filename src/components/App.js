import React from 'react';
import Main from './Main';
import All from './All';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
    <Route path='/' element={ <Main />} />
    <Route path='/All' element={<All />}/>
    </Routes>
  );
}
