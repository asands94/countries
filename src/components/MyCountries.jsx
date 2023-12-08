// in the parameter of this function, pass in the myCountries and removeFromList props
const MyCountries = ({ myCountries, removeFromList }) => {
  // myCountries is an array of data so lets map through it
  // myCountry represents each object in the myCountries array
  // idx represents the index of each object in the array
  const myList = myCountries.map((myCountry, idx) => {
    // return a div with a key prop and set it equal to idx

    return (
      <div key={idx}>
        {/* inside the div we'll show the country name */}
        <h2>{myCountry.name.common}</h2>
        {/* we'll also show a button with an onClick function */}
        {/* the onClick will take in the individual countries index */}
        <button onClick={() => removeFromList(idx)}>Remove from list</button>
      </div>
    )
  })
  return (
    <div>
      <h1>My Country List</h1>
      {/* check if the myCOuntries array has any elements */}
      {/* if it does, show the elements if not show a message */}
      {myCountries.length > 0 ? myList : 'Add some countries to your list'}
    </div>
  )
}
export default MyCountries
