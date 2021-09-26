import './App.css';
import { api } from './api';
import React, { Component } from 'react';
import BarChart from './components/BarChart';
import Trend from './components/Trend'
import TrendArea from './components/TrendArea';


class App extends Component{

  state = {
    trends: [],
  }

  
  async componentDidMount(){
    const response = await api.get('trends');
    this.setState({ trends: response.data })
  }

  

  render(){

    const { trends } = this.state


    return(
      <div>
        <h1>Trending Toppics do Twitter</h1>
        <div><BarChart trends={trends}/></div>
        <div><TrendArea trends={trends}/></div>
      </div>

    )
  }
}


export default App;
