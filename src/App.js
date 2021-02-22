import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigation } from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'

const Stack = createStackNavigation()

export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
            >
                <Stack.Screen
                    name="UserList"
                    component={UserList}    
                >
                </Stack.Screen>
                <Stack.Screen
                    name="UserList"
                    component={UserForm}    
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}