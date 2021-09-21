import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

function Map({ searchResult }) {

  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResult.map((data, index) => ({
    longitude: data.long,
    latitude: data.lat
  }))

  const center = getCenter(coordinates)
  console.log(center)

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12
  });

  return (
    <ReactMapGL
      width='100%'
      height='100%'
      mapStyle='mapbox://styles/peshowww/cktuj6epo1cmx17kf81ykduuj'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResult.map(data => (
        <div key={data.long}>
          <Marker
            longitude={data.long}
            latitude={data.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p onClick={() => setSelectedLocation(data)} className='cursor-pointer text-xl animate-bounce'>
              📌
            </p>
          </Marker>

          {/* Popup on Marker */}
          {selectedLocation.long === data.long ? (
            <Popup
              onClose={() => setSelectedLocation('')}
              closeOnClick={true}
              latitude={data.lat}
              longitude={data.long}
            >
              {data.title}
            </Popup>
          ) : (false)}
        </div>
      ))}

    </ReactMapGL>
  )

}

export default Map
