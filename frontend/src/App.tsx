import React from "react";
import "./App.css";
import Login from "./pages/Login";
import { Bounce, ToastContainer } from "react-toastify";
const App: React.FC = () => {
  return (
    <div id="app">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Login />
    </div>
  );
};

export default App;
