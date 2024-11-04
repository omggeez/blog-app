import { useEffect, useState } from "react";
import Router from "./components/Router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "configs/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader";

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setTimeout(() => setInit(true), 1000);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isLoggedIn={isLoggedIn} /> : <Loader />}
    </>
  );
}

export default App;
