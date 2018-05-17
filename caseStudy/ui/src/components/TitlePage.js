import React from 'react';
import Banner from 'react-banner';
import 'react-banner/dist/style.css';


export default props => {
    return (
        <Banner
            logo="Goldman Sachs Engineering Essentials 2018"
            logo= {<img src="https://static1.squarespace.com/static/5a2861f1d74cff16007d5a71/t/5a31acf2ec212da75969e21e/1513204980641/?format=750w" height="261px" width="391px"/> }
            url={ window.location.pathname }
            links={[
                // { "title": "GS.com", "url": "/example" },
                // { "title": <i className="https://commons.wikimedia.org/wiki/File:Goldman_Sachs.svg>"/},

                { "title": "Contributors", "url": "/children", "children": [
                    { "title": "Isabella", "url": "/children/john" },
                    { "title": "Callum", "url": "/children/jill" },
                    { "title": "India", "url": "/children/jack" },
                    { "title": "David", "url": "/children/david" },
                    { "title": "Ashton", "url": "/children/asthon" },
                    { "title": "Aashita", "url": "/children/ashita" }
                ]}
            ]} />
    )
}

