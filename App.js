import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'

const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#f5428d' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#fff' },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const titleName = route.params.name
            //   return {
            //     title: titleName,
            //   }
            // }}
          />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})
