import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";

function SearchBar({setResult}) {
  const [inp, setInp] = useState('')

  const fetchData=(value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
      const result=data.filter((user)=>{
        return  value && user &&user.name && user.name.toLowerCase().includes(value)
      })
      setResult(result)
    })
  }
  
  const handleChange=(value)=>{
    setInp(value)
    fetchData(value)
  }

  return (
    <div className={styles.inpwrapper}>
      <FaSearch className={styles.icon} />
      <input className={styles.inp}
        placeholder='Type something  to search...'
        value={inp}
        onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default SearchBar