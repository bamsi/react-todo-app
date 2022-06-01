import React from "react"
import ReactDOM from 'react-dom/client';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"

import TodoContainer from "./components/TodoContainer";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
import Navbar from "./components/Navbar";

import './App.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 

root.render(<React.StrictMode><BrowserRouter>
<Navbar />

<Routes>
        <Route path="/" element={<TodoContainer />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotMatch />}></Route>
      </Routes>
</BrowserRouter></React.StrictMode>);

