import { useState, useEffect } from 'react'
import './App.css'
import dietPlanData from './data/diet-plan.json'
import DietPlanViewer from './components/DietPlanViewer'

function App() {
  const [dietPlan, setDietPlan] = useState(null)

  useEffect(() => {
    // Load the diet plan data
    setDietPlan(dietPlanData)
  }, [])

  if (!dietPlan) {
    return <div className="loading">Loading diet plan...</div>
  }

  return (
    <div className="diet-plan-app">
      <main>
        <DietPlanViewer dietPlan={dietPlan} />
      </main>
    </div>
  )
}

export default App
