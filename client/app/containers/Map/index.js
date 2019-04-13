import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';
import {OPENSTREETMAP_TOKEN as accessToken} from './constants'

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
    MapInstance = null;

    componentDidMount() {
        this.MapInstance = L.map('map', {
            center: [46.469391, 30.740883],
            zoom: 12
        });
        L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken
        }).addTo(this.MapInstance);
        const testPolygonCoords = [
            [41.469391, 30.740883],
            [42.469371, 31.740883],
            [43.469391, 30.740993],
            [44.469391, 30.740993],
            [45.469391, 30.740993],
            [46.469391, 30.740993],
            [45.469391, 30.740993],
            [44.469391, 30.740993],
            [43.469391, 30.740993],
            [42.469391, 30.740993],
            [41.469391, 30.740993],
        ];
        const testCircleCoords = [46.469391, 30.740883];
        this.renderPolygon(testPolygonCoords);
        this.renderCircle(testCircleCoords);
    }

    renderPolygon = (coords) => {
        L.polygon([...coords]).addTo(this.MapInstance);
    };

    renderCircle = (coords, radius = 15000) => {
        L.circle(coords, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius
        }).addTo(this.MapInstance);
    };

    render() {
        return (
            <div id="map"/>
        );
    }
}
