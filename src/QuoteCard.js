import axios from "axios";
import { useState } from "react";

const QuoteCard = () => {
  const [advice, setAdvice] = useState("Be happy");
  const handleClick = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(function (response) {
        setAdvice(response.data.slip.advice);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="quote-card">
      <h2>Your Advice</h2>
      <p className="advice">{advice}</p>
      <button onClick={handleClick}>Click for new advice</button>
    </div>
  );
};
export default QuoteCard;
