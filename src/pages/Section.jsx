import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

import img1 from "../assets/image-1.png";
import img2 from "../assets/image-2.png";

const galleryData = {
  war: [img1, img2],
  contemporary: [],
  digital: [],
  classic: [],
};

export default function Section() {
  const { id } = useParams();
  const images = galleryData[id] || [];
  const titleMap = {
    war: "Арт у часи війни",
    contemporary: "Сучасне мистецтво",
    digital: "Digital Art",
    classic: "Класичне мистецтво",
  };

  return (
    <section className="section-page">
      <h1>{titleMap[id]}</h1>
      <Carousel images={images} />
    </section>
  );
}
