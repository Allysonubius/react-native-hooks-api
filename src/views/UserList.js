import React from 'react'
import { FlatList, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import users from '../data/users'

export default props =>{

    function getUserItem({ item: user }){
        return (
            <ListItem 
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider={true}
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