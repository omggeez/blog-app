import { useState } from "react";
import Router from "./components/Router";
import { getAuth } from "firebase/auth";
import { app } from "configs/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const auth = getAuth(app);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!auth.currentUser);

  return (
    <>
      <ToastContainer />
      <Router isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
