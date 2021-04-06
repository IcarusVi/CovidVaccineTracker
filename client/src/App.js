import './App.css';
import Header from './components/header'
import Container from '@material-ui/core/Container'
import VaccineCard from './components/vaccineCard';
import { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Papa from 'papaparse';

import { makeStyles } from '@material-ui/core/styles';
import UnitedStatesCard from './components/unitedStatesCard';
import Footer from './components/footer';

const useStyles = makeStyles({
  selectForm: {
    width: '50%',
    color: 'black',
    marginLeft: '25%',
    marginBottom: '1rem',
  },
  menuItems: {
    maxHeight: '500px',
    marginTop: '20px'
  }
});

function App() {
  const classes = useStyles();
  const [locations, setLocations] = useState([])
  const [currState, setCurrState] = useState('')
  const [unitedStatesData, setUnitedStatesData] = useState('')

  let saveData = (result) => {
    //setLocations(result.data)
    let data = result.data
    data = updateList(data)
    setLocations(data)
    setUnitedStatesData(data.filter(state => state.location === 'United States')[0])
  }

  let filterData = (data, cityName) => {
    let chosenCity = data.filter(row => row.location === cityName)
    //most recent data is the last entry in the arr
    chosenCity = chosenCity[chosenCity.length - 1]
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
      if (!updatedList.some(states => states.location === row.location)) {
        let finalEntry = filterData(locations, row.location)
        finalEntry.people_vaccinated = parseInt(finalEntry.people_vaccinated).toLocaleString()
        finalEntry.people_fully_vaccinated = parseInt(finalEntry.people_fully_vaccinated).toLocaleString()
        updatedList.push(finalEntry)
      }
    })
    return updatedList;
  }

  const handleSelect = (e) => {
    let value = e.target.value
    setCurrState(locations.filter(state => state.location === value)[0])
  }



  return (
    <div className="App">
      {console.log(currState)}
      <Header />
      <Container style={{ paddingTop: '1rem' }} maxWidth="md">
        <UnitedStatesCard stateData={unitedStatesData} />

        <FormControl size='small' variant='outlined' className={classes.selectForm}>
          <InputLabel id="stateSelect">Select State</InputLabel>
          <Select
            labelId="stateSelect"
            id="stateSelect"
            MenuProps={{ classes: { paper: classes.menuItems } }}
            onChange={handleSelect}
          >
            {locations.map((state, i) => <MenuItem key={i} value={state.location}>{state.location}</MenuItem>)}
          </Select>

        </FormControl>
        {currState !== '' ? <VaccineCard stateData={currState} /> : ''}

        <div style={{textAlign:'center'}}>
          <h2>Disclaimer</h2>
          <p>All data is provided by <a href='https://ourworldindata.org/'>Our World in Data</a> which can be found at their <a href='https://github.com/owid/covid-19-data/tree/master/public/data/vaccinations'>GitHub Repo</a>.
          </p>
        </div>

      </Container>

      <Footer/>
    </div>
  );
}

export default App;
