import React from 'react'
import Header from './header'
import Footer from './footer'
import SideBar from './sidebar'
import Cart from '../components/cart'

const Layout = ({ children }) => {
  return (
    <div className="grid-container">
      <Header />
      <main>
        <div className="content">
          <div className="main">
            {children}
          </div>
          <SideBar>
            <Cart />
          </SideBar>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
