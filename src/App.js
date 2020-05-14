import React from 'react';

import {
    Cards,
    Chart,
    CountryPicker
} from './components';

import styles from './App.module.css';
import {
    fetchData
} from './api';

import coronoImage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({
            data: fetchedData,
            country: country
        });

        // console.log(fetchedData);

        // console.log(country);
    }



    render() {

        const {
            data,
            country
        } = this.state;
        return ( <
            div className = {
                styles.container
            } >

            <
            img className = {
                styles.image
            }
            src = {
                coronoImage
            }
            alt = "COVID-19" / >
            <
            Cards data = {
                data
            }
            / > <
            Chart data = {
                data
            }
            country = {
                country
            }
            / > <
            CountryPicker handleCountryChange = {
                this.handleCountryChange
            }
            / >

            <
            /div>
        )
    }
}

export default App;