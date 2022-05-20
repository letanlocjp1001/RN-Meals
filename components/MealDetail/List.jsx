import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({ data }) => {
  return data.map((dataItem, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ))
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#b53333',
  },
  itemText: {
    textAlign: 'center',
    color: 'white',
  },
})
