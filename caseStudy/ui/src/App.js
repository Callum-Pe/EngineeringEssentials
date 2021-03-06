/**
 * Copyright 2018 Goldman Sachs.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import './style/App.css';

import moment from 'moment';
import Date from './components/Date.js';

/**
 * TODO:
 * Import your components
 */

import LineChart from './components/charts/LineChart.js';
import Chart from './components/Charts.js';
// import CompanyData from '.../services/src/main/resources/data/companyInfo.json';
// import StockData from '.../services/src/main/resources/data/historicalStockData.json';
// import TestData from '.../services/src/main/resources/data/testStockData.json';
import TestData from './testStockData.json';
import StockTicker from './components/StockTicker.js';
import Banner from './components/TitlePage.js';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            /**
             * TODO
             * Add state objects for the user inputs and anything else you may need to render the highchart.
             */

            date: moment()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({date: date});

    }




    render () {
      return (
          <div className="page-display">
          <Banner/>
          <div>
            <h1 text-align="center" width="50%">Goldman Sachs Engineering Essentials 2018</h1>
          </div>
          {/* <Chart /> */}
            <StockTicker/>
            <LineChart data={TestData.dailyClosePrice}/>
              <div className="input">
              {
                   [<Date onChange={this.handleChange} />,
                    <Date onChange={this.handleChange} />]
                  
                  /**

              
               * TODO
               * Render the StockTicker and Date components. You can use the date component twice
               * for both the start and end dates.
               * Add onChange props to the StockTicker and both Date components.
               * These props methods should set state and help determine if the
               * highchart should be displayed by changing the state of that boolean.
               * Don't forget to bind these methods!
               */}

                <div className="date-range">

                </div>
              </div>


                 {/**
                   *  TODO
                   *  Create a div element that shows a highchart when the ticker, start date, end date
                   *  states ALL have values and nothing (null) otherwise. You will need to use a conditional here
                   *  to help control rendering and pass these states as props to the component. This conditional can
                   *  be maintained as a state object.
                   *  http://reactpatterns.com/#conditional-rendering
                   */}
                   

          </div>
      );
    }
}

export default App;
