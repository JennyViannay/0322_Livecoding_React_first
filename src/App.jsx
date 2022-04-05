import axios from 'axios';
import { useEffect, useState } from 'react';
import CardCharacter from './components/CardCharacter';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((response) => setCharacters(response.data.results));
  }, []);

  useEffect(() => {
    setUser({name: 'plop'})
  }, []);

  console.log(characters);
  return (
    <div className="container">
      <button onClick={() => alert('plop')}>Hello</button>
      {characters.length > 0 ? (
        characters.map((character) => <CardCharacter character={character} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
