import './App.css';
import Header from './components/header'
import Container from '@material-ui/core/Container'
import VaccineCard from './components/vaccineCard';
import { useState, useEffect } from 'react'
import Papa from 'papaparse';

function App() {
  const [locations, setLocations] = useState([])

  let saveData = (result) => {
    //setLocations(result.data)
    let data = result.data
    data = updateList(data)
    setLocations(data)
  }

  let filterData = (data, cityName) => {
    let chosenCity = data.filter(row => row.location === cityName)
    //most recent data is the last entry in the arr
    chosenCity = chosenCity[chosenCity.length-1]
    return chosenCity;
  }

  //useEffect hook to fetch Vaccine csv file and set it to state
  useEffect(() => {
    Papa.parse('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv', {
      download: true,
      header: true,
      complete: (result) => {
        saveData(result)
      }
    })
  }, [])


  let updateList = (locations) => {
    let updatedList = [];
    locations.forEach(row => {
      if(!updatedList.some(states => states.location === row.location)){
        let finalEntry = filterData(locations,row.location)
        updatedList.push(finalEntry)
      }
    })
    return updatedList;
  }

  

  return (
    <div className="App">
      <Header />
      <Container style={{ paddingTop: '1rem' }} maxWidth="lg">
        <VaccineCard></VaccineCard>
        {console.log(locations)}


      </Container>
    </div>
  );
}

export default App;
