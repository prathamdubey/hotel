import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from "./Admin/views/Dashboard";
import Rooms from "./Admin/views/Rooms";
import Edit_booking from "./Admin/views/Edit_booking";
import Create_booking from "./Admin/views/Create_booking";
import Sidebar from './Admin/components/Sidebar';
import AdminNavbar from './Admin/components/AdminNavbar';


function App() {


  return (
    <BrowserRouter>

      <Sidebar />
      <div className="relative lg:ml-60">
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/Room/:name" element={<Rooms />} />
          <Route path="/edit/:id" element={<Edit_booking />} />
          <Route path="/create" element={<Create_booking />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
