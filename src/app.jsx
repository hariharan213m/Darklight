import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Courses from "./Components/Courses";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Levels from "./Components/Levels";
import Login from "./Components/Login";
import Register from "./Components/Register";

export function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/courses/:id" element={<Levels />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
