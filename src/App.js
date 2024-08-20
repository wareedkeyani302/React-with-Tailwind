import React from 'react'
import Header from './Component/Header';
import Home from './Pages/Home';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className='bg-slate-950'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
