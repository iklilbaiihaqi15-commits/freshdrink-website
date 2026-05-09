function AboutPage() {
  const features = [
    { icon: "🥤", label: "50+ Resep" },
    { icon: "⭐", label: "Rating System" },
    { icon: "🔍", label: "Fitur Pencarian" },
  ];

  return (
    <>
      <div className="about-hero">
        <h1>ABOUT</h1>
      </div>
      <div className="about-body">
        <div className="about-badge">FreshDrink</div>
        <p>
          Mulai petualangan rasa kamu di sini! FreshDrink adalah destinasi utama
          bagi kamu yang mencari kesegaran alami di tengah kesibukan. Kami
          menyajikan berbagai resep minuman pilihan yang tidak hanya melepas
          dahaga, tapi juga memberikan inspirasi hidup sehat setiap hari.
          <br />
          <br />
          Karena setiap tegukan punya cerita.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          {features.map((f) => (
            <div
              key={f.label}
              style={{
                background: "var(--white)",
                borderRadius: 16,
                padding: "20px 28px",
                textAlign: "center",
                boxShadow: "0 4px 18px rgba(0,0,0,.08)",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>{f.icon}</div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 14,
                  color: "var(--dark)",
                }}
              >
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutPage;
