import React from "react";
import { Bar } from 'react-chartjs-2';

const BarChart = ({trends}) => {
    let name = []
    let tweet_volume = []
    let pos = 0

    for (var trend in trends){
      name.push(trends[trend]['name'])
      name[trend] = `(${parseInt(trend) + 1}) ` + name[trend]
      tweet_volume.push(trends[trend]['tweet_volume'])
    }
    console.log(name, tweet_volume)

     
    return (
    <div><Bar
        data={{
            labels: name,
            datasets: [{
                label: '# Volume de Tweets',
                data: tweet_volume,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
        }
        height={400}
        width={600}
        options={{maintainAspectRatio: false}}
    /></div>
    )
}

export default BarChart