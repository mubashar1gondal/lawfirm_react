import React, { Component } from 'react';
import './App.css';
// two function components
import { Header } from './components/Header';
import { Main } from './components/Main';
// one class component
import Footer from './components/Footer';



export const App = () => {

  const userSearch = (e) => {
    e.preventDefault();
    alert(e.body)
  }

    return (
      // 
  <div>  
        <header>
          <Header user={userSearch} />
        </header>

        <main>
        <Main />
        </main>

        <footer>
         <Footer />
        </footer>

</div>
    )
    
}
