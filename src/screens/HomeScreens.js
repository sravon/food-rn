import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView } from 'react-native'
import ResultsList from '../components/ResultsList'
import Searchbar from '../components/Searchbar'
import useResults from '../hooks/useResults'

export default function HomeScreens({navigation}) {
  const [term, setterm] = useState("")
  const [searchApi, result] = useResults()
  
  // const filterResultByCat = (category) => {
  //   return result.filter(res => {
  //     return res.cat_id === category
  //   })
  // }

  return (
    <>
        <Searchbar term={term} 
          onTermChange={newTerm => setterm(newTerm) }
          onTermSubmit={ () => searchApi(term)}
        />
        <Text>{term} </Text>
        <Text>{result.length} </Text>
        <ScrollView>
          <ResultsList results={result} title="hlw" navigation={navigation} />
          <ResultsList results={result} title="dfd" navigation={navigation} />
          <ResultsList results={result} title="koi" navigation={navigation} />
        </ScrollView>
    </>
  )
}
