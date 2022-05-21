import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext } from '../store/context/favorites-content'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  )
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rottContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rottContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
