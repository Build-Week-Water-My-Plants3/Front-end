import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import WelcomePage from "./components/WelcomePage"
function App() {

  const App = styled.div
  `
   display: flex;
   flex-direction: column;
   align-items: space-between;
 
   min-height: 100vh;
   max-width: 1200px;
   margin: 0 auto; 
  `


  return (
    <App>

     <Header />
        
     <WelcomePage username="Tom Sawyer"/>

    <Footer />

    </App>
  );
}

export default App;
