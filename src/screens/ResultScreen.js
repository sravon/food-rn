import React from 'react'
import { Text, View } from 'react-native'

export default function ResultScreen({ route}) {
    const { item } = route.params;
  return (
    <View>
        <Text>{item.id}</Text>
    </View>
  )
}
