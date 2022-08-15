import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./Form";
import PatientDetails from "./pages/PatientDetails";
import PatientList from "./pages/PatientList";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path='/patients'
              element={<PatientList />}
            />

            <Route 
              path='patients/:id'
              element={<PatientDetails />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
