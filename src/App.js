// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './features/Navbar';
import NewsView from './features/NewsView';
import Footer from './features/Footer';
import ResponsiveAI from './features/ResponsiveAI';
import SignUp from './features/SignUp';
import SignIn from './features/SignIn';
import TalkWithAI from './features/TalkWithAI';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="relative">
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
              path="/talkwithai"
              element={
                <PrivateRoute
                  element={
                    <React.Fragment>
                      <Navbar />
                      <TalkWithAI />
                      <ResponsiveAI />
                      <Footer />
                    </React.Fragment>
                  }
                />
              }
            />
            <Route
              path="/newsview"
              element={
                <PrivateRoute
                  element={
                    <React.Fragment>
                      <Navbar />
                      <NewsView />
                      <Footer />
                    </React.Fragment>
                  }
                />
              }
            />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
