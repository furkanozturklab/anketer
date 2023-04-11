import React from 'react'

import Home from 'components/Home';
import Anket from 'components/Anket'
import More from 'components/More';
import Category from 'components/Category';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';



export default function App() {

  const componentData = useSelector(state => state.ComponentData.componentData)


  return (
    <>

  

      <AnimatePresence>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/more' element={<More />} />
          <Route path='/category' element={<Category />} />
          <Route path='/anket' element={<Anket />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

