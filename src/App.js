import { useState } from 'react';
import styles from './App.module.css'
import SearchBar from './components/molecules/SearchBar/SearchBar';
import SearchResult from './components/molecules/SearchResult/SearchResult';

function App() {

  const [result,setResult]=useState([])

  return (
    <div className={styles.App}>
      <div className={styles.searchContainer} >
        <SearchBar setResult={setResult}/>
        <SearchResult result={result}/>
      </div>
    </div>
  );
}

export default App;
