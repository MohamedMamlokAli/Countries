import React,{useState} from 'react'
import CardInd from "./CardInd"
import SearchIcon from '@material-ui/icons/Search';
import Filter from "./Filter"
const SearchFilter = (props) => {
   const[search,setSearch]=useState("")
   const {countries} = props
   const regex = new RegExp(`${search}`,"gi")
 return (
  <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-700">
<div className="px-20 relative lg:grid lg:grid-flow-row lg:grid-rows-1 lg:grid-cols-2 gap-4">
 <div>
     <SearchIcon className="absolute inset-0 left-24 top-2" />
    <input placeholder={`Search for a country...`} type="text" className="border-gray-300 border-2 w-full  bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-700 px-10 py-2" onChange={(e)=>{setSearch(e.target.value);console.log(regex)}}/>
 </div>
 <div className="flex lg:flex-row lg:justify-end" >
   <Filter/>
 </div>
    
</div> 
  <div className="text-sm gap-4 md:px-10 flex flex-col justify-center items-center md:grid sm:grid-cols-2 lg:grid xl:grid-cols-3 lg:px-20 2xl:grid-cols-4">
     {search?
     countries.map(country=>regex.test(country.name)?
     <CardInd 
      flag={country.flag} 
      name={country.name} 
      population={country.population} 
      region = {country.region} 
      capital = {country.capital} 
      />:"")
      :countries.map(country=>
      <CardInd 
       flag={country.flag} 
       name={country.name} 
       population={country.population} 
       region = {country.region} 
       capital = {country.capital}
       />)}
   </div>
  </div>
 )
}

export default SearchFilter
