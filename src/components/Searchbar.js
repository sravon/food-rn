import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function Searchbar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.background}>
        <Feather name="search" size={30}/>
        <TextInput
            style={{borderColor:'black', borderWidth:1,flex:1,fontSize:18}}
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            value={term}
            // onChangeText={newTerm => onTermChange(newTerm)}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height:50, borderRadius: 5,
        marginHorizontal: 15,
        display:'flex', flexDirection: 'row',
        alignItems:'center'
    }
})
