import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import 'bootstrap/dist/css/bootstrap.min.css';
import WebSocketConnection from "./components/misc/WebSocketConnection";
import "./App.css";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chabot";
import Learning from "./components/learning/Learning";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Setup from "./components/initial_setup/Setup";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div className="d-flex">
      <WebSocketConnection/>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/setup" element={<Setup/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/education" element={<Learning />}/>
          <Route path="/analytics" element={<Analytics />}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default App;