import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigation } from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button , Icon } from 'react-native-elements'
import { UserProvider } from './context/UserContext'

const Stack = createStackNavigation()

export default props =>{
    return(
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) =>{
                            return{
                                title: "Lista de usuários",
                                headerRight : () =>(
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white"/>}
                                    />
                                )
                            }
                        }}
                    >
                    </Stack.Screen>
                    <Stack.Screen
                        name="UserList"
                        component={UserForm}
                        options={{
                            title:"Formulário de Usuários"
                        }}
                    >
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    )
}

const screenOptions={
    headerStyle:{
        backgroundColor:'#f4511e'
    },
    headerTintColor:'#fff',
    headerTitleColor:{
        fontWeight:'bold'
    }
}