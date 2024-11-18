import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Cards = () => {
  const [allcards, setAllCards] = useState();
  useEffect(() => {
    fetch("./Adventure.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);
  return (
    <div className="gap-3 md:w-9/12 grid grid-cols-1 sm:w-full mx-auto sm:grid-cols-2 md:grid-cols-3">
      {allcards?.map((card) => (
        <Card key={card.Id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
