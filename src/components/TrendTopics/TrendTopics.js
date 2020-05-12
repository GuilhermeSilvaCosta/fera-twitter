import React from 'react';

import './TrendTopics.css';

function TrendTopics() {

    return (
        <div className="trend-topics-container">

            <input type="text" name="search" placeholder="Buscar no Twitter" />

            <div className="panel">
                <ul>
                    <li>
                        <strong>Assuntos para você</strong>
                    </li>
                    <li>
                        <span>Assuntos no momento no brasil</span><br />
                        <strong>#MeContrate</strong><br />
                        <span>18,9 mil tweets</span>
                    </li>
                    <li>
                        <span>Assuntos no momento no brasil</span><br />
                        <strong>#FERACODE</strong><br />
                        <span>300 mil tweets</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TrendTopics;