import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({ title }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#b53333',
    borderBottomWidth: 2,
  },
})
