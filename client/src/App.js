import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/User/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
