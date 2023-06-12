
import './App.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header, Footer } from './components/Common';
import ErrorPage from './Pages/NotFound';
import ContactPage from './Pages/Contact';
import HomePage from './Pages/Home';
import FilterModal from './components/FilterModal';
import "./App.css"

function App() {



  return (
    <div className="App">
      <Header />
      <br /> <br /> <br /> <br /> <br />
     
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />
         
        </Routes>

      </BrowserRouter>


      {/* <Footer /> */}
    </div>
  )
}

export default App
