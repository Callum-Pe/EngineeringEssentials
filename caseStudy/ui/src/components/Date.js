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




/* Display a date picker component for the start date of the range for your line chart.
 *
 * Take a look at the react-datepicker for a DatePicker component
 * It is already provided as a part of the package.json. You may use
 * another package for this component if you'd like.
 * https://www.npmjs.com/package/react-datepicker
 * https://hacker0x01.github.io/react-datepicker/
 * 
 * npm install react-datepicker --save
 */

import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class Date extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            date: moment()
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.props.onChange(this.state.date);
    }

    handleChange(date) {
        /**
         * TODO
         * Set the state. Call this.props.onChange with the date argument
         * to propagate the change to App component, which will handle it via its
         * own onChange prop.
         */

         this.props.onChange(this.state.date);


    }

    render() {
        return (
            <div className="date">
                {
                    /**
                     * TODO
                     * Render the date picker component with a date format of "MM/DD/YYYY".
                     * Add a props for an onChange method. Don't forget to bind this method!
                     * This method should set the state to the date argument passed in the parameter.
                     *
                     */
                    <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                }
                <p><strong>{this.props.text}</strong></p>
                <div className="date-input">

                </div>
            </div>
        );
    }


}

export default Date;

// Don't forget to export your component!