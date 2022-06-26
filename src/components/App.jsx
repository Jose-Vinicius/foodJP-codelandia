import React from 'react';

import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

import "../css/style.css"

export default function App(){
  return(
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}