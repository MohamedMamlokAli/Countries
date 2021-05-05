import React,{useEffect,useState} from "react"
import axios from "axios"
import Header from "./components/Header"
import SearchFilter from "./components/SearchFilter"
function App() {
  const [countries,setCountries] = useState([])

  useEffect(() => {
    new axios.get("https://restcountries.eu/rest/v2/all" ).then(res=>setCountries(res.data))
  }, [])
  return (
    <div id="app" className="App">
      <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-700 h-screen ">
      <Header />
      <SearchFilter countries = {countries} />
      </div>
    </div>
  );
}
export default App;
