import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import DashBoard from '../screens/DashBoard'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

MyDrawer = ({route}) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="DashBoard" initialParams={route.params} component={DashBoard} />
        </Drawer.Navigator>
    );
}
MyStack = ({route,navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home"  component={Home} />
                <Stack.Screen name="Drawer" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default MyStack
