import React from 'react'

import {FavItem} from './FavItem'

export const FavsTable = ({favs, showOnMapClick}) => {

    if (favs) {
        var favsArray = Object.keys(favs).map(key => favs[key]);
    }

    return (
        <div className="">
            <h5>This is your favorite connections:</h5>
            <table>
                <thead>
                <tr>
                    <th>Line</th>
                    <th>Departure</th>
                    <th>Time</th>
                    <th>Arrival</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {
                    favs ?
                        favsArray.map( fav =>
                            <FavItem
                                key={fav.name}
                                fav={fav}
                                favs={favsArray}
                                showOnMapClick={showOnMapClick}
                            />
                        )
                        :
                        <tr>
                            <td colSpan={5}>
                                No connections saved
                            </td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    )
}