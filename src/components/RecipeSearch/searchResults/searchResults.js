import React from 'react'
import styles from './searchResults.module.scss'

const searchResults = ({image, label, dietLabels}) => {
let labil = String(dietLabels);

    return (<>
    <div className={styles.result}>
        <img src={image} alt={label}></img>
    <div className={styles.desc}>
        <h3>{label}</h3>
        <p className={ labil.length > 1 ? styles.label: null}>{dietLabels}</p>
        </div>
    </div>
    </>
)};

export default searchResults;