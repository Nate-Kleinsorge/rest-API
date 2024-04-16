import React, { useState, useEffect } from "react";
import paintingList from "../assets/paintings/paintings";
const apiUrl = 'http://localhost:3001/paintings';

function PaintingCard() {
    const [paintings, setPaintings] = useState([]);
    const [paintingList2, setPaintingList2] = useState(paintingList);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setPaintings(data));
    }, []);

    return (
    <div>
        <h1 className='text-center text-decoration-underline'>Creations</h1>
        <div className="row">
          {paintings.map((painting) => {
            return (
                <div className="p-2 col-sm-6">
                    <div className="card shadow">
                        <img className="card-img-top" src={paintingList2[painting.id - 1]} alt="top of card"></img>           
                        <div className="card-body">
                            <h5 className="card-title text-center" key={painting.id}>{painting.title}</h5>
                            <p className="card-text text-center" key={painting.id}>{painting.desc}</p>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
    )
}

export default PaintingCard;