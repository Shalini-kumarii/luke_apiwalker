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

    const [person, setperson] = useState({}); // because object comes back

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
                setperson(res.data)
            })
            // axios wraps our res in a .data obj
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                person.name ?
                    <div>
                        <h1>inside person</h1>
                        <p style={{ fontWeight: "bold" }}>Name: {person.name}</p>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                        <p>Hair Color: {person.hair_color}</p>
                        <p>Skin Color:{person.skin_color}</p>
                    </div> :
                    <p> Loading ...</p>

        }
        </div>
    );
}

export default People;