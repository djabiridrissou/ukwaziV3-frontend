import { Route, Routes } from "react-router-dom";
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Dashboard,
  Layout,
  Login,
  ForgotPassword,
  Prediction,
} from "./routes/routes";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="prediction" element={<Prediction />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
