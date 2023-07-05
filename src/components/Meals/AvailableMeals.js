import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Aaloo puri',
    description: 'Finest veggies',
    price: 25,
  },
  {
    id: 'm2',
    name: 'Fafda',
    description: 'A gujarati specialty!',
    price: 50,
  },
  {
    id: 'm3',
    name: 'Jalebi',
    description: 'Sweetest',
    price: 10,
  },
  {
    id: 'm4',
    name: 'Dal Bhat',
    description: 'Healthy...',
    price: 20,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
