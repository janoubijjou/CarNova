import AccueilLanding from "./pages/Home";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Dashboard";
import Users from "./components/Users";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import UserProfilePage from "./components/UsersProfile";
import Error from "./components/Error";
import Afficher from "./components/Afficher";
import Modifier from "./components/Modifier";
import SignUp from "./components/SignUp";
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/accueil" element={<AccueilLanding />} />


          <Route path="/" element={<AccueilLanding />}
          />

          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/users"
            element={<Users />}
          />
          <Route path="/afficher/:id" element={<Afficher />} />
          <Route path="/modifier/:id" element={<Modifier />} />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/profile"
            element={<UserProfilePage userData={loggedInUser} />}
          />
          <Route
            path="/*"
            element={<Error />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
