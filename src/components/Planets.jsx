import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Planets = (props) => {

    const [planet, setplanet] = useState({});

    const { resource, id } = useParams();

    console.log(id);

    useEffect(() => {
        axiosPokemons();
    }, [id]);

    const axiosPokemons = () => {
        console.log(id);
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setplanet(res.data)
            })
            // axios wraps our res in a .data obj
            .catch(err => console.log(err))
    }

    return (
        <div>
        {
            planet.name ?
            <div>
            <h1>inside Planet</h1>
            <p style={{ fontWeight: "bold" }}>Name: {planet.name}</p>
            <div style={{ display: "inline" }}>
                <p style={{ fontWeight: "bold" }}>Climate:</p><p> {planet.climate}</p>
            </div>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population:{planet.population}</p>
            </div>
            : <p>Loading...</p>

        }
        </div>
    );
}

export default Planets;