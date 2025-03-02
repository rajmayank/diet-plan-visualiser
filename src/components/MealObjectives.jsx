import React from 'react';
import '../styles/MealObjectives.css';
import { FaBullseye } from 'react-icons/fa';

const MealObjectives = ({ mealSections }) => {
  return (
    <div className="meal-objectives-page">
      <h2 className="page-title">Meal Objectives</h2>
      
      <div className="meal-objectives-content">
        <h3><FaBullseye className="section-icon" /> Daily Meal Objectives</h3>
        <p className="objectives-intro">
          Each meal in your diet plan has a specific purpose to optimize your nutrition and support your fitness goals.
          Below are the objectives for each meal throughout the day.
        </p>
        
        <div className="objectives-list">
          {mealSections.map((meal, index) => (
            <div key={index} className="objective-item">
              <h4>{meal.mealName}</h4>
              <p>{meal.mealObjective}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="page-footer">
        <p>Page 2 - Meal Objectives</p>
      </div>
    </div>
  );
};

export default MealObjectives;
