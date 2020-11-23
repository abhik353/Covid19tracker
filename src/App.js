import React from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

class App extends React.Component {

    state = {
        data:{}
    }

    async componentDidMount(){
        const covidData = await fetchData()
        console.log(covidData)
        this.setState({data: covidData})
    }

    render(){
        const {data} = this.state
        return (
            <div className={styles.container}>
                <h1>hello</h1>
                <Cards data={data}/>
                <Chart/>
                
            </div>
        )
        }
}

export default App
