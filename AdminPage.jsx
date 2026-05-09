import { useState } from "react";

function AdminPage({
  drinksData = [],
  setDrinksData,
  setToast
}) {

  // ================= FORM STATE =================
  const [showForm, setShowForm] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      category: "",
      img: "",
      rating: 5
    });

  // ================= DELETE MODAL =================
  const [
    showDeleteModal,
    setShowDeleteModal
  ] = useState(false);

  const [deleteId, setDeleteId] =
    useState(null);

  // ================= INPUT CHANGE =================
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  };

  // ================= TAMBAH =================
  const handleAddClick = () => {

    setEditId(null);

    setFormData({
      name: "",
      category: "",
      img: "",
      rating: 5
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  // ================= SIMPAN =================
  const handleSave = () => {

    if (
      !formData.name ||
      !formData.category ||
      !formData.img
    ) {

      setToast(
        "⚠️ Semua data wajib diisi!"
      );

      return;

    }

    // ================= EDIT =================
    if (editId) {

      const updated =
        drinksData.map((d) =>
          d.id === editId
            ? {
                ...d,
                ...formData,
                rating:
                  Number(
                    formData.rating
                  )
              }
            : d
        );

      setDrinksData(updated);

      localStorage.setItem(
        "drinksData",
        JSON.stringify(updated)
      );

    }

    // ================= TAMBAH =================
    else {

      const newDrink = {
        id: Date.now(),
        ...formData,
        rating:
          Number(formData.rating)
      };

      const updated = [
        ...drinksData,
        newDrink
      ];

      setDrinksData(updated);

      localStorage.setItem(
        "drinksData",
        JSON.stringify(updated)
      );

    }

    setToast(
      "✅ Berhasil disimpan!"
    );

    setShowForm(false);

  };

  // ================= EDIT =================
  const handleEdit = (drink) => {

    setEditId(drink.id);

    setFormData({
      name: drink.name,
      category:
        drink.category,
      img: drink.img,
      rating:
        drink.rating || 5
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  // ================= BATAL =================
  const handleCancel = () => {

    setShowForm(false);

    setToast(
      "❌ Batal disimpan!"
    );

  };

  // ================= HAPUS =================
  const handleDelete = (id) => {

    setDeleteId(id);

    setShowDeleteModal(true);

  };

  // ================= KONFIRMASI HAPUS =================
  const confirmDelete = () => {

    const updated =
      drinksData.filter(
        (d) => d.id !== deleteId
      );

    setDrinksData(updated);

    localStorage.setItem(
      "drinksData",
      JSON.stringify(updated)
    );

    setToast(
      "✅ Berhasil dihapus!"
    );

    setShowDeleteModal(false);

  };

  return (

    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background:
          "#F3F4F6"
      }}
    >

      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#111827,#000000)",
          borderRadius: "30px",
          padding: "60px 40px",
          color: "#fff",
          marginBottom: "30px",
          textAlign: "center",
          boxShadow:
            "0 10px 25px rgba(0,0,0,.25)"
        }}
      >

        <h1
          style={{
            margin: 0,
            fontSize: "48px",
            fontWeight: "800",
            letterSpacing: "2px"
          }}
        >
          ADMIN PANEL
        </h1>

      </div>

      {/* TOP */}
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "25px"
        }}
      >

        <h2
          style={{
            color: "#111827",
            fontSize: "34px",
            margin: 0
          }}
        >
          Kelola Resep
        </h2>

        <button
          onClick={handleAddClick}
          style={{
            background: "#10B981",
            border: "none",
            color: "#fff",
            padding:
              "14px 26px",
            borderRadius: "14px",
            fontWeight: "700",
            cursor: "pointer",
            fontSize: "15px"
          }}
        >
          + Tambah Resep
        </button>

      </div>

      {/* FORM */}
      {showForm && (

        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "24px",
            marginBottom: "30px",
            boxShadow:
              "0 8px 20px rgba(0,0,0,.08)"
          }}
        >

          <h3
            style={{
              marginTop: 0,
              marginBottom: "25px"
            }}
          >
            {editId
              ? "Edit Resep"
              : "Tambah Resep"}
          </h3>

          <div
            style={{
              display: "grid",
              gap: "20px"
            }}
          >

            {/* NAMA */}
            <div>

              <label
                style={labelStyle}
              >
                Nama Minuman
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
              />

            </div>

            {/* KATEGORI */}
            <div>

              <label
                style={labelStyle}
              >
                Kategori
              </label>

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={inputStyle}
              />

            </div>

            {/* GAMBAR */}
            <div>

              <label
                style={labelStyle}
              >
                Link Gambar
              </label>

              <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
                style={inputStyle}
              />

            </div>

            {/* RATING */}
            <div>

              <label
                style={labelStyle}
              >
                Rating
              </label>

              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                style={inputStyle}
              />

            </div>

            {/* BUTTON */}
            <div
              style={{
                display: "flex",
                gap: "12px"
              }}
            >

              <button
                onClick={handleSave}
                style={saveBtn}
              >
                Simpan
              </button>

              <button
                onClick={handleCancel}
                style={cancelBtn}
              >
                Batal
              </button>

            </div>

          </div>

        </div>

      )}

      {/* TABLE */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow:
            "0 8px 20px rgba(0,0,0,.08)"
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse:
              "collapse"
          }}
        >

          <thead
            style={{
              background: "#111827",
              color: "#fff"
            }}
          >

            <tr>

              <th style={thStyle}>
                Foto
              </th>

              <th style={thStyle}>
                Nama
              </th>

              <th style={thStyle}>
                Kategori
              </th>

              <th style={thStyle}>
                Rating
              </th>

              <th style={thStyle}>
                Aksi
              </th>

            </tr>

          </thead>

          <tbody>

            {drinksData.map((d) => (

              <tr
                key={d.id}
                style={{
                  borderBottom:
                    "1px solid #E5E7EB"
                }}
              >

                <td style={tdStyle}>

                  <img
                    src={d.img}
                    alt={d.name}
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "18px"
                    }}
                  />

                </td>

                <td
                  style={{
                    ...tdStyle,
                    fontWeight: "700"
                  }}
                >
                  {d.name}
                </td>

                <td style={tdStyle}>
                  {d.category}
                </td>

                <td
                  style={{
                    ...tdStyle,
                    color: "#F59E0B"
                  }}
                >
                  {"⭐".repeat(
                    d.rating || 5
                  )}
                </td>

                <td style={tdStyle}>

                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "center",
                      gap: "10px"
                    }}
                  >

                    <button
                      onClick={() =>
                        handleEdit(d)
                      }
                      style={editBtn}
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          d.id
                        )
                      }
                      style={deleteBtn}
                    >
                      🗑️ Hapus
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* MODAL DELETE */}
      {showDeleteModal && (

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "rgba(0,0,0,.6)",
            display: "flex",
            justifyContent:
              "center",
            alignItems: "center",
            zIndex: 999
          }}
        >

          <div
            style={{
              background: "#fff",
              width: "420px",
              borderRadius: "28px",
              padding: "35px",
              textAlign: "center",
              boxShadow:
                "0 15px 40px rgba(0,0,0,.25)"
            }}
          >

            <div
              style={{
                width: "90px",
                height: "90px",
                margin:
                  "0 auto 20px",
                borderRadius: "50%",
                background:
                  "#FEE2E2",
                display: "flex",
                justifyContent:
                  "center",
                alignItems:
                  "center",
                fontSize: "42px"
              }}
            >
              🗑️
            </div>

            <h2
              style={{
                margin: 0,
                color: "#111827"
              }}
            >
              Hapus Resep?
            </h2>

            <p
              style={{
                marginTop: "12px",
                color: "#6B7280",
                lineHeight: "1.7"
              }}
            >
              Data resep yang sudah
              dihapus tidak dapat
              dikembalikan lagi.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "28px"
              }}
            >

              <button
                onClick={() => {

                  setShowDeleteModal(
                    false
                  );

                  setToast(
                    "❌ Batal dihapus!"
                  );

                }}
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius:
                    "14px",
                  border: "none",
                  background:
                    "#E5E7EB",
                  fontWeight:
                    "700",
                  cursor:
                    "pointer"
                }}
              >
                Batal
              </button>

              <button
                onClick={
                  confirmDelete
                }
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius:
                    "14px",
                  border: "none",
                  background:
                    "#EF4444",
                  color: "#fff",
                  fontWeight:
                    "700",
                  cursor:
                    "pointer"
                }}
              >
                Hapus
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

// ================= STYLE =================
const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "700",
  color: "#111827",
  fontSize: "14px"
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #D1D5DB",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box"
};

const saveBtn = {
  background: "#10B981",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer"
};

const cancelBtn = {
  background: "#E5E7EB",
  color: "#111827",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer"
};

const editBtn = {
  background: "#10B981",
  color: "#fff",
  border: "none",
  padding: "10px 16px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer"
};

const deleteBtn = {
  background: "#EF4444",
  color: "#fff",
  border: "none",
  padding: "10px 16px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer"
};

const thStyle = {
  padding: "18px"
};

const tdStyle = {
  padding: "18px",
  textAlign: "center"
};

export default AdminPage;