import React from 'react'
import styles from './SerachResult.module.css'

function SearchResult({ result }) {
  return (
    <div  className={styles.resultlist}>
      {result.map((result, id) => {
        return <div className={styles.list}
          key={id}>
            {result.state_name}
        </div>
      })}
     
    </div>
  )
}

export default SearchResult