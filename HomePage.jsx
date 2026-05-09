import { drinks } from "../data/data";
import Stars from "./Stars";

function HomePage({ setPage, setSelectedDrink }) {
  const handleCardClick = (drink) => {
    setSelectedDrink(drink);
    setPage("detail");
  };

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Temukan Resep
            <br />
            <span>Minuman Segar</span>
            <br />
            Favoritmu!
          </h1>

          <p>
            Dari smoothie & juices, coffee & tea, mocktails,
            hingga milkshakes semua resepnya ada di sini.
          </p>
        </div>
      </div>

      {/* REKOMENDASI */}
      <div className="section">
        <div className="section-title">REKOMENDASI</div>

        <div className="cards-grid">
          {drinks
            .filter((drink) => drink.rating === 5)
            .map((drink) => (
              <div
                className="drink-card"
                key={drink.id}
                onClick={() => handleCardClick(drink)}
              >
                <img
                  src={drink.img}
                  alt={drink.name}
                  loading="lazy"
                />

                <div className="card-body">
                  <div className="card-name">
                    {drink.name}
                  </div>

                  <div className="card-stars">
                    <Stars count={drink.rating} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;