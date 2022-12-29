import "./App.css";
import UserHome from "./components/User/UserHome";
import CourseGoal from "./components/CourseGoals/CourseGoal";
import ExpensesHome from "./components/Expenses/ExpensesHome";

const App = () => {
  return (
    <>
      <UserHome />
      <CourseGoal />
      <ExpensesHome />
    </>
  );
};

export default App;
