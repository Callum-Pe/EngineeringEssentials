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
import Highcharts from 'highcharts';

class LineChart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // TODO
        // Create a highcharts line chart of your choosing (e.g. https://www.highcharts.com/demo/line-time-series for a demo).
        this.chart = Highcharts.chart('chart', {
            chart: {
                zoomType: 'x'
            },

            title: {
                text: 'Stock Price for Company over Time'
            },

            xAxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                //             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                type: 'datetime',
                // labels: {
                //     format: '{value:%Y-%b-%e}'
                // }
            },
            yAxis: {
                title: {
                    text: 'Prices'
                }
            },
            legend: {
                enabled: false
            },

            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                name: 'Prices',
                data: this.props.data
            }]
        });

        this.componentWillReceiveProps(this.props);
    }

    componentWillReceiveProps(props) { //props.data is the content in the json file for one company
        console.log("New data received to redraw chart.");
        console.log(props.data);
        
        /**
         * TODO
         * Parse the data received from props, a Javascript object, to map to a Javascript array
         * required by the type of line chart chosen and set it in the series. Use Date.UTC(..)
         * to create the x-axis.
         */

        var data = new Array();
        if (props.data != undefined) {
            for (var dataPoint in props.data[0]) {
                let dataPointValue = props.data[0][dataPoint];
                
                // console.log(dataPointValue);
                var splits = dataPoint.split("/");
                console.log(splits[2]);
                data.push([Date.UTC(splits[2], splits[1] - 1, splits[0]), dataPointValue]); //TODO: fix later
                // data.push([Date.UTC(2018, 9, 2), dataPointValue]);
                console.log(data);
            }
        }

        data.sort();
        console.log(data);


        /**
         * TODO
         * Uncomment the line below to pass the data be displayed to the series
         * this.chart.series[0].setData(data);
         */

        
            this.chart.series[0].setData(data);
        
    }

    componentWillUnmount() {
        this.chart.destroy();
    }


    render() {
        return (
            <div id='chart'></div>
        )
    }
}

// Don't forget to export your component!
export default LineChart;