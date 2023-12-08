import { useState, useEffect } from 'react'
import AllCountries from './components/AllCountries'
import MyCountries from './components/MyCountries'
import './App.css'

function App() {
  const [allCountries, setAllCountries] = useState([]) // store all the countries from my API call
  const [myCountries, setMyCountries] = useState([]) // store the countries I add to my list

  // Write an async function that will use an API to get country data
  const fetchCountries = async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/region/europe'
      )
      const data = await response.json() // this is the actual data we want to work with
      setAllCountries(data) // use the setAllCountries function to store the data from the API
    } catch (error) {
      console.log(error)
    }
  }

  // this useEffect will run the function inside of it one time after the component initially renders
  useEffect(() => {
    fetchCountries() // invoke the function created early to grab a list of countries
  }, []) // we need this array to make sure the function only runs one time

  // create a function that adds a country to the existing myCountries state
  const addToList = (country) => {
    // this creates a new array that contains all the contents of the myCountries array and the value of country
    setMyCountries([...myCountries, country])
  }

  return (
    <>
      {/* pass in allCountries and addToList to the AllCountries component so we can use them in that file */}
      <AllCountries allCountries={allCountries} addToList={addToList} />
      <MyCountries />
    </>
  )
}

export default App
