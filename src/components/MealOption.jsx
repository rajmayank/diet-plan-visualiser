import React from 'react';
import '../styles/MealOption.css';
import { FaClock, FaFire, FaWeight, FaCarrot, FaOilCan } from 'react-icons/fa';

const MealOption = ({ option }) => {
  return (
    <div className="meal-option">
      <div className="option-title">
        <h3>{option.optionName.split(':')[1] ? option.optionName.split(':')[1].trim() : option.optionName}</h3>
        
        <div className="option-macros">
          <div className="macro-pill protein">
            <FaWeight className="macro-icon" /> {option.macros.protein}
          </div>
          <div className="macro-pill carbs">
            <FaCarrot className="macro-icon" /> {option.macros.carbs}
          </div>
          <div className="macro-pill fat">
            <FaOilCan className="macro-icon" /> {option.macros.fat}
          </div>
          <div className="macro-pill calories">
            <FaFire className="macro-icon" /> {option.macros.calories}
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
        </div>
      </div>
    </div>
  );
};

export default MealOption;
