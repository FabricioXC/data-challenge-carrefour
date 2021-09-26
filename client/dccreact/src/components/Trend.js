import React from 'react'
import styles from './Trend.module.css';


const Trend = ({trends}) => {


    return (
        trends.map((trend, index) => (
          <div key={trend._id} className={styles.trendContainer}>
            <h2 className={styles.trendTitle}>{(index + 1) + ' - ' + trend.name}</h2>
            <a href={trend.url} target="_blank">Trend Link</a>
            <p className={styles.tweetVolume}><b>Volume de Tweets:</b> {trend.tweet_volume != null ? trend.tweet_volume : "Não disponibilizado pela API"}</p> 
          </div>
        )
    ))


}

export default Trend