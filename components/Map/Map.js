import { useEffect } from 'react';
import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { DEFAULT_CENTER, DEFAULT_ZOOM, mapType } from '../../config/config';

const Map = ({ type }) => {

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, [type]);

  return (
    <>
      <MapContainer className={styles.map} center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM}>
        <TileLayer
          url={mapType[type] || mapType.default}
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={DEFAULT_CENTER}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {Object.keys(mapType).map(item =>
        <div key={item} onClick={() => {
          window.location = `${window.location.pathname}?type=${item}`
        }}>
          {item}
        </div>)
      }
    </>
  )
}

export default Map;