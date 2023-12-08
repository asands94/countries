import { useState, useEffect } from 'react'
import AllCountries from './components/AllCountries'
import MyCountries from './components/MyCountries'
import './App.css'

function App() {
  const [allCountries, setAllCountries] = useState([]) // store all the countries from my API call
  const [myCountries, setMyCountries] = useState([]) // store the countries I add to my list
  const [showAllCountries, setShowAllCountries] = useState(false) // create a useState that will show either the AllCountries or MyCountries component

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

  // create a function that removes a country from the myCountries array
  // grab the index of the current country
  const removeFromList = (idx) => {
    const newList = [...myCountries] // create a new array that has all the values of the myCountries array
    newList.splice(idx, 1) // take the new array and remove the country that matches the index passed into the parameter
    setMyCountries(newList) // setMyCountries to contain the values of the new array
  }

  return (
    <>
      {/* Add an onClick to the button that check the current state of showAllCOuntries */}
      {/* When the button is clicked, change the boolean value to be the opposite of what it currently is */}
      <button onClick={() => setShowAllCountries((prevState) => !prevState)}>
        {/* if showAllCountries is true, the button text should say show my countries */}
        {/* if showAllCountries is false, the button text should say show all countries */}
        {showAllCountries ? 'Show My Countries' : 'Show All Countries'}
      </button>

      {/* if showAllCountries is true show the AllCountries component else show the MyCountries component*/}
      {showAllCountries ? (
        /* pass in allCountries and addToList to the AllCountries component so we can use them in that file */
        /* pass in myCountries to help disable our button */
        <AllCountries
          allCountries={allCountries}
          addToList={addToList}
          myCountries={myCountries}
        />
      ) : (
        /* pass in myCountries and removeFromList to the MyCountries component so we can use them in that file */
        <MyCountries
          myCountries={myCountries}
          removeFromList={removeFromList}
        />
      )}
    </>
  )
}

export default App
