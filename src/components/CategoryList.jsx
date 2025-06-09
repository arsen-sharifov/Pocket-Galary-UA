import { Link } from "react-router-dom";

export default function CategoryList({ items }) {
  return (
    <div className="categories-grid">
      {items.map(({ id, title, img }) => (
        <Link key={id} to={`/section/${id}`} className="category-card">
          <img src={img} alt={title} />
          <h2>{title}</h2>
        </Link>
      ))}
    </div>
  );
}
