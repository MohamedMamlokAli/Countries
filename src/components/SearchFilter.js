import React,{useState} from 'react'
import CardInd from "./CardInd"
import SearchIcon from '@material-ui/icons/Search';
import Filter from "./Filter"
import PaginationWraper from './Pagination';
const SearchFilter = (props) => {
const[search,setSearch]=useState("")
const [region, setRegion] = useState('');
const [currentPage,setCurrentPage]=useState(1)
const [countriesPerPage] = useState(8)
const paginate = (number) =>{
  setCurrentPage(number)
}
  const sendDataToParent = (data) => { 
    console.log(data);
    setRegion(data);
    console.log(region)
  };
const {countries} = props
const indexOfLastCountry = countriesPerPage * currentPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = countries.slice(indexOfFirstCountry,indexOfLastCountry)


const regex = new RegExp(`${search}`,"gi")
return (
<div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-700">
<div className="px-20 relative lg:grid lg:grid-flow-row lg:grid-rows-1 lg:grid-cols-2 gap-4">
<div>
    <SearchIcon className="absolute inset-0 left-24 top-2" />
  <input placeholder={`Search for a country...`} type="text" className="border-gray-300 border-2 w-full  bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-700 px-10 py-2" onChange={(e)=>{setSearch(e.target.value);}}/>
</div>
<div className="flex lg:flex-row lg:justify-end" >
  <Filter sendDataToParent={sendDataToParent}/>
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
    :currentCountries.map(country=>
    <CardInd 
      flag={country.flag} 
      name={country.name} 
      population={country.population} 
      region = {country.region} 
      capital = {country.capital}
      />)}
      

  </div>
  {!search&&<div><PaginationWraper countriesPerPage={countriesPerPage} totalCountries = {countries.length} paginate = {paginate} /></div>
  }
</div>
)
}

export default SearchFilter
