import React from 'react'

import './Prices.css'


const Prices = () => (
    <div className="main-panel prices">
        <h1>Prices</h1>
        <h2>Single tickets</h2>
        <div className="row">
            <div className="col-xs-6">
                <ul className="prices-list prices_list--oneway">
                    <h3>One way tickets</h3>
                    <p>Normal lines</p>
                    <li>1.60 PLN<i className="fa fa-child" aria-hidden="true"></i></li>
                    <li>3.20 PLN</li>
                    <p>Special and night lines</p>
                    <li>2.10 PLN<i className="fa fa-child" aria-hidden="true"></i></li>
                    <li>4.20 PLN</li>
                </ul>
            </div>
            <div className="col-xs-6">
                <ul className="prices-list prices_list--time">
                    <h3>Time tickets</h3>
                    <p>Normal lines - 1 hour</p>
                    <li>1.90 PLN<i className="fa fa-child" aria-hidden="true"></i></li>
                    <li>3.80 PLN</li>
                    <p>Special and night lines - 1 hour</p>
                    <li>2.40 PLN<i className="fa fa-child" aria-hidden="true"></i></li>
                    <li>4.80 PLN</li>
                    <p>All lines - 24 hours</p>
                    <li>6.50 PLN<i className="fa fa-child" aria-hidden="true"></i></li>
                    <li>13.00 PLN</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Prices