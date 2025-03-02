import React, { useEffect, useState } from 'react';
import DailyOverview from './DailyOverview';
import MealObjectives from './MealObjectives';
import MealSection from './MealSection';
import '../styles/DietPlanViewer.css';

const DietPlanViewer = ({ dietPlan }) => {
  const { dailyGoals, mealSections } = dietPlan;
  const [mealPages, setMealPages] = useState([]);
  const [totalPagesCount, setTotalPagesCount] = useState(0);

  // Function to estimate the height of a meal option
  const estimateOptionHeight = (option) => {
    // Base height for option header, prep time, etc.
    let baseHeight = 150; 
    
    // Add height for each ingredient (approximately 20px per ingredient)
    baseHeight += option.ingredients.length * 20;
    
    // Add height for preparation text (approximately 0.5px per character)
    baseHeight += option.prepOverview.length * 0.5;
    
    // Add height for interesting facts (approximately 0.5px per character)
    baseHeight += option.interestingFacts.length * 0.5;
    
    return baseHeight;
  };

  // Function to split meal sections into pages with dynamically determined options per page
  const createMealPages = () => {
    const pages = [];
    const pageHeight = 297 * 3.5; // A4 height in pixels (approximate)
    const headerHeight = 150; // Approximate height for meal section header
    const footerHeight = 50; // Approximate height for page footer
    const availableHeight = pageHeight - headerHeight - footerHeight;
    
    mealSections.forEach((mealSection) => {
      const { mealOptions } = mealSection;
      let currentPage = [];
      let currentPageHeight = 0;
      let pageIndex = 0;
      const totalOptions = mealOptions.length;
      
      mealOptions.forEach((option, optionIndex) => {
        const optionHeight = estimateOptionHeight(option);
        
        // If adding this option would exceed the page height, create a new page
        if (currentPageHeight + optionHeight > availableHeight && currentPage.length > 0) {
          pages.push({
            ...mealSection,
            pageTitle: totalOptions > currentPage.length 
              ? `${mealSection.mealName} (${pageIndex + 1}/${Math.ceil(totalOptions / currentPage.length)})` 
              : mealSection.mealName,
            mealOptions: currentPage,
            isPartialPage: totalOptions > currentPage.length,
            pageNumber: pageIndex + 1,
            totalPages: Math.ceil(totalOptions / currentPage.length)
          });
          
          currentPage = [option];
          currentPageHeight = optionHeight;
          pageIndex++;
        } else {
          currentPage.push(option);
          currentPageHeight += optionHeight;
        }
        
        // If this is the last option, add the current page
        if (optionIndex === totalOptions - 1 && currentPage.length > 0) {
          pages.push({
            ...mealSection,
            pageTitle: totalOptions > currentPage.length 
              ? `${mealSection.mealName} (${pageIndex + 1}/${Math.ceil(totalOptions / currentPage.length)})` 
              : mealSection.mealName,
            mealOptions: currentPage,
            isPartialPage: totalOptions > currentPage.length,
            pageNumber: pageIndex + 1,
            totalPages: Math.ceil(totalOptions / currentPage.length)
          });
        }
      });
    });
    
    return pages;
  };

  useEffect(() => {
    const pages = createMealPages();
    setMealPages(pages);
    // Calculate total pages: 2 for overview and objectives + all meal pages
    setTotalPagesCount(2 + pages.length);
  }, [dietPlan]);

  return (
    <div className="diet-plan-viewer">
      <div className="pages-container">
        {/* Daily Overview Page */}
        <div className="page">
          <DailyOverview 
            dailyGoals={dailyGoals} 
            mealSections={mealSections} 
            totalPages={totalPagesCount}
          />
        </div>

        {/* Meal Objectives Page */}
        <div className="page">
          <MealObjectives 
            mealSections={mealSections} 
            totalPages={totalPagesCount}
          />
        </div>

        {/* Meal Section Pages */}
        {mealPages.map((mealPage, index) => (
          <div key={index} className="page">
            <MealSection 
              mealSection={mealPage} 
              pageTitle={mealPage.pageTitle}
              isPartialPage={mealPage.isPartialPage}
              pageNumber={index + 3} // +3 because we have 2 pages before meal pages
              totalPages={totalPagesCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlanViewer;
