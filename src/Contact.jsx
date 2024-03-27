import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Menu from "./components/Menu"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Contact = () => {
    const position = [-25.4999703, -49.3025426]
    const geoData = ({ lat: -25.4999703, lng: -49.3025426 })

    return (
        <>
            <Menu />
            <div>
                <h1>Contatos</h1>
                <div>
                    <h2>Mapa</h2>
                    <div>
                        <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "700px" }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[geoData.lat, geoData.lng]}>
                                <Popup>
                                    <a href={`https://www.google.com.br/maps/@${geoData.lat},${geoData.lng},17z?entry=ttu`}>Google Maps</a><br />
                                    <p>Rua Magdalen de Almeida, 224</p>
                                </Popup>
                            </Marker>
                        </MapContainer>,
                    </div>
                </div>
            </div>
        </>
    )
}