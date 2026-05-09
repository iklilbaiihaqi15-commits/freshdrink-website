import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import KategoriPage from "./components/KategoriPage";
import KategoriDetailPage from "./components/KategoriDetailPage";
import AboutPage from "./components/AboutPage";
import LoginModal from "./components/LoginModal";
import Toast from "./components/Toast";
import AdminPage from "./components/AdminPage";

import {
  drinks as initialDrinks
} from "./data/data";

function App() {

  // ================= PAGE =================
  const [page, setPage] =
    useState("home");

  // ================= DETAIL =================
  const [
    selectedDrink,
    setSelectedDrink
  ] = useState(null);

  // ================= KATEGORI =================
  const [
    selectedCategory,
    setSelectedCategory
  ] = useState("");

  // ================= LOGIN MODAL =================
  const [
    showLogin,
    setShowLogin
  ] = useState(false);

  // ================= LOGIN STATUS =================
  const [
    loggedIn,
    setLoggedIn
  ] = useState(false);

  // ================= ADMIN STATUS =================
  const [
    isAdmin,
    setIsAdmin
  ] = useState(false);

  // ================= TOAST =================
  const [
    toast,
    setToast
  ] = useState(null);

  // ================= DATA MINUMAN =================
  const [
    drinks,
    setDrinks
  ] = useState(initialDrinks);

  // ================= LOAD DATA =================
  useEffect(() => {

    // AMBIL DATA DARI LOCAL STORAGE
    const savedDrinks =
      JSON.parse(
        localStorage.getItem(
          "drinksData"
        )
      );

    // JIKA ADA DATA
    if (
      savedDrinks &&
      savedDrinks.length > 0
    ) {

      setDrinks(savedDrinks);

    } else {

      // PAKAI DATA AWAL
      setDrinks(initialDrinks);

      localStorage.setItem(
        "drinksData",
        JSON.stringify(
          initialDrinks
        )
      );

    }

    // ================= LOGIN =================
    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    if (currentUser) {

      setLoggedIn(true);

      // CEK ADMIN
      if (
        currentUser.username ===
        "admin"
      ) {

        setIsAdmin(true);

        setPage("admin");

      }

    }

  }, []);

  // ================= SIMPAN DATA =================
  useEffect(() => {

    localStorage.setItem(
      "drinksData",
      JSON.stringify(drinks)
    );

  }, [drinks]);

  // ================= SEARCH =================
  const handleSearch = (
    drink
  ) => {

    setSelectedDrink(drink);

    setPage("detail");

  };

  // ================= LOGIN SUCCESS =================
  const handleLoginSuccess = (
    message
  ) => {

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    setShowLogin(false);

    setLoggedIn(true);

    // ADMIN LOGIN
    if (
      currentUser?.username ===
      "admin"
    ) {

      setIsAdmin(true);

      setPage("admin");

    } else {

      setIsAdmin(false);

    }

    setToast(message);

  };

  // ================= LOGOUT =================
  const handleLogout = () => {

    localStorage.removeItem(
      "currentUser"
    );

    setLoggedIn(false);

    setIsAdmin(false);

    setPage("home");

    setToast(
      "✅ Logout berhasil!"
    );

  };

  return (
    <>

      {/* ================= NAVBAR ================= */}
      <Navbar
        page={page}
        setPage={setPage}
        onSearch={handleSearch}
        loggedIn={loggedIn}
        onLoginClick={() =>
          setShowLogin(true)
        }
        onAdminLoginClick={() =>
          setShowLogin(true)
        }
        onLogout={handleLogout}
        isAdmin={isAdmin}
      />

      {/* ================= MAIN ================= */}
      <main>

        {/* HOME */}
        {page === "home" && (

          <HomePage
            drinks={drinks}
            setPage={setPage}
            setSelectedDrink={
              setSelectedDrink
            }
            onLoginClick={() =>
              setShowLogin(true)
            }
            loggedIn={loggedIn}
          />

        )}

        {/* DETAIL */}
        {page === "detail" &&
          selectedDrink && (

            <DetailPage
              drink={selectedDrink}
              setPage={setPage}
              onLoginClick={() =>
                setShowLogin(true)
              }
              loggedIn={loggedIn}
              setToast={setToast}
            />

          )}

        {/* KATEGORI */}
        {page === "kategori" && (

          <KategoriPage
            setPage={setPage}
            setSelectedCategory={
              setSelectedCategory
            }
          />

        )}

        {/* KATEGORI DETAIL */}
        {page ===
          "kategori-detail" && (

          <KategoriDetailPage
            selectedCategory={
              selectedCategory
            }
            setSelectedDrink={
              setSelectedDrink
            }
            setPage={setPage}
          />

        )}

        {/* ABOUT */}
        {page === "about" && (
          <AboutPage />
        )}

        {/* ADMIN */}
        {page === "admin" &&
          isAdmin && (

            <AdminPage
              drinksData={drinks}
              setDrinksData={
                setDrinks
              }
              setToast={setToast}
            />

          )}

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        &copy; 2026{" "}

        <span>
          FreshDrink
        </span>

        {" "}— Iklil Baihaqi ·
        IX RPL 1 · Project Akhir

      </footer>

      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (

        <LoginModal
          onClose={() =>
            setShowLogin(false)
          }
          onSuccess={
            handleLoginSuccess
          }
        />

      )}

      {/* ================= TOAST ================= */}
      {toast && (

        <Toast
          msg={toast}
          onDone={() =>
            setToast(null)
          }
        />

      )}

    </>

  );
}

export default App;