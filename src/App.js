import React,{useEffect,useState} from "react"
import axios from "axios"
import Header from "./components/Header"
import SearchFilter from "./components/SearchFilter"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import CountryDetails from "./components/CountryDetails"

function App() {
  const [countries,setCountries] = useState([])

  useEffect(() => {
    new axios.get("https://restcountries.eu/rest/v2/all" ).then(res=>setCountries(res.data))
  }, [])

  return (
    <div id="app" className="App">
      <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-700 h-screen ">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <SearchFilter countries = {countries} />} exact/> 
        <Route path ="/:country" component={CountryDetails}/>
      </Switch>
      </BrowserRouter>
      
      </div>
    </div>
  );
}
export default App;
