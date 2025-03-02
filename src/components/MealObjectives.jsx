import React from "react";
import "../styles/MealObjectives.css";
import { FaBullseye, FaListUl } from "react-icons/fa";

const MealObjectives = ({ mealSections, totalPages }) => {
  return (
    <div className="meal-objectives-page">
      <div className="objectives-header">
        <div className="objectives-title-section">
          <div className="objectives-icon">
            <FaBullseye />
          </div>
          <div className="objectives-title-info">
            <h2>Meal Objectives</h2>
          </div>
        </div>
      </div>

      <div className="meal-objectives-content">
        <div className="objectives-list">
          {mealSections.map((meal, index) => (
            <div key={index} className="objective-item">
              <div className="objective-header">
                <h4>
                  {meal.mealName.includes(":")
                    ? meal.mealName.split(":")[1].trim()
                    : meal.mealName}
                </h4>
                <div className="objective-time">{meal.time}</div>
              </div>
              <p>{meal.mealObjective}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="page-footer">
        <span className="footer-meal-name">Meal Objectives</span>
        <span className="footer-page-number">Page 2 of {totalPages || '?'}</span>
      </div>
    </div>
  );
};

export default MealObjectives;
