import {
  useState,
  useEffect
} from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AdminPage from "./pages/AdminPage";

import { drinks } from "./data/data";

function App() {

  // ================= LOGIN =================
  const [loggedIn, setLoggedIn] =
    useState(
      localStorage.getItem(
        "currentUser"
      )
        ? true
        : false
    );

  // ================= DATA GLOBAL =================
  const [drinksData, setDrinksData] =
    useState([]);

  // ================= TOAST =================
  const [toast, setToast] =
    useState("");

  // ================= LOAD DATA =================
  useEffect(() => {

    const saved =
      localStorage.getItem(
        "drinksData"
      );

    if (saved) {

      setDrinksData(
        JSON.parse(saved)
      );

    } else {

      setDrinksData(drinks);

      localStorage.setItem(
        "drinksData",
        JSON.stringify(drinks)
      );

    }

  }, []);

  // ================= LOGOUT =================
  const handleLogout = () => {

    localStorage.removeItem(
      "currentUser"
    );

    setLoggedIn(false);

  };

  return (

    <>

      {/* NAVBAR */}
      <Navbar
        loggedIn={loggedIn}
        onLogout={handleLogout}
      />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              drinksData={
                drinksData
              }
            />
          }
        />

        {/* DETAIL */}
        <Route
          path="/detail/:nama"
          element={
            <Detail
              drinksData={
                drinksData
              }
            />
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminPage
              drinksData={
                drinksData
              }
              setDrinksData={
                setDrinksData
              }
              setToast={setToast}
            />
          }
        />

      </Routes>

      {/* TOAST */}
      {toast && (

        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background:
              "#111827",
            color: "#fff",
            padding:
              "14px 22px",
            borderRadius: "12px",
            zIndex: 9999,
            fontWeight: "700"
          }}
        >
          {toast}
        </div>

      )}

    </>

  );

}

export default App;