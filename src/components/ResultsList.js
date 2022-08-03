import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ResultsDetails from './ResultsDetails'

export default function ResultsList({ title,results,navigation }) {
    if(!results.length){
        return null;
    }
    return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={ ({item}) =>{
                return (
                    <TouchableOpacity 
                    onPress={() => 
                        navigation.navigate('Result',{item: item})
                    }
                    >
                        <ResultsDetails result={item}/>
                    </TouchableOpacity>
                )
            }} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18, fontWeight: 'bold'
    }
})
