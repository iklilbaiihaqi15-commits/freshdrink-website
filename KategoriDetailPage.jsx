import { drinks } from "../data/data";
import Stars from "./Stars";

function KategoriDetailPage({
  selectedCategory,
  setSelectedDrink,
  setPage,
}) {
  const filteredDrinks = drinks.filter(
    (drink) => drink.category === selectedCategory
  );

  const handleClick = (drink) => {
    setSelectedDrink(drink);
    setPage("detail");
  };

  return (
    <>
      <div className="kategori-hero">
        <button
          className="btn-back"
          onClick={() => setPage("kategori")}
        >
          ← Kembali
        </button>

        <h1>{selectedCategory}</h1>
      </div>

      <div className="section">
        <div className="cards-grid">
          {filteredDrinks.map((drink) => (
            <div
              className="drink-card"
              key={drink.id}
              onClick={() => handleClick(drink)}
            >
              <img src={drink.img} alt={drink.name} />

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

export default KategoriDetailPage;