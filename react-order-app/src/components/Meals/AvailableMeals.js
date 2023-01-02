import { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import useHttp from "../../hooks/use-http";
import { DUMMY_MEALS } from "./dummy-meals";

const API_URL = "https://swapi.dev/api/films";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  useEffect(() => {
    const transformMeals = (meals) => {
      const loadedMeals = DUMMY_MEALS.map((item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
        };
      });
      setMeals(loadedMeals);
    };
    fetchMeals(
      {
        url: API_URL,
      },
      transformMeals
    );
  }, [fetchMeals]);

  let content = <p>Found no meals</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (meals.length > 0) {
    content = (
      <ul>
        {meals.map((meal) => (
          <MealItem key={meal.id} {...meal} />
        ))}
      </ul>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
