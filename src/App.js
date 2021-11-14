import react, { useState } from "react";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfoilioSelected] = useState(false);
  const [headerSelected, setHeaderSelected] = useState(false);
  return (
    <div className= 'mainContainer'>
      
      <Header
        contactSelected = {contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected= {portfolioSelected}
        setPortfoilioSelected = {setPortfoilioSelected}
        headerSelected = {headerSelected}
        setHeaderSelected = {setHeaderSelected}
      ></Header>
      <main className = "main-container">
        {
          ! contactSelected && ! portfolioSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <></>
          )
        }
        { !contactSelected ? (
          <>
            
            
          </>
        ): (
          <Contact></Contact>
        )}
        {
          !portfolioSelected ? (
            <>

            </>
          ) : (
            <Portfolio></Portfolio>
          )
        }
        
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
