import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { useRoute, useNavigation } from '@react-navigation/native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const handleDetail = () => {
    navigation.navigate('MealDetail')
  }

  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onPress={handleDetail}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
