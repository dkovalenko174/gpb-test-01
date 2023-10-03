import "./App.css";
import { Card } from "./components/Card/Card";
import data from "./data";
import { useState, useEffect } from "react";

function App() {
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  const updateMaxCardHeight = () => {
    const cardElements = document.querySelectorAll(".card");
    let maxHeight = 0;

    cardElements.forEach(cardElement => {
      const cardHeight = cardElement.clientHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    setMaxCardHeight(maxHeight);
  };

  useEffect(() => {
    updateMaxCardHeight();
  }, []);

  return (
    <div className="App">
      <h1>GPB - Task 01</h1>
      <div className="cards__list">
        {data.map((card, index) => {
          return (
            <Card
              key={`car + ${index}`}
              title={card.header}
              options={card.options}
              text={card.text}
              maxCardHeight={maxCardHeight}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
