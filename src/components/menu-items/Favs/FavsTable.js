import React from 'react'

import {FavItem} from './FavItem'

import './Favs.css'

export const FavsTable = ({favs, showOnMapClick}) => {

    if (favs) {
        var favsArray = Object.keys(favs).map(key => favs[key]);
    }

    return (
        <div className="favs">
            <h5>This is your favorite connections:</h5>
            <table>
                <thead>
                <tr>
                    <th>Line</th>
                    <th colSpan={2}>Departure</th>
                    <th colSpan={2}>Arrival</th>
                </tr>
                </thead>
                {
                    favs ?
                        favsArray.map( (fav, index) =>
                            <FavItem
                                key={index}
                                fav={fav}
                                favs={favsArray}
                                showOnMapClick={showOnMapClick}
                            />
                        )
                        :
                        <tbody>
                        <tr>
                            <td colSpan={5}>
                                No connections saved
                            </td>
                        </tr>
                        </tbody>
                }
            </table>
        </div>
    )
}