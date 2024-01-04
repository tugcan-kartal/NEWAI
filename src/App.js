import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./features/Navbar";
import NewsView from "./features/NewsView";
import Footer from "./features/Footer";
import ResponsiveAI from "./features/ResponsiveAI";
import SignUp from "./features/SignUp";
import SignIn from './features/SignIn';
import TalkWithAI from './features/TalkWithAI';

function App() {
  return (
    <div className="relative">
      <Router>

        <Routes>
          <Route path="/" exact element={<SignIn />}/>
          <Route path="/homepage" exact element={<React.Fragment><Navbar /> <NewsView /> <ResponsiveAI /> <Footer /> </React.Fragment>}/>
          <Route path="/talkwithai" exact element={<React.Fragment><Navbar /> <TalkWithAI /> <ResponsiveAI /> <Footer /> </React.Fragment>}/>
          <Route path="/SignUp" exact element={<SignUp />}/>
          <Route path="/SignIn" exact element={<SignIn />}/>
        </Routes>   
        
      </Router>   
    </div>
  );
}

export default App;
