import React, { useEffect, useState } from 'react'
import Axios from '../Axios/Axios'

export default function useResults() {
    const [result, setresult] = useState([])

    const searchApi = async (term) => {
      try {
        const response = await Axios.post('movie/keywords',{keyword: term});
        setresult(response.data)
      } catch (error) {
        console.log(error)
      }
      
    }
  
    useEffect(() => {
      searchApi("")
    }, [])

    return [searchApi, result]
}
