import React from 'react'
import { FlatList} from 'react-native'
import { ListItem , Icon} from 'react-native-elements'
import users from '../data/users'

export default props =>{
    
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
                data={users}
                renderItem={getUserItem}
            >
            </FlatList>
        </View>
    )
}