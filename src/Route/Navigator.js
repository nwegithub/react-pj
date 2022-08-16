import React from "react"
import {View,Text,TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator,} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawerComponent from "./CustomDrawerComponent"
import HomeScreen from "../Screens/HomeScreen"
import HotelDetailScreen from "../Screens/HotelDetailScreen"
import BookingScreen from "../Screens/BookingScreen"
import WishListScreen from "../Screens/WishListScreen"
import ProfileScreen from "../Screens/ProfileScreen"
import BookingListScreen from "../Screens/BookingListScreen"
import CustomerServiceScreen from "../Screens/CustomerServiceScreen"
import ContactUsScreen from "../Screens/ContactUsScreen"
import MapViewScreen from "../Map/Map"
import RatingReviewScreen from "../Screens/RatingScreen"
import RatingRewListScreen from "../Screens/RatingRewListScreen"
import SignUpScreen from "../Screens/SignUpScreen"
import LoginScreen from "../Screens/LoginScreen"





const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()







const MainNavigator = () =>{
    return(
        <NavigationContainer>
             
             <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerComponent {...props} />} screenOptions={{headerShown:false}}>

                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="HotelDetail" component={HotelDetailScreen} />
                <Drawer.Screen name="Booking" component={BookingScreen} />
                <Drawer.Screen name="WishList" component={WishListScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="BookingList" component={BookingListScreen} />
                <Drawer.Screen name="CustomerService" component={CustomerServiceScreen} />
                <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
                <Drawer.Screen name="MapView" component={MapViewScreen} />
                <Drawer.Screen name="Rating" component={RatingReviewScreen} />
                <Drawer.Screen name="RatingList" component={RatingRewListScreen} />
                <Drawer.Screen name="SignIn" component={SignUpScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} />

            </Drawer.Navigator>
                
                
           
        </NavigationContainer>
    )
}
export default MainNavigator