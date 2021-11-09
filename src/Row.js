import React, {useState, useEffect} from 'react'
import axios from "./axios";

function Row({title, fetchUrl}) {
    // const [movies, setmovies] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl)
            console.log(request);
            return request;
        }
        fetchData();
    }, []);
    return (
        <div className="Netflix-orginals">
            <h1>{title}</h1>
        </div>
    )
}

export default Row
