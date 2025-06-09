import CategoryList from "../components/CategoryList";
import img1 from "../assets/image-1.png";

const sections = [
  { id: "war", title: "Арт у часи війни", img: img1 },
  {
    id: "contemporary",
    title: "Сучасне мистецтво",
    img: img1,
  },
  { id: "digital", title: "Digital Art", img: img1 },
  { id: "classic", title: "Класичне мистецтво", img: img1 },
];

export default function Home() {
  return (
    <div className="home">
      <h1>Explore Ukraine through Art</h1>
      <CategoryList items={sections} />
    </div>
  );
}
