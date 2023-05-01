import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./pages/Main";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Layout />}>
        <Route path="/admin/main" element={<Main />} />
        <Route path="/admin/page-one" element={<PageOne />} />
        <Route path="/admin/page-two" element={<PageTwo />} />
      </Route>
    </Routes>
  );
}

export default App;
