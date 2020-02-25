
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './LoginScreen'
import Insta from './Insta'
import List from './List'
import ShowData from './ShowData'



export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Insta" component={Insta} />
                <Stack.Screen name="List" component={List}/>
                <Stack.Screen name="ShowData" component={ShowData}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
