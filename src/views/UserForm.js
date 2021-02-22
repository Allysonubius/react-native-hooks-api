import React , { useState} from 'react'
import { Text, View , TextInput, StyleSheet , Button } from 'react-native'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return ( 
        <View
            style={style.form}
        >
            <Text
                style={style.text}
            >Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome ..."
                value={user.name}
            />
            <Text
                style={style.text}
            >E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o e-mail ..."
                value={user.email}
            />
            <Text
                style={style.text}
            >URL do avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe o URL do avatar ..."
                value={user.avatarUrl}
            />
            <Button
                title="SALVAR"
                onPress={() => {
                    navigation.goBack()
                    
                }}
            />
        </View>
        
    )
}

const style = StyleSheet.create({
    text:{
        marginBottom:5
    },
    form:{
        padding:12,

    },
    input:{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:15,
    }
})