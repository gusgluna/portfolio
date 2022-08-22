import { Container } from '@mui/material';
import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Container sx={{ "border": "1px solid" }}>
        Hello World
      </Container >
    </div >
  );
}

export default App;
