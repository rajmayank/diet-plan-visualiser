import React from "react";
import MealOption from "./MealOption";
import "../styles/MealSection.css";
import {
  FaWeight,
  FaCarrot,
  FaOilCan,
  FaFire,
  FaCoffee,
  FaUtensils,
  FaDumbbell,
} from "react-icons/fa";
import { GiSandwich, GiNoodles } from "react-icons/gi";
import { MdFreeBreakfast, MdLunchDining, MdDinnerDining } from "react-icons/md";

const MealSection = ({ mealSection, pageTitle, pageNumber, totalPages }) => {
  const displayTitle = pageTitle || mealSection.mealName;
  // Extract just the meal name (e.g., "Breakfast" from "Meal 1: Breakfast")
  // Also remove any page numbering like "(1/3)" from the title
  const mealNameShort = displayTitle.includes(":")
    ? displayTitle
        .split(":")[1]
        .trim()
        .replace(/\s*\(\d+\/\d+\)\s*$/, "")
    : displayTitle.replace(/\s*\(\d+\/\d+\)\s*$/, "");
  const mealTime = mealSection.time;

  // Extract macro values and percentages
  const extractMacroInfo = (macroString) => {
    const value = macroString.split("(")[0].trim();
    const percentMatch = macroString.match(/\(~(\d+)%\)/);
    const percent = percentMatch ? percentMatch[1] : "";
    return { value, percent };
  };

  const proteinInfo = extractMacroInfo(mealSection.macroGoals.protein);
  const carbsInfo = extractMacroInfo(mealSection.macroGoals.carbs);
  const fatInfo = extractMacroInfo(mealSection.macroGoals.fat);

  // For calories, handle the range format if present
  const caloriesString = mealSection.macroGoals.calories;
  const caloriesInfo = {
    value: caloriesString.includes("-")
      ? caloriesString.split("-")[1].split("(")[0].trim()
      : caloriesString.split("(")[0].trim(),
    percent: caloriesString.match(/\(~(\d+)%\)/)
      ? caloriesString.match(/\(~(\d+)%\)/)[1]
      : "",
  };

  // Select the appropriate icon based on meal name
  const getMealIcon = () => {
    const mealNameLower = mealNameShort.toLowerCase();

    if (mealNameLower.includes("breakfast")) {
      return <MdFreeBreakfast />;
    } else if (
      mealNameLower.includes("mid-morning") ||
      mealNameLower.includes("snack")
    ) {
      return <GiSandwich />;
    } else if (mealNameLower.includes("lunch")) {
      return <MdLunchDining />;
    } else if (mealNameLower.includes("pre-workout")) {
      return <FaDumbbell />;
    } else if (mealNameLower.includes("post-workout")) {
      return <FaUtensils />;
    } else if (mealNameLower.includes("dinner")) {
      return <MdDinnerDining />;
    } else {
      return <FaCoffee />;
    }
  };

  return (
    <div className="meal-section">
      <div className="meal-header">
        <div className="meal-title-section">
          <div className="meal-icon">{getMealIcon()}</div>
          <div className="meal-title-info">
            <h2>{mealNameShort.toUpperCase()}</h2>
            <div className="meal-time">{mealTime}</div>
          </div>
        </div>

        <div className="macro-grid">
          <div className="macro-row calories-row">
            <div className="macro-badge calories">
              <FaFire className="macro-icon" /> ~{caloriesInfo.value}
            </div>
          </div>
          <div className="macro-row">
            <div className="macro-badge protein">
              <FaWeight className="macro-icon" /> P: {proteinInfo.value}
            </div>
            <div className="macro-badge carbs">
              <FaCarrot className="macro-icon" /> C: {carbsInfo.value}
            </div>
            <div className="macro-badge fat">
              <FaOilCan className="macro-icon" /> F: {fatInfo.value}
            </div>
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
        <span className="footer-meal-name">{mealNameShort}</span>
        <span className="footer-page-number">
          Page {pageNumber} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default MealSection;
