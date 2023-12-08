// in the parameter of this function, pass in the allCountries and addToDoList props
const AllCountries = ({ allCountries, addToList }) => {
  // allCountries is an array of data so lets map through it
  // country represents each object in the allCountries array
  // idx represents the index of each object in the array
  const countries = allCountries?.map((country, idx) => {
    // return a div with a key prop and set it equal to idx

    return (
      <div key={idx}>
        {/* inside the div we'll show the country name */}
        <h2>{country.name.common}</h2>
        {/* we'll also show a button with an onClick function */}
        {/* the onClick will take in the individual country */}
        <button onClick={() => addToList(country)}>Add to My List</button>
      </div>
    )
  })
  return <div>{countries}</div>
}
export default AllCountries
