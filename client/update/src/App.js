import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import FormDisabled from "./components/FormDisabled";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PatientList from "./pages/PatientList";

function App() {

  const user = "nurse";

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='patients' element={<PatientList />} />
            <Route path='patients/:id' element={user === "nurse" ? <Form /> : <FormDisabled />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
