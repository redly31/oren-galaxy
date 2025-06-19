import { Placemark, YMaps, Map } from "react-yandex-maps";
import './fix.css'

export default function MapWidget() {
  const center = [51.768199, 55.096955]; // Центр Оренбурга
  const point1 = [51.768199, 55.096955]; // Центральная точка
  const point2 = [51.770375, 55.112328]; // Например, вокзал  
  return (
    <YMaps>
      <Map key="main-map" defaultState={{ center, zoom: 12 }} width="100%" height="400px">
        <Placemark geometry={point1} properties={{ balloonContent: "Центр города" }} />
        <Placemark geometry={point2} properties={{ balloonContent: "Ж/д вокзал" }} />
      </Map>
    </YMaps>
  );
}
