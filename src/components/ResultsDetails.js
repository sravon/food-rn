import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ResultsDetails({result}) {
  return (
    <View style={{marginLeft:10}}>
        <Image 
        style={styles.image}
            source={{uri:`https://api.shrabon.me/${result.image}`}} 
        />
        <Text>{result.title}</Text>
        <Text>votecount: {result.votecount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width:250, height:120, borderRadius: 4
    }
})