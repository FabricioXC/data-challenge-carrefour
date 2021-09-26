import React from 'react'
import Trend from './Trend';
import styles from './Trend.module.css';

const TrendArea = ({trends}) => {


    return (

          <div className={styles.trendAreaContainer}>
           <Trend trends={trends}/>
          </div>
        
    )


}

export default TrendArea