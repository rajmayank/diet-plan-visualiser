import React from 'react';
import DailyOverview from './DailyOverview';
import MealObjectives from './MealObjectives';
import MealSection from './MealSection';
import '../styles/DietPlanViewer.css';

const DietPlanViewer = ({ dietPlan }) => {
  const { dailyGoals, mealSections } = dietPlan;

  // Function to split meal sections into pages with at most 3 options per page
  const createMealPages = () => {
    const mealPages = [];
    
    mealSections.forEach((mealSection) => {
      const { mealOptions } = mealSection;
      const totalOptions = mealOptions.length;
      const totalPages = Math.ceil(totalOptions / 3);
      
      for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
        const startIndex = pageIndex * 3;
        const endIndex = Math.min(startIndex + 3, totalOptions);
        const pageOptions = mealOptions.slice(startIndex, endIndex);
        
        const pageTitle = totalPages > 1 
          ? `${mealSection.mealName} (${pageIndex + 1}/${totalPages})` 
          : mealSection.mealName;
        
        mealPages.push({
          ...mealSection,
          pageTitle,
          mealOptions: pageOptions,
          isPartialPage: totalPages > 1,
          pageNumber: pageIndex + 1,
          totalPages
        });
      }
    });
    
    return mealPages;
  };

  const mealPages = createMealPages();

  return (
    <div className="diet-plan-viewer">
      <div className="pages-container">
        {/* Daily Overview Page */}
        <div className="page">
          <DailyOverview dailyGoals={dailyGoals} mealSections={mealSections} />
        </div>

        {/* Meal Objectives Page */}
        <div className="page">
          <MealObjectives mealSections={mealSections} />
        </div>

        {/* Meal Section Pages */}
        {mealPages.map((mealPage, index) => (
          <div key={index} className="page">
            <MealSection 
              mealSection={mealPage} 
              pageTitle={mealPage.pageTitle}
              isPartialPage={mealPage.isPartialPage}
              pageNumber={mealPage.pageNumber}
              totalPages={mealPage.totalPages}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlanViewer;
