import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home2 from "./pages/Home2";
import Footer2 from "./components/Footer2";
import CitizenDirectory from "./services/CitizenDirectory";
import AdminDirectory from "./services/AdminDirectory";
import Footer3 from "./components/Footer3";
import Project from "./pages/project";
import AdminProjects from "./services/AdminProjects";
import ApplyCertificate from "./services/ApplyCertificate";
import ViewCertificates from "./services/ViewCertificates";
import AdminCertificate from "./services/AdminCertificate";
import TaxPayment from "./services/TaxPayment";
import UserPayment from "./services/UserPayment";
import AdminPayments from "./services/AdminPayments";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/AdminPanel" element={<AdminPanel />}></Route>
        <Route path="/Navbar" element={<Navbar></Navbar>}></Route>
        <Route path="/Footer" element={<Footer></Footer>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/Home2" element={<Home2></Home2>}></Route>
        <Route path="/Footer2" element={<Footer2></Footer2>}></Route>
        <Route path="/CitizenDirectory" element={<CitizenDirectory />} />
        <Route path="/AdminDirectory" element={<AdminDirectory />} />
        <Route path="/Footer3" element={<Footer3></Footer3>}></Route>
        <Route path="/Project" element={<Project></Project>}></Route>
        <Route path="/adminproject" element={<AdminProjects></AdminProjects>} />
        <Route path="/ApplyCertificate" element={<ApplyCertificate />} />
        <Route path="/ViewCertificate" element={<ViewCertificates />} />
        <Route path="/AdminCertificate" element={<AdminCertificate />} />
        <Route path="/taxpayment" element={<TaxPayment></TaxPayment>} />
        <Route path="/userpayment" element={<UserPayment></UserPayment>} />
        <Route path="/adminpayment" element={<AdminPayments></AdminPayments>} />
      </Routes>
    </>
  );
}

export default App;
