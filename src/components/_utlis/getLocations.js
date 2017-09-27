export const getLocations = (results,stops) => {

    const {
        startStop: {id: startId},
        endStop: {id: endId},
        routeStops
    } = results;

    const routeIds = routeStops.map(stop => stop.id);

    return ({
            startStop: stops.find(stop => stop.id === startId),
            endStop: stops.find(stop => stop.id === endId),
            routeStops: stops.filter(stop => routeIds.includes(stop.id))
        })
}