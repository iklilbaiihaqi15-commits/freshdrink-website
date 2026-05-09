import { useState } from "react";
import Stars from "./Stars";

function DetailPage({
  drink,
  setPage,
  onLoginClick,
  loggedIn,
  setToast
}) {

  const [userRating, setUserRating] =
    useState(0);

  const [hover, setHover] =
    useState(0);

  // HANDLE RATING
  const handleStar = (n) => {

    // BELUM LOGIN
    if (!loggedIn) {
      onLoginClick();
      return;
    }

    // SIMPAN RATING
    setUserRating(n);

    // TOAST
    setToast("⭐ Rating berhasil!");
  };

  return (
    <div className="detail-page">

      {/* HERO */}
      <div className="detail-hero">

        <div className="detail-img-wrap">
          <img
            src={drink.img}
            alt={drink.name}
          />
        </div>

        <div className="detail-info">

          {/* TOMBOL KEMBALI */}
          <button
            className="btn-back"
            onClick={() => setPage("home")}
          >
            ← Kembali
          </button>

          <h2 style={{ marginTop: 16 }}>
            {drink.name}
          </h2>

          <div className="detail-stars">
            <Stars count={drink.rating} />
          </div>

          <p
            style={{
              opacity: 0.85,
              fontSize: 14,
              fontWeight: 600,
              maxWidth: 360,
              lineHeight: 1.7,
            }}
          >
            Minuman segar pilihan yang
            mudah dibuat di rumah.
            Cocok untuk menemani
            hari-harimu yang penuh
            semangat!
          </p>

          {/* RATING */}
          <div style={{ marginTop: 16 }}>

            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                opacity: 0.8,
                marginBottom: 6,
              }}
            >
              {loggedIn
                ? "Beri rating kamu:"
                : "Login untuk memberi rating:"}
            </p>

            <div className="rating-row">

              {[1, 2, 3, 4, 5].map((n) => (

                <button
                  key={n}
                  className="star-btn"
                  onClick={() =>
                    handleStar(n)
                  }
                  onMouseEnter={() =>
                    loggedIn &&
                    setHover(n)
                  }
                  onMouseLeave={() =>
                    setHover(0)
                  }
                >
                  {n <=
                  (hover || userRating)
                    ? "⭐"
                    : "☆"}
                </button>

              ))}

              {userRating > 0 && (
                <span
                  style={{
                    color: "#FFD166",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  ({userRating}/5)
                </span>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* KONTEN */}
      <div className="detail-content">

        {/* ALAT */}
        <div className="detail-box">

          <div className="box-title teal">
            Alat :
          </div>

          <ul className="detail-list">
            {drink.alat.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

        </div>

        {/* BAHAN */}
        <div className="detail-box">

          <div className="box-title">
            Bahan :
          </div>

          <ul className="detail-list">
            {drink.bahan.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

        </div>

        {/* CARA MEMBUAT */}
        <div className="detail-box full">

          <div className="box-title">
            Cara Membuat :
          </div>

          {drink.cara.map((step, i) => (

            <div
              className="step-item"
              key={i}
            >

              <div className="step-num">
                {i + 1}
              </div>

              <div className="step-text">
                {step}
              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default DetailPage;