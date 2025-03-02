import React from 'react';
import '../styles/DailyOverview.css';
import { FaFire, FaWeight, FaCarrot, FaOilCan, FaClock, FaBullseye, FaCalendarDay } from 'react-icons/fa';

const DailyOverview = ({ dailyGoals, mealSections, totalPages }) => {
  return (
    <div className="daily-overview">
      <div className="overview-header">
        <div className="overview-title-section">
          <div className="overview-icon">
            <FaCalendarDay />
          </div>
          <div className="overview-title-info">
            <h2>Daily Diet Plan Overview</h2>
          </div>
        </div>
      </div>
      
      <div className="daily-goals-section">
        <h3><FaBullseye className="section-icon" /> Daily Nutritional Goals</h3>
        <div className="macro-badges-container">
          <div className="macro-badge calories">
            <FaFire className="macro-icon" /> {dailyGoals.targetCalories}
          </div>
          <div className="macro-badge protein">
            <FaWeight className="macro-icon" /> P: {dailyGoals.targetProtein}
          </div>
          <div className="macro-badge carbs">
            <FaCarrot className="macro-icon" /> C: {dailyGoals.targetCarbs}
          </div>
          <div className="macro-badge fat">
            <FaOilCan className="macro-icon" /> F: {dailyGoals.targetFats}
          </div>
        </div>
      </div>
      
      <div className="meal-schedule-section">
        <h3><FaClock className="section-icon" /> Meal Schedule</h3>
        <div className="schedule-cards-container">
          {mealSections.map((meal, index) => (
            <div key={index} className="schedule-card">
              <div className="schedule-card-header">
                <h4>{meal.mealName.includes(':') ? meal.mealName.split(':')[1].trim() : meal.mealName}</h4>
                <div className="schedule-time">{meal.time}</div>
              </div>
              <div className="schedule-card-macros">
                <div className="schedule-macro calories">
                  <FaFire className="macro-icon" /> {meal.macroGoals.calories}
                </div>
                <div className="schedule-macro protein">
                  <FaWeight className="macro-icon" /> {meal.macroGoals.protein}
                </div>
                <div className="schedule-macro carbs">
                  <FaCarrot className="macro-icon" /> {meal.macroGoals.carbs}
                </div>
                <div className="schedule-macro fat">
                  <FaOilCan className="macro-icon" /> {meal.macroGoals.fat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="page-footer">
        <span className="footer-meal-name">Daily Diet Plan Overview</span>
        <span className="footer-page-number">Page 1 of {totalPages || '?'}</span>
      </div>
    </div>
  );
};

export default DailyOverview;
