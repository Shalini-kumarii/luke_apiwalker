import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const People = (props) => {

    const [people, setPeople] = useState('');

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        axiosPokemons();
    }, [id]);

    const axiosPokemons = () => {
        console.log(id);
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setPeople(res.data)
            })
            // axios wraps our res in a .data obj
            .catch(err => console.log("These aren't the droids you're looking for"+err))
    }

    return (
        <div>
            <h1>inside people</h1>
            <p style={{ fontWeight: "bold" }}>Name: {people.name}</p>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color:{people.skin_color}</p>
        </div>
    );
}

export default People;