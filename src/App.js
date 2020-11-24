import React from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api/index'
import covid from './images/covidimg.png'
class App extends React.Component {

    state = {
        data:{},
        country: ''
    }

    async componentDidMount(){
        const covidData = await fetchData()
        this.setState({data: covidData})
    }

    handleCountryChange = async (country) => {
        const covidData = await fetchData(country)
        this.setState({data: covidData, country: country})
    } 

    render(){
        const {data, country} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid} alt="covid"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/> 
                
            </div>
        )
        }
}

export default App
