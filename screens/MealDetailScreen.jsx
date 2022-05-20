import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'

import { useNavigation, useRoute } from '@react-navigation/native'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'

const MealDetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const mealId = route.params.id

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const headerButtonPressHandler = () => {
    console.log('NNOOO')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            color='white'
            icon='star'
          />
        )
      },
    })
  }, [navigation, headerButtonPressHandler])

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
