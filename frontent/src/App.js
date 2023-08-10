import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import QuizPage from "./pages/quiz";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/quiz" element={<QuizPage />} />

      </Routes>
    </BrowserRouter>
  );
}