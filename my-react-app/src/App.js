import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Button buttonText='Find out more' />
      <Card price ='15.000 ₽'/>
      <Card price ='10.000 ₽'/>
       <Card price ='8.000 ₽'/>
    </div>
  );
}

export default App;
