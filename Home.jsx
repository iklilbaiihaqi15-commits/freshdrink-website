import Card from "../components/Card";
import Navbar from "../components/Navbar";

import {
  useNavigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import {
  drinks as defaultDrinks
} from "../data/data";

export default function Home() {

  const navigate = useNavigate();

  // ================= STATE =================
  const [drinksData, setDrinksData] =
    useState([]);

  // ================= LOAD DATA =================
  const loadDrinksData = () => {

    const savedData =
      JSON.parse(
        localStorage.getItem(
          "drinksData"
        )
      );

    if (savedData) {

      setDrinksData(savedData);

    } else {

      setDrinksData(defaultDrinks);

      localStorage.setItem(
        "drinksData",
        JSON.stringify(defaultDrinks)
      );

    }

  };

  // ================= PERTAMA KALI =================
  useEffect(() => {

    loadDrinksData();

  }, []);

  // ================= AUTO UPDATE =================
  useEffect(() => {

    const interval =
      setInterval(() => {

        loadDrinksData();

      }, 500);

    return () =>
      clearInterval(interval);

  }, []);

  // ================= FILTER REKOMENDASI =================
  const rekomendasi =
    drinksData.filter(
      (drink) =>
        Number(drink.rating) === 5
    );

  return (

    <>

      {/* NAVBAR */}
      <Navbar
        page="home"
        setPage={(p) => {

          if (p === "home")
            navigate("/");

          if (p === "kategori")
            navigate("/kategori");

          if (p === "about")
            navigate("/about");

          if (p === "admin")
            navigate("/admin");

        }}
        loggedIn={true}
        isAdmin={true}
        onLogout={() =>
          alert("Logout berhasil")
        }
      />

      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#14B8A6,#0F766E)",
          padding: "80px 60px",
          borderRadius:
            "0 0 30px 30px",
          color: "#fff",
          marginBottom: "50px"
        }}
      >

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "20px"
          }}
        >
          Temukan Resep
          <br />
          Minuman Segar
          <br />
          Favoritmu!
        </h1>

        <p
          style={{
            fontSize: "20px",
            opacity: 0.9,
            maxWidth: "600px"
          }}
        >
          Dari smoothie & juices,
          coffee & tea,
          mocktails, hingga
          milkshakes semua
          resepnya ada di sini.
        </p>

      </div>

      {/* JUDUL */}
      <h2 className="judul">
        REKOMENDASI
      </h2>

      {/* CARD */}
      <div className="container">

        {rekomendasi.length === 0 ? (

          <p
            style={{
              width: "100%",
              textAlign: "center",
              color: "#6B7280",
              fontSize: "18px"
            }}
          >
            Belum ada rekomendasi
          </p>

        ) : (

          rekomendasi.map((drink) => (

            <Card
              key={drink.id}
              title={drink.name}
              image={drink.img}
              onClick={() =>
                navigate(
                  `/detail/${drink.id}`
                )
              }
            />

          ))

        )}

      </div>

    </>

  );

}