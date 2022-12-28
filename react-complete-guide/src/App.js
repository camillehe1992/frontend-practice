import "./App.css";
import ExpensesHome from "./components/Expenses/ExpensesHome";
import CourseGoal from "./components/CourseGoals/CourseGoal";

const App = () => {
  return (
    <div>
      <CourseGoal />
      <ExpensesHome />
    </div>
  );
};

export default App;
