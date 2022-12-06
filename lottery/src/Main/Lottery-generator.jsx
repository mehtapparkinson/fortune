
import React, { useState } from "react";
import './generator.css';

const LotteryGenerator = () => {
  const [numbers, setNumbers] = useState([]);
  const [stars, setStars] = useState([]);

  const handleClick = () => {
      // Generate 5 random numbers between 1 and 50
      let newNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);

      // Generate 2 random numbers between 1 and 12
      let newStars = Array.from({ length: 2 }, () => Math.floor(Math.random() * 12) + 1);
  
      // If any of the numbers are the same,
      // change the number to the next number in the sequence
      newNumbers = newNumbers.map(number => {
        if (newNumbers.filter(n => n === number).length > 1) {
          return number + 1;
        } else {
          return number;
        }
      });

     // If any of the stars are the same,
    // change the star to the next star in the sequence
    newStars = newStars.map(star => {
      if (newStars.filter(s => s === star).length > 1) {
        return star + 1;
      } else {
        return star;
      }
    });

    setNumbers(newNumbers);
    setStars(newStars);
  };


  return (
    <div className="main-area">
      <h1>
       Find out your lucky numbers and stars for today!
      </h1>
    <div className="wrapper">
    {numbers.map((number) => (
        <div key={number} className="numbers">
          {number}
        </div>
      ))}
      {stars.map((star) => (
        <div key={star} className="stars">
          {star}
        </div>
      ))}
    </div>
      <button className='submit-btn' onClick={handleClick}>Generate numbers</button>
    </div>
  );
};

export default LotteryGenerator;
