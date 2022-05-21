import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'

import { MEALS } from '../data/dummy-data'

import { useNavigation, useRoute } from '@react-navigation/native'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-content'

const MealDetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const mealId = route.params.id

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const favoriteMealsCtx = useContext(FavoritesContext)
  const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealId)

  const changeFavoriteStatusHandler = () => {
    if (mealsIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId)
    } else {
      favoriteMealsCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color='white'
            icon={mealsIsFavorite ? 'star' : 'star-outline'}
          />
        )
      },
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title='Ingrediend' />
          <List data={selectedMeal.ingredients} />
          <Subtitle title='Step' />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})
