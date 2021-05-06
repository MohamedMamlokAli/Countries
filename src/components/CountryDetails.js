import React from 'react'

const CountryDetails = ({match}) => {
const returned = match.params.country
console.log(returned)
 return (
  <div className="flex flex-col justify-start py-10 px-4 lg:py-9 lg:px-20">
   <div><button>Back</button></div>
   <div>Flag</div>
   <div>Details</div>
   <div>Borders</div>
  </div>
 )
}

export default CountryDetails
