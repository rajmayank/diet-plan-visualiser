import React from "react";
import "../styles/MealOption.css";
import { FaClock, FaWeight, FaCarrot, FaOilCan, FaFire, FaInfoCircle } from "react-icons/fa";

const MealOption = ({ option }) => {
  // Extract the option name without the "Option X:" prefix
  const optionName = option.optionName.includes(":")
    ? option.optionName.split(":")[1].trim()
    : option.optionName;

  // Extract macro values
  const proteinValue = option.macros.protein;
  const carbsValue = option.macros.carbs;
  const fatValue = option.macros.fat;
  const caloriesValue = option.macros.calories;

  return (
    <div className="meal-option">
      <div className="option-header">
        <h3 className="option-title">{optionName}</h3>

        <div className="option-macros">
          <div className="macro-pill calories">
            <FaFire className="macro-icon" /> {caloriesValue}
          </div>
          <div className="macro-pill protein">
            <FaWeight className="macro-icon" /> {proteinValue}
          </div>
          <div className="macro-pill carbs">
            <FaCarrot className="macro-icon" /> {carbsValue}
          </div>
          <div className="macro-pill fat">
            <FaOilCan className="macro-icon" /> {fatValue}
          </div>
        </div>
      </div>

      <div className="option-content">
        <div className="ingredients-column">
          <ul className="ingredients-list">
            {option.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="preparation-column">
          <div className="prep-time">
            <FaClock className="time-icon" /> {option.prepTime}
          </div>
          <p className="prep-instructions">{option.prepOverview}</p>
          
          <div className="interesting-facts">
            <h5><FaInfoCircle className="info-icon" /> Interesting Facts</h5>
            <p>{option.interestingFacts}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealOption;
