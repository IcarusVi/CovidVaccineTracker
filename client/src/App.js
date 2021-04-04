import './App.css';
import Header from './components/header'
import Container from '@material-ui/core/Container'
import VaccineCard from './components/vaccineCard';
function App() {
  return (
    <div className="App">
      <Header/>
      <Container style={{paddingTop:'1rem'}} maxWidth="lg">
        <VaccineCard></VaccineCard>

      </Container>
    </div>
  );
}

export default App;
