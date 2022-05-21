import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem'

import { useRoute, useNavigation } from '@react-navigation/native'

const MealsList = ({ items }) => {
  const route = useRoute()
  const navigation = useNavigation()

  const renderMealItem = (itemData) => {
    const handleDetail = () => {
      navigation.navigate('MealDetail', {
        id: itemData.item.id,
      })
    }
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
