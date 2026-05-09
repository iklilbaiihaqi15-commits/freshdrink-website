import { categories } from "../data/data";

function KategoriPage({ setPage, setSelectedCategory }) {
  const handleClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setPage("kategori-detail");
  };

  return (
    <>
      <div className="kategori-hero">
        <h1>KATEGORI MINUMAN</h1>
      </div>

      <div className="kategori-grid">
        {categories.map((cat, index) => (
          <div className="kat-card" key={index}>
            <img src={cat.img} alt={cat.name} className="kat-img" />

            <div className="kat-body">
              <div className="kat-name">{cat.name}</div>

              <div className="kat-desc">
                {cat.desc}
              </div>

              <button
                className="btn-selengkapnya"
                onClick={() => handleClick(cat.name)}
              >
                Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default KategoriPage;