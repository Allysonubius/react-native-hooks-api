import React from 'react'
import { View, FlatList, Alert} from 'react-native'
import { ListItem , Button, Icon} from 'react-native-elements'
import UsersContext from '../context/UserContext'

export default props =>{

    const { state } = useContext(UsersContext)
    
    function confirmUserDelete(user){
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário ?',[
            {
                text:'SIM',
                onPress=() => {
                    console.warn('delete' + user.name)
                }
            },
            {
                text:'NÂO'
            },
        ])
    }

    function getActions(user){
        return(
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icons={<Icon name="edit" size={25} color="orange"/>}
                />
                <Button
                    onPress={() => confirmUserDelete(user)}
                    type="clear"
                    icons={<Icon name="delete" size={25} color="red"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }){
        return (
            <ListItem 
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider={true}
                rightElement={getActions(user)}
                onPress={() =>
                    props.navigation.navigate('UserForm')
                }
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            >
            </FlatList>
        </View>
    )
}