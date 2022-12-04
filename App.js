import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, AddIcon } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { auth } from "./firebase";
import Toast from "react-native-toast-message";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import StartScreen from "./screens/StartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const [isSignedIn, setIsSignedIn] = useState(false);

  const CustomTabButton = ({children, onPress}) => (
    <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow
    }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#FF9C00"
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });
  }, []);

  function HomeStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  if (isSignedIn == true) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Post") {
                iconName = focused ? "add" : "add";
              }else {
                iconName = focused ? "settings" : "settings-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#FF9C00",
            tabBarInactiveTintColor: "white",
            tabBarInactiveBackgroundColor: "#000030",
            tabBarActiveBackgroundColor: "#000030",
            tabBarStyle: { borderTopWidth: 0,
              backgroundColor: "#000030"},
          })}
        >
          <Tab.Screen
            name="Home"
            options={{ 
              headerShown: false,
              headerTransparent: true,
              statusBarHidden: true,
              headerBackTitleVisible: false,
            }}
            component={HomeStackScreen}
          />

          <Tab.Screen
            name="Post"
            options={{ 
              headerShown: false,
              headerStyle: {
                borderBottomWidth: 0,
              },
              headerBackTitleVisible: false,
              tabBarButton: (props) => 
              (<CustomTabButton {...props} />),
              tabBarLabelStyle: {
                marginBottom: "8px",
                fontSize: "16px"
              },
              tabBarIconStyle:{
                marginTop: "12px"
              }
            }}
            component={PostScreen}
          />

          <Tab.Screen
            name="Profile"
            options={{ headerShown: false }}
            component={ProfileScreen}
          />
          </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              options={{ headerShown: false }}
              component={StartScreen}
            />
            <Stack.Screen
              name="Login"
              options={{
                title: "",
                headerTransparent: true,
                statusBarHidden: true,
                headerStyle: {
                  borderBottomWidth: 0,
                },
                headerTintColor: "white",
                headerBackTitleVisible: false,
              }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="Register"
              options={{
                title: "",
                headerTransparent: true,
                statusBarHidden: true,
                headerStyle: {
                  borderBottomWidth: 0,
                },
                headerTintColor: "white",
                headerBackTitleVisible: false,
              }}
              component={RegisterScreen}
            />            
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
