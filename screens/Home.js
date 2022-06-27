import { View, Text,StatusBar,StyleSheet, SafeAreaView , TouchableOpacity, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem,{localRestaurants} from '../components/RestaurantItem';
import Bottom from '../components/Bottom';
import { Divider } from 'react-native-elements';


export default function Home({navigation}) {
  const [restaurentData, setRestaurentData] = useState(localRestaurants)
  
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{backgroundColor: 'white', padding: 15}} >
    <HeaderTabs />
    <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
    <Categories/>
    <RestaurantItem restaurentData={restaurentData} navigation={navigation}/>
        </ScrollView>
        <Divider width={1}/>
        <Bottom/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "#eee",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  });