import logo from './logo.svg';
import data from './data';
import './App.css';
import { useState } from 'react';
import List from './List'

function App() {
const [persons, setPersons] = useState(data);
  return (
    <main>
        <h3 className='text'> {persons.length} birthdays today</h3>
        {
        persons.map(person => <List person = {person}></List>)
        }
        <button onClick={() => setPersons([])}> Clear All </button>

      
    </main>
  );
}

export default App;
