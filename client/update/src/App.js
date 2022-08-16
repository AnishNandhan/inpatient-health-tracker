import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Form from "./components/Form";
// import FormDisabled from "./components/FormDisabled";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PatientList from "./pages/PatientList";
import UpdatePatient from "./pages/UpdatePatient";
import ViewPatient from "./pages/ViewPatient";

import { UserContext } from "./contexts/UserContext";

function App() {

  const user = "doc";

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='patients' element={<PatientList />} />

              <Route path='patients/:id' element={
                user === "nurse" ? 
                <UpdatePatient /> : 
                <ViewPatient />} />
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
