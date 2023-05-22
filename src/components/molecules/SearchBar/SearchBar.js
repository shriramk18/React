import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";

function SearchBar({ setResult }) {
  const [inp, setInp] = useState('')

  const fetchData = (value) => {
    fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => response.json())
     
      .then((data) => {
        // console.log(data.states)
        const result = data.states.filter((state) => {
          return value && state && state.state_name && state.state_name.toLowerCase().includes(value)
        })
        setResult(result)
      })


  }

  const handleChange = (value) => {
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