export default function Card({ title, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>⭐⭐⭐⭐⭐</p>
    </div>
  );
}