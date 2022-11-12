import "./App.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviesHome from "./pages/MoviesHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MoviesDetails from "./pages/MoviesDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkSession } from "./redux/auth/auth.actions";
import AddMovie from "./pages/AddMovie";
/* import AuthRoute from './components/AuthRoute';
 */

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);
  return (
    <div className="App">
      HELLO HELL
      <Navbar />
      <Routes>
        <Route path="" element={<MoviesHome />} />
        <Route path="moviesdetails" element={<MoviesDetails />} />
        <Route path="addmovie" element={<AddMovie />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
