import React from 'react';
import About from './About';
import Newly from './Newly';
import Item from './Item';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

export default function Main() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Newly />
      <Item />
      <Footer />
    </>
  );
}
