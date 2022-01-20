import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const Home = (props) => {

    const [resource, setResource] = useState("people");

    const [selectId, setId] = useState("1");

    const history = useHistory();
    console.log(history);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectId);
        console.log(resource);
        history.push("/" + resource + "/" + selectId);


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Home</h1>
                <label >Search</label>
                <select onChange={(e) => setResource(e.target.value)} value={resource}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label>ID</label>
                <input onChange={(e) => setId(e.target.value)} type='number' value={selectId}></input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default Home;