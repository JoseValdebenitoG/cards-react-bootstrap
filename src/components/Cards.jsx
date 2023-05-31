import React from "react";
import Card from "./Card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Card 1",
    image: image1,
    text: "",
    url: "https://www.google.com",
  },
  {
    id: 2,
    title: "Card 2",
    image: image2,
    text: "",
    url: "https://www.youtube.com",
  },
  {
    id: 3,
    title: "Card 3",
    image: image3,
    text: "",
    url: "https://www.linkedin.com",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              image={card.image}
              text={card.text}
              url={card.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
