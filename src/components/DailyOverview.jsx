import React from 'react';
import '../styles/DailyOverview.css';
import { FaFire, FaWeight, FaCarrot, FaOilCan, FaClock, FaBullseye } from 'react-icons/fa';

const DailyOverview = ({ dailyGoals, mealSections }) => {
  return (
    <div className="daily-overview">
      <h2 className="page-title">Daily Diet Plan Overview</h2>
      
      <div className="daily-goals">
        <h3><FaBullseye className="section-icon" /> Daily Nutritional Goals</h3>
        <div className="goals-grid">
          <div className="goal-item">
            <FaFire className="goal-icon" />
            <h4>Calories</h4>
            <p>{dailyGoals.targetCalories}</p>
          </div>
          <div className="goal-item">
            <FaWeight className="goal-icon" />
            <h4>Protein</h4>
            <p>{dailyGoals.targetProtein}</p>
          </div>
          <div className="goal-item">
            <FaCarrot className="goal-icon" />
            <h4>Carbohydrates</h4>
            <p>{dailyGoals.targetCarbs}</p>
          </div>
          <div className="goal-item">
            <FaOilCan className="goal-icon" />
            <h4>Fats</h4>
            <p>{dailyGoals.targetFats}</p>
          </div>
        </div>
      </div>
      
      <div className="meal-schedule">
        <h3><FaClock className="section-icon" /> Meal Schedule</h3>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Meal</th>
              <th>Time</th>
              <th><FaFire className="table-icon" /> Calories</th>
              <th><FaWeight className="table-icon" /> Protein</th>
              <th><FaCarrot className="table-icon" /> Carbs</th>
              <th><FaOilCan className="table-icon" /> Fats</th>
            </tr>
          </thead>
          <tbody>
            {mealSections.map((meal, index) => (
              <tr key={index}>
                <td>{meal.mealName}</td>
                <td>{meal.time}</td>
                <td>{meal.macroGoals.calories}</td>
                <td>{meal.macroGoals.protein}</td>
                <td>{meal.macroGoals.carbs}</td>
                <td>{meal.macroGoals.fat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="page-footer">
        <p>Page 1 - Daily Overview</p>
      </div>
    </div>
  );
};

export default DailyOverview;
