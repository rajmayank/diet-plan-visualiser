import React from 'react';
import MealOption from './MealOption';
import '../styles/MealSection.css';
import { FaClock, FaFire, FaWeight, FaCarrot, FaOilCan } from 'react-icons/fa';

const MealSection = ({ mealSection, pageTitle, isPartialPage, pageNumber, totalPages }) => {
  const displayTitle = pageTitle || mealSection.mealName;
  
  return (
    <div className="meal-section">
      <div className="meal-header">
        <div className="meal-title-container">
          <div className="meal-icon">
            <span role="img" aria-label="meal">☕</span>
          </div>
          <div className="meal-title-time">
            <h2>{displayTitle.split(':')[0]}</h2>
            <div className="meal-time">{mealSection.time}</div>
          </div>
        </div>
        
        <div className="meal-macros-summary">
          <div className="macro-badge protein">
            <FaWeight className="macro-icon" /> P: {mealSection.macroGoals.protein.split('(')[0].trim()}
          </div>
          <div className="macro-badge carbs">
            <FaCarrot className="macro-icon" /> C: {mealSection.macroGoals.carbs.split('(')[0].trim()}
          </div>
          <div className="macro-badge fat">
            <FaOilCan className="macro-icon" /> F: {mealSection.macroGoals.fat.split('(')[0].trim()}
          </div>
          <div className="macro-badge calories">
            <FaFire className="macro-icon" /> ~{mealSection.macroGoals.calories.split('-')[1].split('(')[0].trim()}
          </div>
        </div>
      </div>
      
      <div className="meal-options-container">
        {mealSection.mealOptions.map((option, index) => (
          <div key={index} className="meal-option-card">
            <MealOption option={option} />
          </div>
        ))}
      </div>
      
      <div className="page-footer">
        {isPartialPage ? (
          <p>{mealSection.mealName} - Page {pageNumber} of {totalPages}</p>
        ) : (
          <p>{mealSection.mealName}</p>
        )}
      </div>
    </div>
  );
};

export default MealSection;
