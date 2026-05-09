import { useParams } from "react-router-dom";

export default function Detail() {
  const { nama } = useParams();

  const data = {
    blewah: {
      title: "Es Blewah Jeruk Nipis",
      bahan: ["Blewah", "Jeruk nipis", "Air", "Es batu"],
    },
    timun: {
      title: "Es Timun Nipis Madu",
      bahan: ["Timun", "Madu", "Air", "Es batu"],
    },
  };

  const minuman = data[nama];

  return (
    <div style={{ padding: "20px" }}>
      <h2>{minuman?.title}</h2>

      <h3>Bahan:</h3>
      <ul>
        {minuman?.bahan.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}