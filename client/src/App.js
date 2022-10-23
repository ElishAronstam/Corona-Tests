import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/addPatient" element={<AddPatient />} />
      </Routes>
    </>
  );
}

export default App;
